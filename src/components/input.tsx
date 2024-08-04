import { InputHTMLAttributes, useId } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, ...props }: InputProps) {
  const id = useId();

  return (
    <>
      <label
        htmlFor={id}
        className="flex flex-col gap-2 text-sm font-normal md:text-base"
      >
        {label}
      <input
        id={id}
        className="border outline-none text-sm rounded-sm w-full px-3 py-2 bg-neutral-700 border-neutral-600 placeholder-neutral-400 text-inherit focus:ring-blue-500 focus:border-blue-500 md:text-base"
        {...props}
      />
      </label>
    </>
  );
}
