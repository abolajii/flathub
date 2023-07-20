import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FlatHub } from "../../api";
import profileService from "./profileService";

const initialState = {
  profile: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new profile
export const createProfile = createAsyncThunk(
  "profile/create",
  async (profileData, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token;
      return await profileService.createProfile(profileData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// Create new profile
export const updateProfile = createAsyncThunk(
  "profile/update",
  async (profileData, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token;
      return await profileService.updateProfile(profileData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get user profile
export const getProfile = createAsyncThunk(
  "profile/get",
  async (_, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token;
      return await profileService.getProfile();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getUser = createAsyncThunk("user/get", async (_, thunkAPI) => {
  try {
    // const token = thunkAPI.getState().auth.user.token;
    return await profileService.getUser();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const getSubscriptionPlans = createAsyncThunk(
  "subscription-plans/get",
  async (_, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token;
      return await profileService.getPlans();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const intializePayment = (subscriptionPlanId) => {
  return async (dispatch) => {
    const { data } = await FlatHub.post("/payments/paystack/initialize", {
      subscriptionPlanId,
    });

    return data;
  };
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.subscription_plans = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.profile.push(action.payload);
      })
      .addCase(createProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.profile = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getSubscriptionPlans.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSubscriptionPlans.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.subscription_plans = action.payload;
      })
      .addCase(getSubscriptionPlans.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
    // .addCase(deleteProfile.pending, (state) => {
    //     state.isLoading = true;
    // })
    // .addCase(deleteProfile.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.isSuccess = true;
    //     state.Profiles = state.Profiles.filter(
    //         (Profile) => Profile._id !== action.payload.id
    //     );
    // })
    // .addCase(deleteProfile.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.isError = true;
    //     state.message = action.payload;
    // });
  },
});

export const { reset } = profileSlice.actions;
export default profileSlice.reducer;
