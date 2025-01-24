import { Model, Document, Schema, Mongoose } from "mongoose";

export interface IUser {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    isActive: boolean;
}

export interface IUserDocument extends IUser, Document {
    [x: string]: any;
    _doc: any;
    fullName: () => string;
}
export interface IUserModel extends Model<IUserDocument> {}

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

export const getUserModel = (connection: Mongoose): IUserModel => {
    const model = connection.model<IUserDocument>("User", userSchema);

    return model;
};
