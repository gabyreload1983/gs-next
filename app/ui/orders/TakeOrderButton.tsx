'use client';

import { takeOrder } from '@/app/lib/actions';
import { BookmarkIcon } from '@heroicons/react/24/outline';

export function TakeOrderMovilButton({ id }: { id: string }) {
  return (
    <span
      onClick={() => takeOrder(id)}
      className="cursor-pointer rounded-md bg-green-300 p-2 hover:bg-green-600 hover:text-gray-200"
    >
      Tomar
    </span>
  );
}

export function TakeOrderIconButton({ id }: { id: string }) {
  return (
    <BookmarkIcon
      onClick={() => takeOrder(id)}
      className="w-4 cursor-pointer hover:text-green-800"
      data-twe-toggle="tooltip"
      title="Tomar Orden"
    />
  );
}
