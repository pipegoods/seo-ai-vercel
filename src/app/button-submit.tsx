import { Button } from '@/components/button';
import { useFormStatus } from 'react-dom';

export function ButtonSubmit() {
  const { pending } = useFormStatus();
  return (
    <>
      <Button type="submit" disabled={pending}>
        {pending ? 'Generando...' : 'Generar'}
      </Button>
    </>
  );
}
