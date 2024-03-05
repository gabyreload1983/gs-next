import { Metadata } from 'next';
import OrdersTable from '@/app/ui/orders/OrdersTable';
import NavbarOrdersPrinters from '@/app/ui/orders/NavbarOrdersPrinters';

export const metadata: Metadata = {
  title: 'Printers',
};

export default function PC({
  searchParams,
}: {
  searchParams?: {
    filter?: string;
  };
}) {
  const sector = 'printers';
  const filter = searchParams?.filter || '';

  return (
    <main>
      <NavbarOrdersPrinters />
      <OrdersTable sector={sector} filter={filter} />
    </main>
  );
}
