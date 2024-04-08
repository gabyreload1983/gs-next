'use server';

import { Order } from './definitions';

export async function takeOrder(id: string) {
  console.log(`Take order ${id}`);
}

export async function saveOrder(order: Order) {
  console.log(
    `Save order ${order.nrocompro} ${order.diagnostico} ${order.costo}`,
  );
}

export async function closeOrder(order: Order) {
  console.log(
    `Close order ${order.nrocompro} ${order.diagnostico} ${order.costo}`,
  );
}

export async function freeOrder(order: Order) {
  console.log(
    `Free order ${order.nrocompro} ${order.diagnostico} ${order.costo}`,
  );
}
