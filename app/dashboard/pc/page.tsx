import OrdersTable from '@/app/ui/orders/OrdersTable';
import { OrdersTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

export default function Pc({
  searchParams,
}: {
  searchParams?: {
    pcMenu?: string;
  };
}) {
  const pcMenu = searchParams?.pcMenu || '';

  return (
    <main>
      <Suspense fallback={<OrdersTableSkeleton />}>
        <OrdersTable filter={pcMenu} />
      </Suspense>
    </main>
  );
}
