import { FormSeo } from './form-seo';

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-layout p-4 gap-8 flex-1 content-between text-neutral-100 max-w-[600px]">
      <h1 className="font-semibold text-2xl md:text-4xl leading-normal">
        Crear tu <a href="https://developer.mozilla.org/es/docs/Glossary/SEO" target='_blank'><abbr title="Search Engine Optimization" className='no-underline text-blue-200'>SEO</abbr></a> nunca fue tan fácil
      </h1>

      <FormSeo />

      <footer className='bg-neutral-50/5'>
        <p className="text-center text-neutral-300">
          Creado por{' '}
          <a
            href="https://andresvizcaino.com"
            target="_blank"
            className="text-blue-500"
          >
            pipegoods
          </a>
          {" "}y{" "}
          <a
            href="https://linkedin.com/in/katy-barboza-baena"
            target="_blank"
            className="text-blue-500"
          >
            katy-paola
          </a>
        </p>
      </footer>
    </div>
  );
}
