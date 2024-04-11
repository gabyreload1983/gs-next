'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { Order } from '../lib/definitions';

export default function SearchProducts({
  placeholder,
  order,
}: {
  placeholder: string;
  order: Order;
}) {
  const searchParams = useSearchParams();
  const search = searchParams.get('search') || '';

  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    if (term.length >= 3) {
      replace(
        `/dashboard/orders/edit/products/${order.nrocompro}?search=${term}`,
      );
    }
    if (!term.length)
      replace(`/dashboard/orders/edit/products/${order.nrocompro}`);
  }, 500);

  return (
    <div className="relative mb-3 flex flex-shrink-0">
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm text-gray-950 outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={search?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
