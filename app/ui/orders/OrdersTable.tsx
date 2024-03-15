import { Metadata } from 'next';
import {
  formatDateToLocal,
  getOrderTier,
  getOrderTierBackground,
  isPending,
} from '@/app/lib/utils';
import Link from 'next/link';
import { getOrders } from '@/app/lib/data';
import { Order } from '@/app/lib/definitions';
import { MagnifyingGlassIcon, BookmarkIcon } from '@heroicons/react/24/outline';

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
        <div className="rounded-lg p-2 md:bg-gray-50">
          <div className="lg:hidden">
            {orders?.map((order) => (
              <div
                className={` mb-2 w-full rounded-md border-2 border-lime-600 bg-white p-4`}
              >
                <div className="border-b pb-4">
                  <div className="mb-2 flex items-center justify-center gap-2 text-sm">
                    <strong
                      className={`${getOrderTierBackground(
                        order.prioridad,
                      )} rounded-lg px-3 py-1 text-xs text-gray-950`}
                    >
                      Tier {getOrderTier(order.prioridad)}
                    </strong>
                  </div>
                  <div className="mb-2 flex items-center justify-between gap-2 text-sm">
                    <p className="font-semibold text-gray-950">
                      {order.nrocompro}
                    </p>
                    <p>{formatDateToLocal(order.ingresado)}</p>
                  </div>
                  <p className="text-lg font-medium">{order.nombre}</p>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div className="flex items-center justify-center gap-2">
                    <Link
                      key={order.nrocompro}
                      href={`/dashboard/orders/${order.nrocompro}`}
                    >
                      <span className="rounded-md bg-slate-500 p-2 hover:bg-slate-600 hover:text-gray-50">
                        Detalle
                      </span>
                    </Link>
                    {isPending(order.estado) && (
                      <span className="cursor-pointer rounded-md bg-green-300 p-2 hover:bg-green-600 hover:text-gray-200">
                        Tomar
                      </span>
                    )}
                  </div>
                  <p>{order.tecnico}</p>
                </div>
              </div>
            ))}
          </div>

          <table className="hidden min-w-full bg-white lg:table">
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
                  )} w-full border-b py-3 text-sm `}
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
                      <MagnifyingGlassIcon className="w-4 hover:text-green-800" />
                    </Link>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {isPending(order.estado) && (
                      <BookmarkIcon className="w-4 cursor-pointer hover:text-green-800" />
                    )}
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
