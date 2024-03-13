import { Metadata } from 'next';
import OrdersTable from '@/app/ui/orders/OrdersTable';
import NavbarOrdersPc from '@/app/ui/orders/NavbarOrdersPc';

export const metadata: Metadata = {
  title: 'PCs',
};

export default async function PC({
  searchParams,
}: {
  searchParams?: {
    status?: string;
    sector?: string;
    technical?: string;
  };
}) {
  const status = searchParams?.status || '';
  const sector = searchParams?.sector || '';
  const technical = searchParams?.technical || '';

  return (
    <main>
      <NavbarOrdersPc />
      <OrdersTable status={status} sector={sector} technical={technical} />
    </main>
  );
}
