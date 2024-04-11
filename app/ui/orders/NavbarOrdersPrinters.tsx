import { getOrdersQuantity } from '@/app/lib/utils';
import NavLinksOrdersPrinters from './navLinksOrdersPrinters';
import { getOrderPendings } from '@/app/lib/data';

export default async function NavbarOrdersPrinters() {
  const ordersPending: any[] = await getOrderPendings();
  const quantities = getOrdersQuantity(ordersPending, '.IMP');
  return (
    <div className="flex grow flex-row space-x-2 md:justify-start">
      <NavLinksOrdersPrinters quantities={quantities} />
    </div>
  );
}
