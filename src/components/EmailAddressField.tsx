import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function EmailAddressField(field: {
  label: string;
  errorMessage?: string | string[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
}) {
  return (
    <Field className="mt-2">
      <FieldLabel htmlFor={field.label}>{field.label}</FieldLabel>
      <Input
        className="w-163.5 h-12.75"
        id={field.label}
        type="email"
        autoComplete="off"
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
