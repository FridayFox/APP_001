import type { SizeType } from "antd/lib/config-provider/SizeContext";

/* themeConfigProp */
export interface ThemeConfigProp {
	primary: string;
	isDark: boolean;
	weakOrGray: string;
	breadcrumb: boolean;
	tabs: boolean;
	footer: boolean;
}

/* GlobalState */
export interface GlobalState {
	token: string;
	userInfo: any;
	assemblySize: SizeType;
	language: string;
	themeConfig: ThemeConfigProp;
}

/* AuthState */
export interface AuthState {
	authButtons: {
		[propName: string]: any;
	};
	authRouter: string[];
}

/* UserState */
export interface UserState {
	userInfo: {
		[propName: string]: any;
	};
	token: string;

}
