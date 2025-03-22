import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg active:shadow-none active:translate-y-0.5",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-lg active:shadow-none active:translate-y-0.5",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm hover:shadow-md active:shadow-none active:translate-y-0.5",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-md hover:shadow-lg active:shadow-none active:translate-y-0.5",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg active:shadow-none active:translate-y-0.5",
        
        // Enhanced brand-specific variants
        teal: "bg-brand-teal text-white hover:bg-brand-teal-dark shadow-md hover:shadow-lg active:shadow-none active:translate-y-0.5",
        "teal-outline": "bg-white text-brand-teal border border-brand-teal hover:bg-brand-teal/5 shadow-sm hover:shadow-md active:shadow-none active:translate-y-0.5",
        
        purple: "bg-brand-purple text-white hover:bg-brand-purple-dark shadow-md hover:shadow-lg active:shadow-none active:translate-y-0.5",
        "purple-outline": "bg-white text-brand-purple border border-brand-purple hover:bg-brand-purple/5 shadow-sm hover:shadow-md active:shadow-none active:translate-y-0.5",
        
        amber: "bg-brand-amber text-brand-purple hover:bg-brand-amber-dark shadow-md hover:shadow-lg active:shadow-none active:translate-y-0.5",
        "amber-outline": "bg-white text-brand-amber border border-brand-amber hover:bg-brand-amber/5 shadow-sm hover:shadow-md active:shadow-none active:translate-y-0.5",
        
        "gradient-brand": "bg-gradient-to-r from-brand-purple to-brand-teal text-white hover:from-brand-purple-dark hover:to-brand-teal-dark shadow-md hover:shadow-lg active:shadow-none active:translate-y-0.5",
        "gradient-amber": "bg-gradient-to-r from-brand-amber to-brand-amber-light text-brand-purple hover:from-brand-amber-dark hover:to-brand-amber shadow-md hover:shadow-lg active:shadow-none active:translate-y-0.5",
        
        "glass": "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 shadow-md hover:shadow-lg active:shadow-none active:translate-y-0.5",
      },
      size: {
        default: "h-10 px-4 py-2 rounded-md",
        xs: "h-8 px-2.5 py-1 rounded text-xs",
        sm: "h-9 px-3 py-1.5 rounded-md",
        lg: "h-11 px-8 py-2.5 rounded-lg",
        xl: "h-14 px-10 py-3 rounded-xl text-base",
        "2xl": "h-16 px-12 py-4 rounded-xl text-lg",
        icon: "h-10 w-10 rounded-full",
        "icon-sm": "h-8 w-8 rounded-full",
        "icon-lg": "h-12 w-12 rounded-full",
        pill: "rounded-full",
      },
      roundedness: {
        default: "",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        full: "rounded-full",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      roundedness: "default",
    },
    compoundVariants: [
      {
        size: "pill",
        class: "rounded-full px-8"
      }
    ]
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, roundedness, asChild = false, ...props }, ref) => {
    const Comp = "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, roundedness, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }