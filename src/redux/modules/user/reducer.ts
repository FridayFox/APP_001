import { AnyAction } from "redux";
import { UserState } from "@/redux/interface";
import { produce } from "immer";
import * as types from "@/redux/mutation-types";

const userState: UserState = {
	userInfo: {},
	token: ''
};

// auth reducer
const user = (state: UserState = userState, action: AnyAction) => 
  produce(state, (draftState: any) => {
    console.log('userInfo更新------>')
		switch (action.type) {
			case types.SET_USER_INFO:
				draftState.userInfo = action.userInfo;
				break;
			case types.SET_TOKEN:
				draftState.token = action.token;
				break;
			default:
				return draftState;
		}
	});
export default user;
