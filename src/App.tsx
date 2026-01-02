import { FieldGroup } from "@/components/ui/field";
import form from "./formStructure/formStructure.json";
import { displayFields, type FormField } from "./functions/displayFields";

function App() {
  const getFieldClassName = (fieldType: string) => {
    const fullWidthFields = [
      "email",
      "textarea",
      "heading",
      "submit",
      "consent",
    ];

    if (fullWidthFields.includes(fieldType)) return "col-span-2";
    if (fieldType === "text") return "mt-2";
    return "";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-200 py-32">
      <div className="w-184 h-193.25 bg-white rounded-lg shadow-md border border-gray-300 p-10">
        <FieldGroup className="grid grid-cols-2 gap-4">
          {form.fields.map((field) => (
            <div key={field.label} className={getFieldClassName(field.type)}>
              {displayFields(field as FormField)}
            </div>
          ))}
        </FieldGroup>
      </div>
    </div>
  );
}

export default App;
