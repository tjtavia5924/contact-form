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
        <Label htmlFor={field.type}>{field.label}</Label>
      </div>
      {field.error && (
        <FieldError className="w-full max-w-none whitespace-normal text-custom-red">
          {field.error}
        </FieldError>
      )}
    </div>
  );
}
