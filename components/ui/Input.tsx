import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className = "", ...rest }: Readonly<InputProps>) {
  return (
    <input
      className={`w-full bg-primary-brown/4 px-4 py-3.5 text-base text-primary-brown placeholder:text-primary-brown/40 outline-none transition-shadow duration-200 shadow-[inset_0_-2px_0_0_rgba(55,34,34,0.15)] focus:shadow-[inset_0_-2px_0_0_rgba(55,34,34,1)] ${className}`}
      {...rest}
    />
  );
}
