import { ZodError } from "zod";
import { ApiError } from "~/utils/api-error";

type HttpResp<T> = {
    status: number;
    data: T;
    message: string;
    access: boolean;
};

type CreateRespProps<T> = {
    status: number;
    data?: T;
    message?: string;
    access?: boolean;
};

type EventType = Parameters<typeof readBody>[0];
export function createHttpResponse<T = unknown>(
    event: EventType,
    { data, message = "success", status, access = true }: CreateRespProps<T>,
): HttpResp<T> {
    event.node.res.statusCode = status;
    return {
        status,
        data: data as T,
        message,
        access,
    };
}

export function createHttpErrorResponse(
    event: EventType,
    error: any,
    access = true,
) {
    if (error instanceof ApiError) {
        const { statusCode } = error;
        event.node.res.statusCode = statusCode;
        return createHttpResponse(event, {
            status: statusCode,
            message: error.message,
        });
    }
    // return createHttpResponse(500, null, error.message);
    return createHttpResponse(event, {
        status: "status" in error ? error.status : 500,
        message: error.message,
        access,
    });
}
