'use client';
import { outOrder } from '@/app/lib/actions';
import { Order } from '@/app/lib/definitions';

export default function OutOrder({ order }: { order: Order }) {
  return (
    <button
      onClick={() => outOrder(order)}
      className="ml-auto rounded-md bg-red-500 px-3 py-2 text-black hover:bg-red-600"
    >
      Salida
    </button>
  );
}
