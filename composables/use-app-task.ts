import type { ITask } from "~/server/db/schema/task.db-schema";
import { API_URL } from "~/utils/constants/api";

export function useAppTasks() {
    const tasks = ref<ITask[]>([]);

    async function fetchTasks() {
        const data = await useAsyncData("tasks", async () => {
            const resp = await fetch(API_URL + "/tasks", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            return await resp.json();
        });
    }
    onMounted(fetchTasks);
    
    return {
        tasks,
    };
}
