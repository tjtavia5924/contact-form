import { CheckCircle2Icon } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";


export default function AlertMessage(field: {toastLabel: string; toastMessage: string }) {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-top-5 duration-500">  
        <Alert className="min-w-[450px] h-[107px]">
        <CheckCircle2Icon />
        <AlertTitle className="text-[16px]">{field.toastLabel}</AlertTitle>
        <AlertDescription className="text-[16px] text-start justify-start items-start">
          {field.toastMessage}
        </AlertDescription>
      </Alert>
      </div>
  )
}
