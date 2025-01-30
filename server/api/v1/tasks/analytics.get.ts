import { statsPipeline } from "~/server/lib/task-pipelines";

export default defineEventHandler(async (event) => {
  try {
   
    checkUserSession(event, "linear", {type:'linear'});
    const { Task } = await getBaseDbClient();
    const stats = await Task.aggregate(statsPipeline);
    return createHttpResponse(event, {
      status: 200,
      data: stats,
      message: "Tasks analytics fetched successfully",
    });
  } catch (error: any) {
    return createHttpErrorResponse(event, error);
  }
});