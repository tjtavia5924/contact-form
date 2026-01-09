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
      <FieldLabel className="text-custom-grey-dark text-[16px]" htmlFor={`${field.label}`}>{field.label}
         <span className="text-custom-green-medium w-[7px] h-[24px] inline-block ml-1">*</span>
      </FieldLabel>
      <Input
        className="w-xl h-12.75"
        id={`${field.label}`}
        autoComplete="off"
        value={field.value || ""}
        onChange={(e) => field.onChange?.(e.target.value)}
        aria-invalid={field.error ? true : false}
      />
      {field.error && (
        <FieldError className="text-custom-red text-[16px]">{field.error}</FieldError>
      )}
    </Field>
  );
}
