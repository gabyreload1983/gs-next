import { getOrder } from '@/app/lib/data';
import { Order } from '@/app/lib/definitions';
import OrderDetail from '@/app/ui/orders/OrderDetail';

export default async function Order({ params }: { params: { id: string } }) {
  const id = params.id;
  const order: Order = await getOrder(id);

  return (
    <div className="grid grid-cols-1 gap-3 lg:max-w-6xl xl:grid-cols-2">
      <OrderDetail order={order} />
      <div className="rounded-lg bg-gray-700 p-5">Productos</div>
    </div>
  );
}
