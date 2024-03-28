import { Order } from '@/app/lib/definitions';
import Link from 'next/link';

export default function ProductsInOrder({ order }: { order: Order }) {
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-gray-700 p-5">
      <h2 className="text-lg font-semibold">Detalle</h2>
      {order.products.map((p) => (
        <div className="flex gap-2" key={p.serie}>
          <div className="hidden w-28 lg:block">{p.codart}</div>
          <div>{p.descart}</div>
          <div className="ml-auto">${p.priceList1WithTax.toFixed()}</div>
        </div>
      ))}
      <div className="flex gap-2">
        <div className="hidden w-28 lg:block">.ST</div>
        <div>MANO DE OBRA</div>
        <div className="ml-auto">${Number(order.costo).toFixed()}</div>
      </div>
      <div className="flex gap-2 text-xl">
        <div>Total</div>
        <div className="ml-auto">${order.total.toFixed()}</div>
      </div>
      <div className="mt-auto">
        <Link
          href={`/dashboard/orders/${order.nrocompro}`}
          className="rounded-md bg-amber-200 px-3 py-2 text-black hover:bg-amber-300"
        >
          Editar
        </Link>
      </div>
    </div>
  );
}
