import { unstable_noStore } from 'next/cache';
import { ordersPcPending } from './urbano';
import { getPathOrdersPc } from './utils';

export const getOrder = (id: string) => {
  const order = ordersPcPending.find((order) => order.nrocompro === id);
  return order;
};

export const getOrders = async ({ filter }: { filter: string }) => {
  unstable_noStore();
  if (!filter) return;

  const path = getPathOrdersPc(filter);

  // await new Promise((resolve) => setTimeout(resolve, 3000));

  try {
    const data = await fetch(path, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await data.json();
    return response.payload;
  } catch (error) {
    console.log(error);
  }
};
