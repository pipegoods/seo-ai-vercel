"use client";

import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import { createSeoAction } from "./actions/create-seo-action";
import { useFormState } from "react-dom";
import { ButtonSubmit } from "./button-submit";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Button } from "@/components/button";
import { useState } from "react";
import { set } from "valibot";

const initialState = {
  issues: "",
  object: {
    seo: {
      title: "",
      description: "",
      keywords: [],
      url: "",
    },
  },
};

export function FormSeo() {
  const [state, formAction] = useFormState(createSeoAction, initialState);
  const [textButtonCopy, setTextButtonCopy] = useState("Copiar código");
  const [bgButtonCopy, setBgButtonCopy] = useState("bg-transparent");
  const [strokeButtonCopy, setStrokeButtonCopy] = useState("border-green-300");
  const [colorButtonCopy, setColorButtonCopy] = useState("text-green-300");

  const handleCopy = (codeText: string) => {
    navigator.clipboard
      .writeText(codeText)
      .then(() => {
        setTextButtonCopy("¡Copiado! ✓");
        setBgButtonCopy("bg-green-700");
        setStrokeButtonCopy("border-green-700");
        setColorButtonCopy("text-neutral-100");
        setTimeout(() => {
          setTextButtonCopy("Copiar código");
          setBgButtonCopy("bg-transparent");
          setStrokeButtonCopy("border-green-300");
          setColorButtonCopy("text-green-300");
        }, 1500);
      })
      .catch((err) => {
        console.error("Error al copiar al portapapeles: ", err);
      });
  };

  const codeString = `
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${state.object.seo.title}</title>
      <meta name="description" content="${state.object.seo.description}" />
      <meta name="keywords" content="${state.object.seo.keywords.join(", ")}" />
      <link rel="canonical" href="${state.object.seo.url}" />
    </head>
  `;

  return (
    <div className="flex flex-col gap-14">
      <form action={formAction} className="flex flex-col gap-6">
        <fieldset className="grid grid-cols-2 gap-4">
          <Input
            name="website"
            label="URL del sitio:"
            type="url"
            required
            placeholder="https://midu.dev"
          />

          <Input
            name="name"
            label="Nombre del sitio:"
            type="text"
            required
            placeholder="Midudev"
          />

          <Textarea name="description" label="Descripción:" required />
        </fieldset>

        {state.issues && (
          <ul aria-live="polite" className="text-red-500 list-inside list-disc">
            {state?.issues.split("\n").map((issue, index) => (
              <li key={index}>{issue}</li>
            ))}
          </ul>
        )}
        <ButtonSubmit />
      </form>
      {state.object.seo.title && (
        <div className="relative">
          <SyntaxHighlighter
            language="html"
            customStyle={{
              fontSize: "1.2rem",
              padding: "1rem",
              borderRadius: "0.125rem",
            }}
            style={dracula}
            wrapLines
            codeTagProps={{ style: { fontSize: "1.2rem",
              maxWidth: "288px",
              display: "flex",
              flexDirection: "column",
             } }}
          >
            {codeString}
          </SyntaxHighlighter>
          <Button
            onClick={() => handleCopy(codeString)}
            className={`absolute top-1 right-1 ${bgButtonCopy} transition-all hover:bg-green-700 hover:text-green-100 hover:border-green-700 border w-auto self-end ${colorButtonCopy} ${strokeButtonCopy} rounded-sm text-sm px-2 py-1`}
          >
            {textButtonCopy}
          </Button>
        </div>
      )}
    </div>
  );
}
