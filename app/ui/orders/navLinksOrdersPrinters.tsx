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
    href: '/dashboard/orders/printers?filter=pendings',
    icon: ClipboardDocumentListIcon,
  },
  {
    name: 'Mis Ordenes',
    href: '/dashboard/orders/printers?filter=myOrders',
    icon: CheckIcon,
  },
  {
    name: 'En Proceso',
    href: '/dashboard/orders/printers?filter=inProcess',
    icon: CircleStackIcon,
  },
];

export default function NavLinksOrders() {
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
            className={clsx('link-menu', {
              'link-menu-active': param === link.href.split('=')[1],
            })}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
