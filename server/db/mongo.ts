import mongoose from "mongoose";
import { ConnectionOptions } from "mongodb";

export async function getDBConnection(
    dbName: string,
    options: mongoose.ConnectOptions = {},
) {
    try {
        const connection = await mongoose.connect(
            process.env.MONGO_URI || "mongodb://localhost:27017",
            {
                connectTimeoutMS: 400000,
                dbName: dbName,
                ...options,
            },
        );
        connection.connection.on("error", (error) => {
            console.log(`MongoDB Connection Error: ${error}`);
        });
        connection.connection.on("connected", () => {
            console.log(`MongoDB Connection Established`);
        });
        connection.connection.on("disconnected", () => {
            console.log(`MongoDB Connection Disconnected`);
        });

        return connection;
    } catch (e: any) {
        console.log(`Could not connect to DB:. ${e.message}`);
    }
}
