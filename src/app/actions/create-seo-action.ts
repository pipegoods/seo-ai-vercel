'use server';

import * as v from 'valibot';
import { openai } from '@ai-sdk/openai';
import { generateText, generateObject, jsonSchema } from 'ai';

const FormSeoSchema = v.object({
  name: v.pipe(
    v.string('El nombre del sitio debe debe ser un texto'),
    v.minLength(
      3,
      'El nombre del sitio debe tener al menos 3 caracteres'
    )
  ),
  website: v.pipe(
    v.string('La URL del sitio debe ser un texto'),
    v.minLength(
      3,
      'La URL del sitio debe tener al menos 3 caracteres'
    )
  ),
  description: v.pipe(
    v.string('La descripción debe ser un texto'),
    v.minLength(
      10,
      'La descripción debe tener al menos 10 caracteres'
    )
  ),
});

const schemaSEO = jsonSchema<{
  seo: {
    title: string;
    description: string;
    keywords: string[];
    url: string;
  };
}>({
  type: 'object',
  properties: {
    seo: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        keywords: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        url: {
          type: 'string',
        },
      },
      required: ['title', 'description', 'keywords', 'url'],
    },
  },
  required: ['seo'],
});

export async function createSeoAction(
  prevState: any,
  formData: FormData
) {
  const data = Object.fromEntries(formData.entries());

  const result = v.safeParse(FormSeoSchema, data);

  if (!result.success) {
    return {
      issues: result.issues.map((issue) => issue.message).join('\n'),
      object: {
        seo: {
          title: '',
          description: '',
          keywords: [],
          url: '',
        },
      },
    };
  }

  const { object } = await generateObject({
    model: openai('gpt-4o'),
    schema: schemaSEO,
    system:
      'Eres un profesional de marketing digital, eres experto en la creación de SEO para sitios web.',
    prompt: `Crea el SEO para un sitio web llamado ${data.name} con la URL ${data.website} y la descripción ${data.description}, deberás utilizar los datos que ya te he proporcionado, mejorarlos y completar el resto de campos.`,
  });

  return {
    issues: '',
    object,
  };
}
