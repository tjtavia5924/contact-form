import { Field, FieldLabel } from "./ui/field";
import { Textarea } from "./ui/textarea";

export default function Message(field: {
  label: string;
  errorMessage?: string | string[];
}) {
  return (
    <Field className="mt-2">
      <FieldLabel htmlFor={`${field.label}`}>{field.label}</FieldLabel>
      <Textarea className="w-164 h-26.25 " />
    </Field>
  );
}
