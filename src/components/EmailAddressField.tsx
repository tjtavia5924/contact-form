import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function EmailAddressField(field: { label: string; errorMessage: string | string[] }) {
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
  )
}
