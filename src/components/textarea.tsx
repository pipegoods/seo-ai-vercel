import { TextareaHTMLAttributes, useId } from 'react';

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function Textarea({ label, ...props }: TextareaProps) {
  const id = useId();
  return (
    <div className='col-span-full'>
      <label
        htmlFor={id}
        className="text-sm flex flex-col gap-2 font-normal md:text-base"
      >
        {label}
      <textarea
        id={id}
        className="outline-none resize-none border text-sm rounded-sm w-full px-3 py-2 bg-neutral-700 border-neutral-600 placeholder-neutral-400 text-inherit focus:ring-blue-500 focus:border-blue-500 md:text-base"
        {...props}
      />
      </label>
    </div>
  );
}
