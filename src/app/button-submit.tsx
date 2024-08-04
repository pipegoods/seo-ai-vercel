import { useFormStatus } from 'react-dom';

export function ButtonSubmit() {
  const { pending } = useFormStatus();
  return (
    <>
      <button
        type="submit"
        disabled={pending}
        className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800 disabled:opacity-50"
      >
        {pending ? 'Enviando...' : 'Enviar'}
      </button>
    </>
  );
}
