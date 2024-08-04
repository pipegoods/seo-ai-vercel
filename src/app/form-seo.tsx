'use client';

import { Input } from '@/components/input';
import { Textarea } from '@/components/textarea';
import { createSeoAction } from './actions/create-seo-action';
import { useFormState } from 'react-dom';
import { ButtonSubmit } from './button-submit';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Button } from '@/components/button';

const initialState = {
  issues: '',
  object: {
    seo: {
      title: '',
      description: '',
      keywords: [],
      url: '',
    },
  },
};

export function FormSeo() {
  const [state, formAction] = useFormState(
    createSeoAction,
    initialState
  );

  const handleCopy = (codeText: string) => {
    navigator.clipboard
      .writeText(codeText)
      .then(() => {
        alert('Texto copiado al portapapeles');
      })
      .catch((err) => {
        console.error('Error al copiar al portapapeles: ', err);
      });
  };

  const codeString = `
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${state.object.seo.title}</title>
      <meta name="description" content="${
        state.object.seo.description
      }" />
      <meta name="keywords" content="${state.object.seo.keywords.join(
        ', '
      )}" />
      <link rel="canonical" href="${state.object.seo.url}" />
    </head>
  `;

  return (
    <>
      <form
        action={formAction}
        className="flex flex-col gap-10 mt-16"
      >
        <div className="grid grid-cols-2 gap-5">
          <Input
            name="website"
            label="Url del sitio"
            type="url"
            required
            placeholder="https://midu.dev"
          />

          <Input
            name="name"
            label="Nombre del sitio"
            required
            placeholder="Midudev"
          />
        </div>

        <Textarea name="description" label="Descripción" required />

        {state.issues && (
          <ul
            aria-live="polite"
            className="text-red-500 list-inside list-disc"
          >
            {state?.issues.split('\n').map((issue, index) => (
              <li key={index}>{issue}</li>
            ))}
          </ul>
        )}

        <ButtonSubmit />
      </form>

      {state.object.seo.title && (
        <>
          <SyntaxHighlighter
            language="html"
            customStyle={{
              fontSize: '1.2rem',
              padding: '1rem',
              borderRadius: '0.5rem',
            }}
            style={dracula}
            wrapLines
          >
            {codeString}
          </SyntaxHighlighter>
          <Button
            onClick={() => handleCopy(codeString)}
            className="mt-4 p-2 bg-blue-500 text-white rounded"
          >
            Copiar código
          </Button>
        </>
      )}
    </>
  );
}
