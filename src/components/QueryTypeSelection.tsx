import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export default function QueryTypeSelection(field: {
  label: string;
  select?: string[];
  errorMessage?: string | string[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
}) {
  return (
    <Field className="mt-2">
      <RadioGroup
        value={field.value || ""}
        onValueChange={(value) => field.onChange?.(value)}
      >
        <FieldLabel className="text-gray-900">{field.label}</FieldLabel>
        <div className="flex gap-4">
          {field.select?.map((option: string) => (
            <div
              key={option}
              className="w-[320px] h-12.75 flex items-center gap-3 border border-black rounded-md py-3 px-6"
            >
              <FieldLabel
                htmlFor={field.label}
                key={option}
                className="flex items-center gap-4 cursor-pointer"
              ></FieldLabel>
              <RadioGroupItem value={option} id={option} />
              <span className="text-gray-900">{option}</span>
            </div>
          ))}
        </div>
        {field.error && <FieldError>{field.error}</FieldError>}
      </RadioGroup>
    </Field>
  );
}
