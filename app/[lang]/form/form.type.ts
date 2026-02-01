import { z } from "zod";
import type { productSchema } from "./FormValidation";

export type ProductInput = z.infer<typeof productSchema>;

export interface FormState {
  success: boolean;
  message?: string;
  errors?: {
    title?: string[];
    description?: string[];
  };
}
