import type { ClientHttpResponseType } from "~/types";
import type { ITaskDocument } from "~/types/schema";

export default async function useTaskAnalytics() {
  const {
    public: { API_URL },
  } = useRuntimeConfig();
  const { data, status, refresh, error } = await useAsyncData(
    "tasks-analytics",
    async () => {
      type TaskAnalyticsType = {
        status: ITaskDocument["status"]| "overdue";
        count: number;
      }[]
      return await $fetch<ClientHttpResponseType<TaskAnalyticsType>>(
        API_URL + "/tasks/analytics",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    },
  );
  return {
    data,
    status,
    refresh,
    error,
  };
}
