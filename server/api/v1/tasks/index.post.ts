import { createTaskSchema } from "~/utils/schema/create-task-schema";

export default defineEventHandler(async (event) => {
  try {
    const { user } = checkUserSession(event, "linear", {
      throwError: true,
      type: "linear",
    });
    const { Task } = await getBaseDbClient();
    const body = validateSchema(createTaskSchema, await readBody(event));
    const created = await Task.create({
      ...body,
      userId: (user as any)._id,
    });
    return createHttpResponse(event, {
      status: 201,
      data: created,
      message: "Task created successfully",
    });
  } catch (error: any) {
    return createHttpErrorResponse(event, error);
  }
});
