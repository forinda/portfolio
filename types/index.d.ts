export type ClientHttpResponseType<T> = {
	status: number;
	message: string;
	access: boolean;
	data: T;
};

type LoginResponseDataType = {
	user: {
		_id: string;
		email: string;
		firstName: string;
		lastName: string;
		username: string;
		createdAt: string;
		updatedAt: string;
		__v: 0;
	};
	accessToken: string;
	refreshToken: string;
};

type CheckAuthDataType = { id: string; email: string; username: string };

export type LoginResponseType = ClientHttpResponseType<LoginResponseDataType>;
export type CheckAuthResponseType = ClientHttpResponseType<CheckAuthDataType>;
