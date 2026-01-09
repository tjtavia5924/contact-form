import { useState } from "react";
import { FieldGroup } from "@/components/ui/field";
import form from "./formStructure/formStructure.json";
import { displayFields, type FormField } from "./functions/displayFields";
import AlertMessage from "./components/AlertMessage";

type FormValues = {
  [key: string]: string | boolean;
};

type FormErrors = {
  [key: string]: string;
};

function App() {
  const [formValues, setFormValues] = useState<FormValues>({});
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [showAlert, setShowAlert] = useState(false);

  const validateField = (field: FormField, value: string | boolean) => {
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

  const validateForm = () => {
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

  const handleChange = (field: FormField, value: string | boolean) => {
    
    setFormValues((prev) => ({ ...prev, [field.label]: value }));

    // Validate on change if field has been touched
    if (touched[field.label]) {
      const error = validateField(field, value);
      setFormErrors((prev) => ({ ...prev, [field.label]: error }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      setShowAlert(true);
      console.log("Form submitted successfully:", formValues);
    }
  };

  const renderField = (field: FormField) => {
    return displayFields(
      field as FormField,
      formValues[field.label] || "",
      (value) => handleChange(field as FormField, value),
      formErrors[field.label] || ""
    );
  };

  const renderFields = () => {
    const elements = [];
    let i = 0;

    while (i < form.fields.length) {
      const field = form.fields[i] as FormField;

      // Check if current field is text and next field is also text
      if (
        field.type === "text" &&
        i + 1 < form.fields.length &&
        form.fields[i + 1].type === "text"
      ) {
        // Render both text fields in a grid
        elements.push(
          <div key={`text-group-${i}`} className="grid grid-cols-2 gap-4">
            <div className="mt-2">{renderField(field)}</div>
            <div className="mt-2">
              {renderField(form.fields[i + 1] as FormField)}
            </div>
          </div>
        );
        i += 2; // Skip the next field since we just rendered it
      } else {
        // Render full-width field
        elements.push(
          <div key={field.label} className="w-full">
            {renderField(field)}
          </div>
        );
        i++;
      }
    }

    return elements;
  };

  return (
    <>
      {showAlert && (
        <AlertMessage 
          toastLabel={form.fields.find(f => f.type === "submit")?.toastLabel || ""} 
          toastMessage={form.fields.find(f => f.type === "submit")?.toastMessage || ""}
        />
      )}
      <form
        className="flex items-center justify-center min-h-screen bg-custom-green-light py-32"
        onSubmit={handleSubmit}
      >
        <div className="w-184 min-h-193.25 bg-white rounded-lg shadow-md border border-gray-300 p-10">
          <FieldGroup className="flex flex-col gap-4">
            {renderFields()}
          </FieldGroup>
        </div>
      </form>
    </>
  );
}

export default App;
