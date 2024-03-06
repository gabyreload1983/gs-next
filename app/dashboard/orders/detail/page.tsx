import Order from '../../../ui/orders/Order';

export default function OrderDetail({
  searchParams,
}: {
  searchParams?: {
    id?: string;
  };
}) {
  const id = searchParams?.id || '';
  if (!id || id.length !== 5) return;

  return <Order id={id} />;
}
