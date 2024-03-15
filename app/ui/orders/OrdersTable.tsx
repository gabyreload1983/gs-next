import { Metadata } from 'next';
import {
  formatDateToLocal,
  getOrderTier,
  getOrderTierBackground,
} from '@/app/lib/utils';
import Link from 'next/link';
import { getOrders } from '@/app/lib/data';
import { Order } from '@/app/lib/definitions';
import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'PCs',
};

export default async function OrdersTable({
  filter,
  sector,
}: {
  filter: string;
  sector: string;
}) {
  const orders: Order[] = await getOrders({ filter, sector });

  return (
    <div className="mt-6 flow-root text-gray-900">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg p-2 md:bg-gray-50 md:pt-0">
          <div className="md:hidden">
            {orders?.map((order) => (
              <Link
                key={order.nrocompro}
                href={`/dashboard/orders/${order.nrocompro}`}
              >
                <div
                  className={`${getOrderTierBackground(
                    order.prioridad,
                  )} mb-2 w-full rounded-md border-2 border-lime-600 bg-white p-4`}
                >
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <div className="mb-2">
                        <p>{order.nombre}</p>
                      </div>
                      <p className="pb-2 text-sm text-gray-950">
                        {order.nrocompro}
                      </p>
                      <p>{formatDateToLocal(order.ingresado)}</p>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between pt-4">
                    <p className="text-xl font-medium">
                      Tier: {getOrderTier(order.prioridad)}
                    </p>
                    <p>{order.tecnico}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <table className="hidden min-w-full bg-white  md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Nº Orden
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Cliente
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Tier
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Fecha
                </th>
                <th>Tecnico</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {orders?.map((order) => (
                <tr
                  key={order.nrocompro}
                  className={`${getOrderTierBackground(
                    order.prioridad,
                  )} w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg`}
                >
                  <td className="whitespace-nowrap px-3 py-3">
                    {order.nrocompro}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {order.nombre}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {getOrderTier(order.prioridad)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(order.ingresado)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {order.tecnico}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <Link
                      key={order.nrocompro}
                      href={`/dashboard/orders/${order.nrocompro}`}
                    >
                      <DocumentMagnifyingGlassIcon className="hover:text-green-800" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
