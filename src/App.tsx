import { Button } from "@/components/ui/button";
import { FieldGroup } from "@/components/ui/field";
import form from "./formStructure/formStructure.json";
import TextField from "./components/TextField";
import EmailAddressField from "./components/EmailAddressField";
import QueryTypeSelection from "./components/QueryTypeSelection";

export interface FormField {
  label: string;
  type: string;
  select?: string[];
  required: boolean;
  errorMessage: string | string[];
}

function App() {
  const displayFields = (field: FormField) => {
    if (field.type === "text") {
      return (
        <TextField label={field.label} errorMessage={field.errorMessage} />
      );
    } else if (field.type === "email") {
      return (
        <EmailAddressField
          label={field.label}
          errorMessage={field.errorMessage}
        />
      );
    } else if (field.type === "radio" && field.select) {
      return (
        <QueryTypeSelection
          label={field.label}
          select={field.select}
          errorMessage={field.errorMessage}
        />
      );
    }
  };
  return (
    <div className="">
      {/* <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md border border-gray-300"> */}
      <FieldGroup className="grid grid-cols-2 gap-[1rem]">
        {form.fields.map((field) => (
          <div
            key={field.label}
            className={
              field.type === "email" || field.type === "textarea"
                ? "col-span-2"
                : ""
            }
          >
            {displayFields(field)}
          </div>
        ))}
      </FieldGroup>
      <Button className="mt-4 w-full">Submit</Button>
      {/* </div> */}
    </div>
  );
}

export default App;
