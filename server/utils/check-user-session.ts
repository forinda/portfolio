import { H3Event } from "h3";
import { IUserWithoutPassword } from "~/types/schema";

// Define the possible session check types
type CheckType = "linear" | "custom";

// Define the options for each check type
type CheckUserSessionOptions<T extends CheckType> = T extends "linear"
  ? {
      sessionCondition?: Partial<IUserWithoutPassword>;
      throwError?: boolean;
      type: "linear";
    }
  : {
      throwError?: boolean;
      validate?: (user: IUserWithoutPassword) => {
        access: boolean;
        user: IUserWithoutPassword
      };
      type: "custom";
    };

// Improved version of the function to check user session
export function checkUserSession<T extends CheckType>(
  event: H3Event,
  type: T,
  options?: CheckUserSessionOptions<T>,
) {
  console.log(`[auth] Checking user session with type: ${type}`);

  const user = event.context.user as IUserWithoutPassword;

  // Helper function for throwing errors with consistent messaging
  const throwUnauthorizedError = () => {
    throw new ApiError("Unauthorized", HttpStatus.UNAUTHORIZED);
  };

  // If user is not found in the session
  if (!user) {
    if (options?.throwError ?? true) {
      throwUnauthorizedError();
    }
    return {
      access: false,
      user,
    };
  }

  // Handle "linear" type checking
  if (options?.type === "linear") {
    const { sessionCondition } = options;
    for (const key in sessionCondition) {
      if ((user as any)[key] !== (sessionCondition as any)[key]) {
        if (options?.throwError ?? true) {
          throwUnauthorizedError();
        }
        return {
          access: false,
          user,
        };
      }
    }
    return {
      access: true,
      user,
    };
  }

  // Handle "custom" type checking with optional validate function
  if (options?.type === "custom") {
    if (typeof options.validate === "function") {
      return options.validate(user);
    }
    return {
      access: true,
      user,
    }; // Default to true if no custom validation function is provided
  }

  // Throw error for invalid type
  throw new ApiError(
    "Invalid session check type",
    HttpStatus.INTERNAL_SERVER_ERROR,
  );
}
