import NavbarOrdersPrinters from '@/app/ui/orders/NavbarOrdersPrinters';

export default function LayoutPrinters({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavbarOrdersPrinters />
      <div>{children}</div>
    </div>
  );
}
