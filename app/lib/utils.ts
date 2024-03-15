import { Revenue } from './definitions';

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

export const generateYAxis = (revenue: Revenue[]) => {
  // Calculate what labels we need to display on the y-axis
  // based on highest record and in 1000s
  const yAxisLabels = [];
  const highestRecord = Math.max(...revenue.map((month) => month.revenue));
  const topLabel = Math.ceil(highestRecord / 1000) * 1000;

  for (let i = topLabel; i >= 0; i -= 1000) {
    yAxisLabels.push(`$${i / 1000}K`);
  }

  return { yAxisLabels, topLabel };
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};

// GSystem
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
  const technical = 'GABYT';
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
