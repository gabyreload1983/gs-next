import { getOrder } from '@/app/lib/data';
import { Order } from '@/app/lib/definitions';
import OrderDetail from '@/app/ui/orders/OrderDetail';
import ProductsInOrder from '@/app/ui/orders/ProductsInOrder';
import { notFound } from 'next/navigation';

export default async function Order({ params }: { params: { id: string } }) {
  const id = params.id;
  const order: Order = await getOrder(id);

  if (!order) {
    notFound();
  }

  return (
    <div className="grid grid-cols-1 gap-3 lg:max-w-6xl xl:grid-cols-2">
      <OrderDetail order={order} />
      <ProductsInOrder order={order} />
    </div>
  );
}
