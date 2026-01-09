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
      <FieldLabel className="text-custom-grey-dark text-[16px]"htmlFor={`${field.label}`}>{field.label}
         <span className="text-custom-green-medium w-[7px] h-[24px] inline-block ml-1">*</span>
      </FieldLabel>
      <Textarea
        className="w-164 h-26.25 "
        id={`${field.label}`}
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
