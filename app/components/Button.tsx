import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ ...props }: ButtonProps) {
  return (
    <button
      className="bg-gray-200 py-2 px-4 rounded-xl text-gray-900 font-semibold"
      {...props}
    />
  );
}
