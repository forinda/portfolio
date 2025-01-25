import { getBaseDbClient } from "~/server/db/clients/base-client";
import { loginUserSchema } from "~/utils/validators/schema/login-user-schema";
import {
    createHttpErrorResponse,
    createHttpResponse,
} from "~/utils/create-http-reponse";
import { comparePassword } from "~/utils/password";
import { Jwt } from "~/utils/tokens";
import { validateSchema } from "~/utils/validator";

export default defineEventHandler(async (event) => {
    try {
        const { User } = await getBaseDbClient();
        const body = await readBody(event);
        const payload = validateSchema(loginUserSchema, body);
        const filter = payload.emailOrUsername.includes("@")
            ? { email: payload.emailOrUsername }
            : { username: payload.emailOrUsername };
        const existingUser = await User.findOne({email:'test'}).select("+password");
       
        if (!existingUser) {
            return createHttpResponse(event, {
                status: 400,
                message: "Invalid login credentials",
            });
        }
        const isPasswordValid = await comparePassword(
            payload.password,
            existingUser?.password!,
        );
        if (!isPasswordValid) {
            return createHttpResponse(event, {
                status: 400,
                message: "Invalid login credentials",
            });
        }
        const { password: _, ...user } = existingUser?._doc;

        const tokens = Jwt.generateTokens({
            id: existingUser._id as string,
            email: existingUser.email,
            username: existingUser.username,
        });

        return createHttpResponse(event, {
            status: 200,
            data: {
                user: user,
                ...tokens,
            },
            message: "Account created successfully",
        });
    } catch (error: any) {
        return createHttpErrorResponse(event, error);
    }
});
