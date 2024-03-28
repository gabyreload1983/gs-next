import { getOrder } from '@/app/lib/data';
import { Order } from '@/app/lib/definitions';
import EditOrderDetail from '@/app/ui/orders/EditOrderDetail';
import { notFound } from 'next/navigation';

export default async function EditOrder({
  searchParams,
}: {
  searchParams?: {
    id?: string;
  };
}) {
  const id = searchParams?.id || '';

  if (!id) return;
  const order: Order = await getOrder(id);

  if (!order) {
    notFound();
  }

  return <EditOrderDetail order={order} />;
}
