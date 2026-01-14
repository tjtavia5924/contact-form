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
        <FieldLabel className="text-custom-grey-dark text-[16px]">{field.label}
           <span className="text-custom-green-medium w-[7px] h-[24px] inline-block ml-1">*</span>
        </FieldLabel>
        <div className="flex gap-4">
          {field.select?.map((option: string) => (
            <label
              key={option}
              htmlFor={`${field.label}-${option}`}
              className={`w-[320px] h-12.75 flex items-center gap-3 rounded-md py-3 px-6 cursor-pointer ${
                field.error
                  ? "border-2 border-custom-red"
                  : field.value === option
                  ? "border-2 border-custom-green-medium bg-custom-green-light"
                  : "border border-custom-grey-medium"
              }`}
            >
              <RadioGroupItem value={option} id={`${field.label}-${option}`} aria-label={option} />
              <span className="text-custom-grey-dark text-[16px]" aria-label={option}>{option}</span>
            </label>
          ))}
        </div>
        {field.error && (
          <FieldError className="text-custom-red text-[16px]">{field.error}</FieldError>
        )}
      </RadioGroup>
    </Field>
  );
}
