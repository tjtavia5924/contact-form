import { FieldGroup } from "@/components/ui/field";
import form from "./formStructure/formStructure.json";
import { displayFields } from "./functions/displayFields";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-200 py-32">
      <div className="w-184 h-193.25 bg-white rounded-lg shadow-md border border-gray-300 p-10">
        <FieldGroup className="grid grid-cols-2 gap-4">
          {form.fields.map((field) => (
            <div
              key={field.label}
              className={
                field.type === "email" ||
                field.type === "textarea" ||
                field.type === "heading" ||
                field.type === "submit" ||
                field.type === "consent"
                  ? "col-span-2"
                  : ""
              }
            >
              {displayFields(field)}
            </div>
          ))}
        </FieldGroup>
      </div>
    </div>
  );
}

export default App;
