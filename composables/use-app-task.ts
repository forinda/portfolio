import type { ITask } from "~/types/entity";
import type { ITaskDocument } from "~/types/schema";
import type { PaginatedHttpResponseType } from "~/types";
import type { CreateTaskFormType } from "~/lib/schema/create-task-schema";

type PaginationOptions = {
  page?: number;
  limit?: number;
};
export async function useAppTasks(
  options: Ref<PaginationOptions> = ref({ page: 1, limit: 10 }),
) {
  const {
    public: { API_URL },
  } = useRuntimeConfig();
  // async function fetchTasks() {
  const { data, refresh, status, error } = await useAsyncData(
    "tasks",
    async () => {
      const { page, limit } = options.value;
      const url = new URL(API_URL + "/tasks");
      url.searchParams.append("page", String(page));
      url.searchParams.append("limit", String(limit));
      return await $fetch<PaginatedHttpResponseType<ITaskDocument>>(
        url.toString(),
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },

          credentials: "include",
        },
      );
    },
  );

  watch(options, () => {
    refresh();
  });

  async function createTask(task: CreateTaskFormType) {
    try {
      await $fetch<ITask>(API_URL + "/tasks", {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
        },
      });
      refresh();
    } catch (error: any) {
      console.log({ error });
    }
  }

  return {
    data,
    refresh,
    status,
    error,
    createTask,
  };
}
