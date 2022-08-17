import { z } from "zod";

export type IForm = {
  email: z.ZodString;
  password: z.ZodString;
  name?: z.ZodString;
};

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
    .min(10, { message: "Password must be at least 10 characters long" }),
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
    .min(10, { message: "Password must be at least 10 characters long" }),
});

export type ISignInInput = z.infer<typeof signInSchema>;
export type ISignUpInput = z.infer<typeof signUpSchema>;
