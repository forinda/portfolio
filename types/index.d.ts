import type { IUserWithoutPassword } from "./schema";

export type ClientHttpResponseType<T> = {
	status: number;
	message: string;
	access: boolean;
	data: T;
};

type LoginResponseDataType = {
	user: IUserWithoutPassword
	accessToken: string;
	refreshToken: string;
};

type CheckAuthDataType = { id: string; email: string; username: string };

export type LoginResponseType = ClientHttpResponseType<LoginResponseDataType>;
export type CheckAuthResponseType = ClientHttpResponseType<CheckAuthDataType>;
