import { ZodError } from "zod";
import { ApiError } from "~/utils/api-error";

type HttpResp<T> = {
    status: number;
    data: T;
    message: string;
};

type CreateRespProps<T> = {
    status: number;
    data?: T;
    message?: string;
};

type EventType = Parameters<typeof readBody>[0];
export function createHttpResponse<T = unknown>(
    event: EventType,
    { data, message = "success", status }: CreateRespProps<T>,
): HttpResp<T> {
    event.node.res.statusCode = status;
    return {
        status,
        data: data as T,
        message,
    };
}

export function createHttpErrorResponse(event: EventType, error: any) {
    if (error instanceof ApiError) {
        const { statusCode } = error;
        return createHttpResponse(event, {
            status: statusCode,
            message: error.message,
        });
    }
    // return createHttpResponse(500, null, error.message);
    return createHttpResponse(event, { status: 500, message: error.message });
}
