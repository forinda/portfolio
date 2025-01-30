import { Schema, Mongoose } from "mongoose";
import { ITaskDocument } from "~/types/schema";

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
  { timestamps: true, toJSON: { virtuals: true } },
);

// taskSchema.methods.
// taskSchema.statics.
taskSchema.statics.findOverdueTasks = async function () {
  return this.find({
    endDate: { $lt: new Date() },
    status: { $ne: "completed" },
  });
};

taskSchema.statics.findCompletedTasks = async function () {
  return this.find({ status: "completed" });
};

// taskSchema.indexes.
// taskSchema.virtuals.
taskSchema.virtual("isOverdue").get(function (this: ITaskDocument) {
  return this.endDate < new Date() && this.status !== "completed";
});
export const getTaskModel = (connection: Mongoose) => {
  const model = connection.model<ITaskDocument>("Task", taskSchema);

  return model;
};
