import { TextareaHTMLAttributes, useId } from 'react';

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function Textarea({ label, ...props }: TextareaProps) {
  const id = useId();
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-white"
      >
        {label}
      </label>
      <textarea
        id={id}
        className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        {...props}
      />
    </div>
  );
}
