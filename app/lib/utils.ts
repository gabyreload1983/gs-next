import { User } from './definitions';

export const formatCurrency = (amount: number) => {
  return (amount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const formatDateToLocal = (
  dateStr: string,
  locale: string = 'en-US',
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

// GSystem
export const getUser = (): User => {
  const user = {
    _id: '65b91cd1b7587cd52ea407dc',
    email: 'ggodoy@sinapsis.com.ar',
    code_technical: 'GABYT',
    first_name: 'gabriel',
    last_name: 'godoy',
    role: 'premium',
  };

  return user;
};
export const formatOrderNumber = (id: string) => `ORX0011000${id}`;

export const getOrderState = (state: number) => {
  if (state === 21) return 'PENDIENTE';
  if (state === 22) return 'EN PROCESO';
  if (state === 23) return 'FINALIZADA';
};

export const getOrderStatusCode = (status: string) => {
  if (status === 'pending') return 21;
  if (status === 'inProcess') return 22;
  if (status === 'finish') return 23;
  return '';
};

export const getOrderDiagnosis = (diagnosis: number) => {
  if (diagnosis === 21) return 'PENDIENTE';
  if (diagnosis === 22) return 'REPARADO';
  if (diagnosis === 23) return 'SIN REPARACION';
};

export const getOrderUbication = (ubication: number) => {
  if (ubication === 21) return 'SIN ENTREGAR';
  if (ubication === 22) return 'ENTREGADO';
};

export const getOrderTier = (tier: number) => {
  if (tier === 0) return 'NORMAL';
  if (tier === 1) return '';
  if (tier === 2) return '';
  if (tier === 3) return 'ARMADOS';
  if (tier === 4) return 'TURNOS/PRIORIDADES';
  if (tier === 5) return 'GARANTIA REPARACION';
  if (tier === 6) return '';
  if (tier === 7) return '';
  if (tier === 8) return 'BOXES';
  if (tier === 9) return 'ABONADOS';
  if (tier === 10) return 'GARANTIA COMPRA';
};

export const getOrderTierBackground = (tier: number) => {
  if (tier === 0) return 'bg-gray-300';
  if (tier === 1) return 'bg-orange-300';
  if (tier === 2) return 'bg-stone-600';
  if (tier === 3) return 'bg-red-300';
  if (tier === 4) return 'bg-orange-600';
  if (tier === 5) return 'bg-yellow-600';
  if (tier === 6) return 'bg-green-600';
  if (tier === 7) return 'bg-teal-600';
  if (tier === 8) return 'bg-indigo-600';
  if (tier === 9) return 'bg-fuchsia-600';
  if (tier === 10) return 'bg-rose-600';
};

export const getPathOrdersPc = (filter: string, sector: string) => {
  const user = getUser();
  const technical = user.code_technical;

  const sectorCode = sector === 'pc' ? '.PC' : '.IMP';
  if (filter === 'pending')
    return `http://localhost:3400/api/orders/next?status=21&sector=${sectorCode}`;
  if (filter === 'technical')
    return `http://localhost:3400/api/orders/next?status=22&technical=${technical}`;
  if (filter === 'inProcess')
    return `http://localhost:3400/api/orders/next?status=22&sector=${sectorCode}`;

  return '';
};

export const formatNroOrder = (id: string) => `ORX0011000${id}`;

export const isPending = (status: number): Boolean =>
  status === 21 ? true : false;

export const isInProcess = (status: number): Boolean =>
  status === 22 ? true : false;

export const isFinished = (status: number): Boolean =>
  status === 23 ? true : false;

export const isUnDelivery = (ubication: number): Boolean =>
  ubication === 21 ? true : false;

export const canEdit = (codeTechnical: string): Boolean => {
  const user = getUser();
  return codeTechnical === user.code_technical;
};

export const validateRole = (roles: string[]): Boolean => {
  const user = getUser();
  return roles.includes(user.role);
};

export const getOrdersQuantity = (ordersPending: any[], sector: string) => {
  const user = getUser();
  const pcOrderPendings: number = ordersPending.reduce(
    (acc, val) =>
      val.codiart === sector && val.estado === 21 ? (acc = acc + 1) : acc,
    0,
  );
  const myOrders: number = ordersPending.reduce(
    (acc, val) =>
      val.tecnico === user.code_technical && val.estado === 22
        ? (acc = acc + 1)
        : acc,
    0,
  );
  const inProcess: number = ordersPending.reduce(
    (acc, val) =>
      val.codiart === sector && val.estado === 22 ? (acc = acc + 1) : acc,
    0,
  );

  const quantities: number[] = [pcOrderPendings, myOrders, inProcess];

  return quantities;
};
