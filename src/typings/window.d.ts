// * global
declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: unknown;
	}
	interface Navigator {
		msSaveOrOpenBlob: (blob: Blob, fileName: string) => void;
		browserLanguage: string;
	}
}
export {};
