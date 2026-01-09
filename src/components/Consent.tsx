import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { FieldError } from "./ui/field";

export default function Consent(field: {
  type: string;
  label: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="flex items-center gap-3">
        <Checkbox
          id={field.type}
          checked={field.checked || false}
          onCheckedChange={(checked) => field.onChange?.(checked as boolean)}
        />
        <Label className="text-custom-grey-dark text-[16px]" htmlFor={field.type}>
          {field.label}
          <span className="text-custom-green-medium w-[7px] h-[24px] inline-block ml-1">*</span>
        </Label>
      </div>
      {field.error && (
        <FieldError className="w-full max-w-none whitespace-normal text-custom-red text-[16px]">
          {field.error}
        </FieldError>
      )}
    </div>
  );
}
