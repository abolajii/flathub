import { createSelector } from "reselect";

const selectProfile = state => state.profile;

export const selectCurrentUserProfile = createSelector([selectProfile], profile => profile.user?.data);
export const selectSubscriptionPlans = createSelector([selectProfile], profile => profile.subscription_plans?.data);