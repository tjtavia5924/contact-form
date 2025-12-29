import { FieldGroup } from "@/components/ui/field";
import form from "./formStructure/formStructure.json";
import { displayFields } from "./functions/displayFields";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg min-h-700px p-6 bg-white rounded-lg shadow-md border border-gray-300">
        <FieldGroup className="grid grid-cols-2 gap-4 p-5">
          {form.fields.map((field) => (
            <div
              key={field.label}
              className={
                field.type === "email" ||
                field.type === "textarea" ||
                field.type === "heading"
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
