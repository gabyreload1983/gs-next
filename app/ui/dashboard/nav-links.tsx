'use client';

import {
  UserGroupIcon,
  ComputerDesktopIcon,
  PrinterIcon,
  CubeIcon,
  AdjustmentsVerticalIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: 'PCs',
    href: '/dashboard/orders/pc',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Impresoras',
    href: '/dashboard/orders/printers',
    icon: PrinterIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'Productos', href: '/dashboard/products', icon: CubeIcon },
  {
    name: 'Administracion',
    href: '/dashboard/adminstration',
    icon: AdjustmentsVerticalIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx('link-menu', {
              'link-menu-active': pathname === link.href,
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
