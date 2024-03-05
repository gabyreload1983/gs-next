'use client';

import {
  ClipboardDocumentListIcon,
  CheckIcon,
  CircleStackIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: 'Pendientes',
    href: '/dashboard/orders/pc?filter=pendings',
    icon: ClipboardDocumentListIcon,
  },
  {
    name: 'Mis Ordenes',
    href: '/dashboard/orders/pc?filter=myOrders',
    icon: CheckIcon,
  },
  {
    name: 'En Proceso',
    href: '/dashboard/orders/pc?filter=inProcess',
    icon: CircleStackIcon,
  },
];

export default function NavLinksOrdersPc() {
  const searchParams = useSearchParams();
  const param = searchParams.get('filter') || '';

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': param === link.href.split('=')[1],
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
