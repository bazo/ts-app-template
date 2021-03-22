/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
	interface ProcessEnv {
		readonly NODE_ENV: "development" | "production" | "test";
	}
}
