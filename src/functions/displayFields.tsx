import Consent from "@/components/Consent";
import EmailAddressField from "@/components/EmailAddressField";
import Heading from "@/components/Heading";
import Message from "@/components/Message";
import QueryTypeSelection from "@/components/QueryTypeSelection";
import Submit from "@/components/Submit";
import TextField from "@/components/TextField";

export type FormField = {
  label: string;
  type: string;
  select?: string[];
  required: boolean;
  errorMessage: string | string[];
  toastLabel?: string;
  toastMessage?: string;
};

export const displayFields = (
  field: FormField,
  value: string | boolean,
  onChange: (value: string | boolean) => void,
  error: string
) => {
  switch (field.type) {
    case "heading":
      return <Heading />;
    case "text":
      return (
        <TextField
          label={field.label}
          errorMessage={field.errorMessage}
          value={value as string}
          onChange={onChange as (value: string) => void}
          error={error}
        />
      );
    case "email":
      return (
        <EmailAddressField
          label={field.label}
          errorMessage={field.errorMessage}
          value={value as string}
          onChange={onChange as (value: string) => void}
          error={error}
        />
      );
    case "radio":
      return (
        <QueryTypeSelection
          label={field.label}
          select={field.select}
          errorMessage={field.errorMessage}
          value={value as string}
          onChange={onChange as (value: string) => void}
          error={error}
        />
      );
    case "textarea":
      return (
        <Message
          label={field.label}
          errorMessage={field.errorMessage}
          value={value as string}
          onChange={onChange as (value: string) => void}
          error={error}
        />
      );
    case "checkbox":
      return (
        <Consent
          type={field.type}
          label={field.label}
          checked={value as boolean}
          onChange={onChange as (value: boolean) => void}
          error={error}
        />
      );
    case "submit":
      return <Submit label={field.label} />;
    default:
      return null;
  }
};
