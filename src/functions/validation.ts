import type { FormField } from "../customComponents/displayFields";

type FormErrors = { [key: string]: string };

export const validateField = (field: FormField, value: string | boolean) => {
    if (!field.required) return "";

    if (field.type === "checkbox") {
      if (!value) {
        return Array.isArray(field.errorMessage)
          ? field.errorMessage[1]
          : field.errorMessage;
      }
    } else if (field.type === "email") {
      if (!value || value === "") {
        return Array.isArray(field.errorMessage)
          ? field.errorMessage[1]
          : field.errorMessage;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value as string)) {
        return Array.isArray(field.errorMessage)
          ? field.errorMessage[0]
          : field.errorMessage;
      }
    } else {
      if (!value || value === "") {
        return Array.isArray(field.errorMessage)
          ? field.errorMessage[0]
          : field.errorMessage;
      }
    }

    return "";
};

export const validateForm = (
  form: { fields: FormField[] },
  formValues: { [key: string]: string | boolean },
  setFormErrors: (errors: FormErrors) => void,
  setTouched: (touched: { [key: string]: boolean }) => void
) => {
    const errors: FormErrors = {};
    let isValid = true;

    form.fields.forEach((field) => {
      if (field.type !== "heading" && field.type !== "submit" && field.label) {
        const error = validateField(
          field as FormField,
          formValues[field.label] || ""
        );
        if (error) {
          errors[field.label] = error;
          isValid = false;
        }
      }
    });

    setFormErrors(errors);

    // Mark all fields as touched to show errors
    const allTouched: { [key: string]: boolean } = {};
    form.fields.forEach((field) => {
      if (field.type !== "heading" && field.type !== "submit" && field.label) {
        allTouched[field.label] = true;
      }
    });
    setTouched(allTouched);

    return isValid;
  };
