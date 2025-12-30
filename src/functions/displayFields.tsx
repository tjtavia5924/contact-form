import Consent from "@/components/Consent";
import EmailAddressField from "@/components/EmailAddressField";
import Heading from "@/components/Heading";
import Message from "@/components/Message";
import QueryTypeSelection from "@/components/QueryTypeSelection";
import Submit from "@/components/Submit";
import TextField from "@/components/TextField";

interface FormField {
  label: string;
  type: string;
  select?: string[];
  required: boolean;
  errorMessage: string | string[];
}

export const displayFields = (field: FormField) => {
  switch (field.type) {
    case "heading":
      return <Heading />;
    case "text":
      return (
        <TextField label={field.label} errorMessage={field.errorMessage} />
      );
    case "email":
      return (
        <EmailAddressField
          label={field.label}
          errorMessage={field.errorMessage}
        />
      );
    case "radio":
      return (
        <QueryTypeSelection
          label={field.label}
          select={field.select}
          errorMessage={field.errorMessage}
        />
      );
    case "textarea":
      return <Message label={field.label} errorMessage={field.errorMessage} />;
    case "checkbox":
      return <Consent type={field.type} label={field.label} />;
    case "submit":
      return <Submit label={field.label} />;
    default:
      return null;
  }
};
