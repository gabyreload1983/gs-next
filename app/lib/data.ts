import { ordersPcPending } from './urbano';

export const getOrder = (id: string) => {
  const order = ordersPcPending.find((order) => order.nrocompro === id);
  return order;
};
