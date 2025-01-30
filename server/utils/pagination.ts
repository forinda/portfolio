import { Query } from "mongoose";
type Pagination = {
  skip: number;
  limit: number;
};
export function paginateQuery<T>(query: Record<string, any>) {
  const page = query.page ? parseInt(query.page) : 1;
  const limit = query.limit ? parseInt(query.limit) : 10;
  const skip = (page - 1) * limit;
  delete query.page;
  delete query.limit;
  return {
    page,
    limit,
    skip,
  };
}
