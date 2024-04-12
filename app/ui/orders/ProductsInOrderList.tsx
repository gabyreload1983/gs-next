import { Order } from '@/app/lib/definitions';
import DeleteProductButton from './DeleteProductButton';

export default function ProductsInOrderList({ order }: { order: Order }) {
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-gray-700 p-5">
      <h2 className="text-lg font-semibold">Productos</h2>
      {order.products.map((p) => (
        <div className="flex items-center gap-2" key={p.serie}>
          <p className="hidden w-28 lg:block">{p.codart}</p>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap">
            {p.descart}
          </p>
          <p className="ml-auto">${p.priceList1WithTax.toFixed()}</p>
          <DeleteProductButton order={order} serie={p.serie} />
        </div>
      ))}
    </div>
  );
}
