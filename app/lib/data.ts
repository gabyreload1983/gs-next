import { unstable_noStore } from 'next/cache';
import { getPathOrdersPc } from './utils';

export const getOrder = async (id: string) => {
  unstable_noStore();
  const path = `http://localhost:3400/api/orders/${id}`;
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

export const getOrders = async ({
  filter,
  sector,
}: {
  filter: string;
  sector: string;
}) => {
  unstable_noStore();
  if (!filter) return;

  const path = getPathOrdersPc(filter, sector);

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
