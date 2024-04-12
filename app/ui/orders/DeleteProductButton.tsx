'use client';

import { deleteProductFromOrder } from '@/app/lib/actions';
import { Order } from '@/app/lib/definitions';

export default function DeleteProductButton({
  order,
  serie,
}: {
  order: Order;
  serie: string;
}) {
  return (
    <button
      onClick={() => deleteProductFromOrder(order, serie)}
      className="rounded-xl bg-red-300 p-1 text-sm hover:bg-red-400"
    >
      X
    </button>
  );
}
