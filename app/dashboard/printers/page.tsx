import OrdersTable from '@/app/ui/orders/OrdersTable';
import { OrdersTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

export default function Pc({
  searchParams,
}: {
  searchParams?: {
    printersMenu?: string;
  };
}) {
  const printersMenu = searchParams?.printersMenu || '';

  return (
    <main>
      <Suspense fallback={<OrdersTableSkeleton />}>
        <OrdersTable filter={printersMenu} sector="printers" />
      </Suspense>
    </main>
  );
}
