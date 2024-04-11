import { getOrderPendings } from '@/app/lib/data';
import NavLinksOrdersPc from './navLinksOrdersPc';

import { getOrdersQuantity } from '@/app/lib/utils';

export default async function NavbarOrdersPc() {
  const ordersPending: any[] = await getOrderPendings();
  const quantities = getOrdersQuantity(ordersPending, '.PC');

  return (
    <div className="flex grow flex-row space-x-2 md:justify-start">
      <NavLinksOrdersPc quantities={quantities} />
    </div>
  );
}
