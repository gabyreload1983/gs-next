'use client';

import {
  ClipboardDocumentListIcon,
  CheckIcon,
  CircleStackIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const links = [
  {
    name: 'Pendientes',
    href: `/dashboard/printers?printersMenu=pending`,
    icon: ClipboardDocumentListIcon,
  },
  {
    name: 'Mis Ordenes',
    href: `/dashboard/printers?printersMenu=technical`,
    icon: CheckIcon,
  },
  {
    name: 'En Proceso',
    href: `/dashboard/printers?printersMenu=inProcess`,
    icon: CircleStackIcon,
  },
];

export default function NavLinksOrders({
  quantities,
}: {
  quantities: number[];
}) {
  const searchParams = useSearchParams();
  const param = searchParams.get('printersMenu') || '';

  return (
    <>
      {links.map((link, index) => {
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
            <span className="rounded-xl bg-slate-300 p-1 text-black">
              {quantities[index]}
            </span>
          </Link>
        );
      })}
    </>
  );
}
