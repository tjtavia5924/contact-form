import { useState } from "react";
import { FieldGroup } from "@/components/ui/field";
import AlertMessage from "./components/AlertMessage";
import { validateForm, validateField } from "./functions/validation";
import formData from "./formStructure/formStructure.json";
import { displayFields, type FormField } from "./customComponents/displayFields";

const form = formData as { fields: FormField[] };

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

    if (validateForm(form, formValues, setFormErrors, setTouched)) {
      setShowAlert(true);
      console.log("Form submitted successfully:", formValues);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
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
      <div className="flex flex-col items-center justify-center min-h-screen bg-custom-green-light py-32 relative">        {showAlert && (
          <AlertMessage 
            toastLabel={form.fields.find(f => f.type === "submit")?.toastLabel || ""} 
            toastMessage={form.fields.find(f => f.type === "submit")?.toastMessage || ""}
          />
        )}        <form
          className="w-184 min-h-193.25 bg-white rounded-lg shadow-md border border-gray-300 p-10"
          onSubmit={handleSubmit}
        >
          <FieldGroup className="flex flex-col gap-4">
            {renderFields()}
          </FieldGroup>
        </form>
        <div className="mt-8 text-xs text-center">
          Challenge by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge" className="text-custom-blue">
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a href="#" className="text-custom-blue">
            Tavia Thompson
          </a>
          .
        </div>
      </div>
    </>
  );
}

export default App;
