import { getOrder } from '@/app/lib/data';
import { formatOrderNumber } from '@/app/lib/utils';

export default function OrderDetail({
  searchParams,
}: {
  searchParams?: {
    id?: string;
  };
}) {
  const id = searchParams?.id || '';
  if (!id || id.length !== 5) return;

  const nrocompro = formatOrderNumber(id);
  const order = getOrder(nrocompro);

  if (!order)
    return (
      <div>
        <h2>No se encontro Orden de reparacion</h2>
      </div>
    );
  return <div>Card Orden: {order.nombre}</div>;
}
