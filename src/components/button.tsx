import { ButtonHTMLAttributes } from 'react';

export function Button(
  props: ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      className="text-inherit focus:ring-4 font-semibold rounded-sm text-lg px-4 py-3 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800 disabled:opacity-50 transition-all"
      {...props}
    >
      {props.children}
    </button>
  );
}
