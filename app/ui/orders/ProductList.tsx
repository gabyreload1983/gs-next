import { Product } from '@/app/lib/definitions';
import { formatCurrency } from '@/app/lib/utils';

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((p) => (
        <div
          className="flex flex-row gap-1 p-2 hover:cursor-pointer hover:bg-green-800"
          key={p.codigo}
        >
          <p className="hidden">{p.codigo}</p>
          <p className="w-64 grow overflow-hidden text-ellipsis whitespace-nowrap">
            {p.descrip}
          </p>
          <p className="w-16 text-right">{Number(p.stockd01).toFixed()}</p>
          <p className="w-28 text-right">
            {formatCurrency(p.priceList1WithTax)}
          </p>
        </div>
      ))}
    </>
  );
}
