export interface ITask {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: "completed" | "in-progress" | "not-started";
  priority: "low" | "medium" | "high";
  userId: string;
}

export interface IUser {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  isActive: boolean;
}

