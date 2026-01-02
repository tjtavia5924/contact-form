import { Button } from "./ui/button";

export default function Submit(field: { label: string }) {
  return (
    <div className="flex items-center justify-center">
      <Button
        variant="outline"
        className="w-163.5 h-12.75 bg-green-900 text-white"
      >
        {field.label}
      </Button>
    </div>
  );
}
