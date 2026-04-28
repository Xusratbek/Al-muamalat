import React, { useState, forwardRef } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/utils';

const Input = forwardRef(({ 
  label, 
  error, 
  icon: Icon,      // Chap tomondagi ikonka
  rightIcon: RightIcon, // O'ng tomondagi ikonka
  type, 
  inputClassName, 
  className, 
  ...props 
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  // Input turini aniqlash (password toggle mantiqi bilan)
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className={cn("flex flex-col gap-1.5 w-full", className)}>
      {/* Label */}
      {label && (
        <label className="text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      
      <div className="relative flex items-center">
        {/* Left Icon */}
        {Icon && (
          <div className="absolute left-3 text-slate-400">
            <Icon size={18} />
          </div>
        )}

        <input
          {...props}
          ref={ref}
          type={inputType}
          className={cn(
            "w-full rounded-lg border bg-white py-2 text-sm transition-all outline-none",
            "border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
            
            // Dinamik paddinglar
            Icon ? "pl-10" : "pl-3",
            (isPassword || RightIcon) ? "pr-10" : "pr-3",
            
            // Xatolik holati
            error && "border-red-500 focus:ring-red-500 focus:border-red-500",
            
            // Inputning o'ziga xos klasslari
            inputClassName
          )}
        />

        {/* Right Section (Password Toggle yoki Maxsus Right Icon) */}
        <div className="absolute right-3 flex items-center justify-center text-slate-400">
          {isPassword ? (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="hover:text-slate-600 transition-colors focus:outline-none"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          ) : (
            RightIcon && <RightIcon size={18} />
          )}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <span className="text-xs text-red-500 font-medium animate-in fade-in slide-in-from-top-1">
          {error}
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;