'use client';

import { updateOrder } from '@/app/lib/actions';
import { Order } from '@/app/lib/definitions';

export default function UpdateOrderButton({ order }: { order: Order }) {
  return (
    <button
      onClick={() => updateOrder(order)}
      className="rounded-md bg-green-200 px-3 py-2 text-black hover:bg-green-400"
    >
      Guardar
    </button>
  );
}
