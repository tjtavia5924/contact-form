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
            <div
              key={option}
              className={`w-[320px] h-12.75 flex items-center gap-3 rounded-md py-3 px-6 ${
                field.error
                  ? "border-2 border-custom-red"
                  : field.value === option
                  ? "border-2 border-custom-green-medium bg-custom-green-light"
                  : "border border-custom-grey-medium"
              }`}
            >
              <FieldLabel
                htmlFor={field.label}
                key={option}
                className="flex items-center gap-4 cursor-pointer"
              ></FieldLabel>
              <RadioGroupItem value={option} id={option} />
              <span className="text-custom-grey-dark text-[16px]">{option}</span>
            </div>
          ))}
        </div>
        {field.error && (
          <FieldError className="text-custom-red text-[16px]">{field.error}</FieldError>
        )}
      </RadioGroup>
    </Field>
  );
}
