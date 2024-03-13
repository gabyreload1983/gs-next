'use client';

import {
  ClipboardDocumentListIcon,
  CheckIcon,
  CircleStackIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const technical = 'gabyt';
const links = [
  {
    name: 'Pendientes',
    href: `/dashboard/orders/printers?sector=.imp&state=pending`,
    icon: ClipboardDocumentListIcon,
  },
  {
    name: 'Mis Ordenes',
    href: `/dashboard/orders/printers?technical=${technical}&state=inProcess`,
    icon: CheckIcon,
  },
  {
    name: 'En Proceso',
    href: `/dashboard/orders/printers?state=inProcess`,
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
