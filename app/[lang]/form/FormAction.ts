"use server";
import { productSchema } from "./FormValidation";
import type { FormState } from "./form.type";

export async function createProduct(
  prevState: FormState | null,
  formData: FormData,
): Promise<FormState> {
  const validatedFields = productSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please fix the errors below.",
    };
  }

  try {
    console.log("Saving to DB:", validatedFields.data);

    return {
      success: true,
      message: "Product created successfully!",
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      success: false,
      message: "Database error. Failed to create product.",
    };
  }
}
