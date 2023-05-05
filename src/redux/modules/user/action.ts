import * as types from "@/redux/mutation-types";

// * setAuthButtons
export const setUserInfo = (userInfo: { [propName: string]: any }) => ({
	type: types.SET_USER_INFO,
	userInfo
});

// * setAuthRouter
export const setToken = (token: string) => ({
	type: types.SET_TOKEN,
	token
});
