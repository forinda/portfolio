import { getDBConnection } from "~/server/db/mongo";
import { getUserModel } from "~/server/db/schema/user.db-schema";
import { getTaskModel } from "../schema/task.db-schema";

export async function getBaseDbClient() {
    const client = (await getDBConnection("my-app"))!;

    return {
        User: getUserModel(client),
        Task: getTaskModel(client),
        connection: client,
    };
}
