import { Field, FieldError, FieldLabel } from "@/components/ui/field";

export default function QueryTypeSelection(field: {
  label: string;
  select?: string[];
  errorMessage?: string | string[];
}) {
  return (
    <Field>
      <FieldLabel>{field.label}</FieldLabel>
      <div className="flex gap-4">
        {field.select?.map((option: string) => (
          <label
            key={option}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name={field.label}
              value={option}
              aria-invalid={field.errorMessage ? true : false}
              className="cursor-pointer"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
      {/* {field.errorMessage ? (
        <FieldError>{field.errorMessage}</FieldError>
      ) : null} */}
    </Field>
  );
}
