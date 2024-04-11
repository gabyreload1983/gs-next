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

export default function NavLinksOrdersPc({
  quantities,
}: {
  quantities: number[];
}) {
  const searchParams = useSearchParams();
  const param = searchParams.get('pcMenu') || '';

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
