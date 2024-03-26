import { Order } from '@/app/lib/definitions';

export default function ProductsInOrder({ order }: { order: Order }) {
  return (
    <div className="rounded-lg bg-gray-700 p-5">
      <h2 className="text-lg font-semibold">Detalle</h2>
      <div>
        {order.products.map((p) => (
          <div className="flex gap-2" key={p.serie}>
            <div className="hidden md:block">{p.codart}</div>
            <div>{p.descart}</div>
            <div className="ml-auto">${p.priceList1WithTax.toFixed()}</div>
          </div>
        ))}
        <div className="flex gap-2">
          <div>MANO DE OBRA</div>
          <div></div>
          <div className="ml-auto">${Number(order.costo).toFixed()}</div>
        </div>
        <div className="mt-5 flex gap-2 lg:text-xl">
          <div>Total</div>
          <div></div>
          <div className="ml-auto">${order.total.toFixed()}</div>
        </div>
      </div>
    </div>
  );
}
