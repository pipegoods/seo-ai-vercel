import { FormSeo } from './form-seo';

export default function Home() {
  return (
    <div className="font-sans grid container mx-auto mt-10">
      <h1 className="font-bold text-5xl">
        Crear tu SEO nunca fue tan facil
      </h1>

      <FormSeo />

      <footer>
        <p className="text-center text-gray-400 mt-10">
          Creado por{' '}
          <a
            href="https://andresvizcaino.com"
            target="_blank"
            className="text-blue-400"
          >
            pipegoods
          </a>
        </p>
      </footer>
    </div>
  );
}
