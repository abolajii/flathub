import { API } from '../../src/config';
import { FlatHub } from '../../src/api';
import {
	USER_DETAILS_FAIL,
	USER_DETAILS_REQUEST,
	USER_DETAILS_SUCCESS,
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
	USER_REGISTER_FAIL,
	USER_REGISTER_SUCCESS,
	USER_UPDATE_PROFILE_FAIL,
	USER_UPDATE_PROFILE_REQUEST,
	USER_UPDATE_PROFILE_SUCCESS,
} from '../../src/constants/userConstants';

export const getUserDetails = id => async (dispatch, getState) => {
	try {
		dispatch({
			type: USER_DETAILS_REQUEST,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const { data } = await FlatHub.post(`/user/${id}`);

		dispatch({
			type: USER_DETAILS_SUCCESS,
			payload: data,
		});

		localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
export const updateUserProfile = user => async (dispatch, getState) => {
	try {
		dispatch({
			type: USER_UPDATE_PROFILE_REQUEST,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const { data } = await FlatHub.put(`/user/profile`, user);

		dispatch({
			type: USER_UPDATE_PROFILE_SUCCESS,
			payload: data,
		});

		localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_UPDATE_PROFILE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const register = postData => async dispatch => {
	// const { fname, lname, email, password } = postData;
	try {
		dispatch({
			type: USER_LOGIN_REQUEST,
		});

		const { data } = await FlatHub.post(
			`${API}/auth/register`,
			postData
		);

		dispatch({
			type: USER_REGISTER_SUCCESS,
			payload: data,
		});
		//LOGIN USER
		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data,
		});
		localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_REGISTER_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
export const login = ({ email, password }) => async dispatch => {
	try {
		dispatch({
			type: USER_LOGIN_REQUEST,
		});

		const { status, data, message } = await FlatHub.post(
			`/auth/login`,
			{ email, password },
		);

		console.log(message);
		if (status === 200) {

			dispatch({
				type: USER_LOGIN_SUCCESS,
				payload: data,
			});
			localStorage.setItem('userInfo', JSON.stringify(data));
		} else {
			dispatch({
				type: USER_LOGIN_FAIL,
				payload: message,
			});
			console.log(message, "Error Message");
		}
	} catch (error) {
		console.log(error);
		dispatch({
			type: USER_LOGIN_FAIL,
			payload:
				error.response && error.data.message
					? error.data.message
					: error.data.message,
		});
	}
};

export const logout = () => dispatch => {
	localStorage.removeItem('userInfo');
	dispatch({ type: USER_LOGOUT });
};
