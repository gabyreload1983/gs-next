import { Order, Product, ProductInOrder } from '@/app/lib/definitions';
import SearchProducts from '../searchProducts';
import { searchProducts } from '@/app/lib/data';
import ProductList from './ProductList';
import UpdateOrderButton from './UpdateOrderButton';

export default async function EditProductsInOrder({
  order,
  search,
}: {
  order: Order;
  search: string;
}) {
  const products: Product[] = await searchProducts(search);

  return (
    <div className="flex flex-col gap-2 rounded-lg bg-gray-700 p-5">
      <SearchProducts placeholder="Buscar producto" order={order} />
      <div className="flex flex-row gap-2 bg-slate-800 p-2">
        <p className="hidden">CODIGO</p>
        <p className="w-64 grow overflow-hidden text-ellipsis whitespace-nowrap">
          DESCRIPCION
        </p>
        <p className="w-16 text-right">STOCK</p>
        <p className="w-28 text-right">PRECIO</p>
      </div>
      <ProductList products={products} />

      <UpdateOrderButton order={order} />
    </div>
  );
}
