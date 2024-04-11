import { getOrder } from '@/app/lib/data';
import { Order } from '@/app/lib/definitions';
import EditProductsInOrder from '@/app/ui/orders/EditProductsInOrder';
import ProductsInOrder from '@/app/ui/orders/ProductsInOrder';
import { notFound } from 'next/navigation';

export default async function EditOrder({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: {
    search?: string;
  };
}) {
  const id = params.id;
  const order: Order = await getOrder(id);
  const search = searchParams?.search || '';

  if (!order) {
    notFound();
  }

  return (
    <div className="grid grid-cols-1 gap-3 lg:max-w-full xl:grid-cols-2">
      <EditProductsInOrder order={order} search={search} />
      <ProductsInOrder order={order} />
    </div>
  );
}
