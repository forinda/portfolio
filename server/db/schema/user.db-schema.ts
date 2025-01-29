import { Schema, Mongoose } from "mongoose";
import { IUserDocument, IUserModel } from "~/types/schema";

export const userSchema: Schema<IUserDocument> = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  { timestamps: true },
);

userSchema.methods.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

export const getUserModel = (connection: Mongoose) => {
  const model = connection.model<IUserDocument>("User", userSchema);

  return model;
};
