
import type { Document } from "mongoose";
import type { ITask } from "./entity";
import type { IUser } from "./entity";

/**
 * @fileoverview Task schema and model types
 * @description This file contains the schema and model types for the Task entity
 * @module types/schema
 * We can define instance properties and methods on the document type
 * 
 */
export interface ITaskDocument extends ITask, Document {
  [x: string]: any;
  _doc: any;
}
/**
 * @fileoverview Task schema and model types
 * @description This file contains the schema and model types for the Task entity
 * @module types/schema
 * We can define static properties and methods on the model type
 */
export interface ItaskModel extends Model<ITaskDocument> {
  findOverdueTasks: () => Promise<ITaskDocument[]>;
  findCompletedTasks: () => Promise<ITaskDocument[]>;
}

/**
 * @fileoverview User schema and model types
 * @description This file contains the schema and model types for the User entity
 * @module types/schema
 */
export interface IUserDocument extends IUser, Document {
  [x: string]: any;
  _doc: any;
  fullName: () => string;
}
/**
 * @fileoverview User schema and model types
 * @description This file contains the schema and model types for the User entity
 * @module types/schema
 * We can define static properties and methods on the model type
 */
export interface IUserModel extends Model<IUserDocument> {}
export interface IUserWithoutPassword extends Omit<IUser, "password"> {}