import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition-all",
  {
    variants: {
      variant: {
        default: "bg-blue-600 cursor-pointer text-slate-50 hover:bg-blue-600/90 shadow-sm",
        destructive: "bg-red-500 cursor-pointer text-slate-50 hover:bg-red-500/90 shadow-sm",
        outline: "border cursor-pointer border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900",
        secondary: "bg-slate-100 cursor-pointer text-slate-900 hover:bg-slate-100/80",
        ghost: "cursor-pointer hover:bg-slate-100 hover:text-slate-900",
        link: "text-blue-600 cursor-pointer underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ 
  className, 
  variant, 
  size, 
  isLoading = false, 
  leftIcon: LeftIcon, 
  rightIcon: RightIcon, 
  children, 
  disabled,
  ...props 
}, ref) => {
  
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      
      {!isLoading && LeftIcon && (
        <LeftIcon className="mr-2 h-4 w-4" />
      )}
      
      {children}
      
      {!isLoading && RightIcon && (
        <RightIcon className="ml-2 h-4 w-4" />
      )}
    </button>
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };