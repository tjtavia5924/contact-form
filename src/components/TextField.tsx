import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function TextField(field: {
  label: string;
  errorMessage: string | string[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
}) {
  return (
    <Field>
      <FieldLabel htmlFor={`${field.label}`}>{field.label}</FieldLabel>
      <Input
        className="w-xl h-12.75"
        id={`${field.label}`}
        autoComplete="off"
        value={field.value || ""}
        onChange={(e) => field.onChange?.(e.target.value)}
        aria-invalid={field.error ? true : false}
      />
      {field.error && (
        <FieldError className="text-red-600">{field.error}</FieldError>
      )}
    </Field>
  );
}
