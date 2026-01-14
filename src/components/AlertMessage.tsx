import { CheckCircle2Icon } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";


export default function AlertMessage(field: {toastLabel: string; toastMessage: string; adjust?: boolean }) {
  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-left duration-500">  
        <Alert className="w-[500px] h-[107px]">
        <CheckCircle2Icon />
        <AlertTitle className="text-[16px]">{field.toastLabel}</AlertTitle>
        <AlertDescription className="text-[16px]" adjust={field.adjust}>
          {field.toastMessage}
        </AlertDescription>
      </Alert>
      </div>
  )
}
