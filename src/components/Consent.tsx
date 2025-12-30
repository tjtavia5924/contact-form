import { Checkbox } from "./ui/checkbox";

import { Label } from "./ui/label";

export default function Consent(field: { type: string; label: string }) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center gap-3">
        <Checkbox id={field.type} />
        <Label htmlFor="terms">{field.label}</Label>
      </div>
    </div>
  );
}
