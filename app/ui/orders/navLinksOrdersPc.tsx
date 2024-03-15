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
    href: `/dashboard/pc?pcMenu=pending`,
    icon: ClipboardDocumentListIcon,
  },
  {
    name: 'Mis Ordenes',
    href: `/dashboard/pc?pcMenu=technical`,
    icon: CheckIcon,
  },
  {
    name: 'En Proceso',
    href: `/dashboard/pc?pcMenu=inProcess`,
    icon: CircleStackIcon,
  },
];

export default function NavLinksOrdersPc() {
  const searchParams = useSearchParams();
  const param = searchParams.get('pcMenu') || '';

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
