import { FormSeo } from './form-seo';

export default function Home() {
  return (
    <div className="font-sans grid container mx-auto mt-10">
      <h1 className="font-bold text-5xl">
        Crear tu SEO nunca fue tan facil
      </h1>

      <FormSeo />
    </div>
  );
}
