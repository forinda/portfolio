import type { IUserWithoutPassword } from "./schema";

export type ClientHttpResponseType<T> = {
  status: number;
  message: string;
  access: boolean;
  data: T;
};
export type PaginatedHttpResponseType<T> = {
  status: number;
  data: {
    page: number;
    total: number;
    pages: number;
    docs: T[];
  };
  message: string;
  access: boolean;
};
type LoginResponseDataType = {
  user: IUserWithoutPassword;
  accessToken: string;
  refreshToken: string;
};

type CheckAuthDataType = { id: string; email: string; username: string };

export type LoginResponseType = ClientHttpResponseType<LoginResponseDataType>;
export type CheckAuthResponseType = ClientHttpResponseType<CheckAuthDataType>;
