import NavbarOrdersPc from '@/app/ui/orders/NavbarOrdersPc';

export default function LayoutPc({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavbarOrdersPc />
      <div>{children}</div>
    </div>
  );
}
