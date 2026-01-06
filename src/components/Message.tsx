import { Field, FieldError, FieldLabel } from "./ui/field";
import { Textarea } from "./ui/textarea";

export default function Message(field: {
  label: string;
  errorMessage?: string | string[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
}) {
  return (
    <Field className="mt-2">
      <FieldLabel htmlFor={`${field.label}`}>{field.label}</FieldLabel>
      <Textarea
        className="w-164 h-26.25 "
        id={`${field.label}`}
        value={field.value || ""}
        onChange={(e) => field.onChange?.(e.target.value)}
        aria-invalid={field.error ? true : false}
      />
      {field.error && (
        <FieldError className="text-custom-red">{field.error}</FieldError>
      )}
    </Field>
  );
}
