import { Metadata } from 'next';
import OrdersTable from '@/app/ui/orders/OrdersTable';
import NavbarOrdersPc from '@/app/ui/orders/NavbarOrdersPc';

export const metadata: Metadata = {
  title: 'PCs',
};

export default function PC({
  searchParams,
}: {
  searchParams?: {
    filter?: string;
  };
}) {
  const sector = 'pc';
  const filter = searchParams?.filter || '';

  return (
    <main>
      <NavbarOrdersPc />
      <OrdersTable sector={sector} filter={filter} />
    </main>
  );
}
