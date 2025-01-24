import { Model, Document, Schema, Mongoose } from "mongoose";

export interface ITask {
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    status: "completed" | "in-progress" | "not-started";
    priority: "low" | "medium" | "high";
    userId: string;
}

export interface ITaskDocument extends ITask, Document {
    [x: string]: any;
    _doc: any;
    // fullName: () => string;
}
export interface ItaskModel extends Model<ITaskDocument> {}

export const taskSchema: Schema<ITaskDocument> = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
        priority: {
            type: String,
            enum: ["low", "medium", "high"],
            default: "low",
        },
        status: {
            type: String,
            enum: ["completed", "in-progress", "not-started"],
            default: "not-started",
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true },
);

// taskSchema.virtuals.
export const getTaskModel = (connection: Mongoose): ItaskModel => {
    const model = connection.model<ITaskDocument>("Task", taskSchema);

    return model;
};
