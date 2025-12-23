import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import form from "./formStructure/formStructure.json";

interface FormField {
  label: string;
  type: string;
  select?: string[];
  required: boolean;
  errorMessage: string | string[]; // Ensure this is always provided
}

function App() {
  const displayFields = (field: FormField) => {
    if (field.type === "text") {
      return (
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor={`${field.label}`}>{field.label}</FieldLabel>
            <Input
              className="field-sizing-fixed w-60"
              id={`${field.label}`}
              autoComplete="off"
              aria-invalid={field.errorMessage ? true : false}
            />
          </Field>
        </div>
      );
    } else if (field.type === "email") {
      return (
        <Field>
          <FieldLabel htmlFor={field.label}>{field.label}</FieldLabel>
          <Input
            id={field.label}
            type="email"
            autoComplete="off"
            aria-invalid={field.errorMessage ? true : false}
          />
          {field.errorMessage ? (
            <FieldError>{field.errorMessage}</FieldError>
          ) : null}
        </Field>
      );
    } else if (field.type === "select") {
      return (
        <Field>
          <FieldLabel htmlFor={field.label}>{field.label}</FieldLabel>
          <select
            id={field.label}
            aria-invalid={field.errorMessage ? true : false}
          >
            {field.select?.map((option: string) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {field.errorMessage ? (
            <FieldError>{field.errorMessage}</FieldError>
          ) : null}
        </Field>
      );
    }
  };
  return (
    <div className="">
      {/* <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md border border-gray-300"> */}
      <FieldGroup className="space-y-4">
        {form.fields.map((field) => (
          <div
            key={field.label}
            className={
              field.type === "email" || field.type === "textarea"
                ? "col-span-2"
                : ""
            }
          >
            {displayFields(field)}
          </div>
        ))}
      </FieldGroup>
      <Button className="mt-4 w-full">Submit</Button>
      {/* </div> */}
    </div>
  );
}

export default App;
