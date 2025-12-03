import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
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

interface DisplayFieldsProps {
  field: FormField;
}

function App() {
  const displayFields = (field: any) => {
    if (field.type === "text") {
      return (
        <Field>
          <FieldLabel htmlFor={field.label}>{field.label}</FieldLabel>
          <Input
            id={field.label}
            autoComplete="off"
            aria-invalid={field.errorMessage ? true : false}
          />
          {field.errorMessage ? (
            <FieldError>{field.errorMessage}</FieldError>
          ) : null}
        </Field>
      );
    }
  };
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <FieldSet>
        <FieldLegend>Profile</FieldLegend>
        <FieldGroup>
          {form.fields.map((field) => (
            <div key={field.label}>{displayFields(field)}</div>
          ))}
        </FieldGroup>
      </FieldSet>
      <Button>Click me</Button>
    </div>
  );
}

export default App;
