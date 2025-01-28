export type ClientHttpResponseType<T> = {
    status: number;
    message: string;
    access: true;
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
export type LoginResponseType = ClientHttpResponseType<LoginResponseDataType>;
