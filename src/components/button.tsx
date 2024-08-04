import { ButtonHTMLAttributes } from 'react';

export function Button(
  props: ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800 disabled:opacity-50"
      {...props}
    >
      {props.children}
    </button>
  );
}
