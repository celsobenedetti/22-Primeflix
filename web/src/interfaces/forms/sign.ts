import { z } from "zod";
import { signInSchema, signUpSchema } from "../../services/validation";

export type IForm = {
  email: z.ZodString;
  password: z.ZodString;
  name?: z.ZodString;
};

export type ISignInInput = z.infer<typeof signInSchema>;
export type ISignUpInput = z.infer<typeof signUpSchema>;
