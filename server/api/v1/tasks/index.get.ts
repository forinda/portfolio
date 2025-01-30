export default defineEventHandler(async (event) => {
  try {
    checkUserSession(event, "linear", { type: "linear", throwError: true });
    const { Task } = await getBaseDbClient();
    // Get the query parameters from the event
    const params = getRouterParams(event);
    /**
     * Extract the skip, limit and page from the query parameters
     * and use them to paginate the query this is a way to remove
     * the keys from possible filters
     */
    const { skip, limit, page } = paginateQuery(params);
    const total = await Task.countDocuments(params);
    const tasks = await Task.find(params).skip(skip).limit(limit);
    const pages = Math.ceil(total / limit);
    return createHttpResponse(event, {
      status: 200,
      data: {
        page,
        total,
        pages,
        docs:tasks,
      },
      message: "Tasks fetched successfully",
    });
  } catch (error: any) {
    return createHttpErrorResponse(event, error);
  }
});
