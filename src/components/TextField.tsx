import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function TextField(field: {
  label: string;
  errorMessage: string | string[];
}) {
  return (
    <Field>
      <FieldLabel htmlFor={`${field.label}`}>{field.label}</FieldLabel>
      <Input
        className="max-w-lg"
        id={`${field.label}`}
        autoComplete="off"
        aria-invalid={field.errorMessage ? true : false}
      />
    </Field>
  );
}
