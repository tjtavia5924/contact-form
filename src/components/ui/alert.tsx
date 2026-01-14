import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm flex flex-wrap gap-x-3 gap-y-0.5 items-center [&>svg]:size-4 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-custom-grey-dark text-custom-white",
        destructive:
          "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "flex items-center min-h-4 font-medium tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  adjust = false,
  ...props
}: React.ComponentProps<"div"> & { adjust?: boolean }) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground text-sm [&_p]:leading-relaxed text-start w-full basis-full",
        adjust ? "-mx-4 px-4" : "",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
