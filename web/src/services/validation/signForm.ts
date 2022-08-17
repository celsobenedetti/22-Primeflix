import { z, ZodSchema } from "zod";
import { ISignInInput, ISignUpInput } from "../../interfaces";
import { formatErroMessage, validateSchema } from "./validateSchema";

export const signInSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email({ message: "Invalid email format" }),

  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .min(5, { message: "Password must be at least 10 characters long" }),
});

export const signUpSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(2, { message: "Name must be at least 2 characters long" }),

  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email({ message: "Invalid email format" }),

  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .min(5, { message: "Password must be at least 10 characters long" }),
});

export const validateSignForm = (schema: ZodSchema, input: ISignUpInput | ISignInInput) => {
  const errors = validateSchema(schema, input);
  if (errors) return formatErroMessage(errors);
  return "";
};
