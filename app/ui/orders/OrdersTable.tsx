import { Metadata } from 'next';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { ordersPcPending } from '../../lib/urbano';

export const metadata: Metadata = {
  title: 'PCs',
};

const getOrders = (sector: string, filter: string) => {
  if (sector === 'pc' && filter === 'pendings')
    return ordersPcPending.slice(0, 3);
  if (sector === 'pc' && filter === 'myOrders')
    return ordersPcPending.slice(3, 5);
  if (sector === 'pc' && filter === 'inProcess')
    return ordersPcPending.slice(6, 7);
  if (sector === 'printers' && filter === 'pendings')
    return ordersPcPending.slice(7, 12);
};

export default function OrdersTable({
  sector,
  filter,
}: {
  sector: string;
  filter: string;
}) {
  if (!filter || !sector) return;

  const orders = getOrders(sector, filter);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className=" md:hidden">
            {orders?.map((order) => (
              <div
                key={order.nrocompro}
                className="mb-2 w-full rounded-md border-2 border-lime-600 bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{order.nombre}</p>
                    </div>
                    <p className="text-sm text-gray-500">{order.nrocompro}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      Prioridad: {order.prioridad}
                    </p>
                    <p>{formatDateToLocal(order.ingresado)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
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
              </tr>
            </thead>
            <tbody className="bg-white">
              {orders?.map((order) => (
                <tr
                  key={order.nrocompro}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">
                    {order.nrocompro}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {order.nombre}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {order.prioridad}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(order.ingresado)}
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
