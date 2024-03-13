'use client';

import {
  ClipboardDocumentListIcon,
  CheckIcon,
  CircleStackIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const technical = 'gabyt';
const links = [
  {
    name: 'Pendientes',
    href: `/dashboard/orders/pc?sector=.PC&status=pending`,
    icon: ClipboardDocumentListIcon,
  },
  {
    name: 'Mis Ordenes',
    href: `/dashboard/orders/pc?technical=${technical}&status=inProcess`,
    icon: CheckIcon,
  },
  {
    name: 'En Proceso',
    href: `/dashboard/orders/pc?status=inProcess`,
    icon: CircleStackIcon,
  },
];

export default function NavLinksOrdersPc() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link key={link.name} href={link.href} className="link-menu">
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
