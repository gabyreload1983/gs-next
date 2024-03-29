// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type Order = {
  nrocompro: string;
  codigo: string;
  nombre: string;
  direccion: string;
  telefono: string;
  tiposerv: number;
  codiart: string;
  descart: string;
  esquema: string;
  facvta: string;
  garantia: number;
  provedor: string;
  faccpa: string;
  garantiap: number;
  serie: string;
  operador: string;
  equipo: string;
  ingresado: string;
  falla: string;
  accesorios: string;
  detalles: string;
  estado: number;
  seteado: string;
  diag: number;
  diagnosticado: string;
  ubicacion: number;
  ubicado: string;
  diagnostico: string;
  prioridad: number;
  repahasta: string;
  estimada: string;
  tecnico: string;
  asignado: string;
  costo: string;
  egresado: string;
  vienede: string;
  hacia: string;
  opcional: string;
  pendiente: string;
  nroenvio: string;
  estrma: string;
  textoenvio: string;
  textorespuesta: string;
  nrorecibo: string;
  products: ProductInOrder[];
  total: number;
};
export type ProductInOrder = {
  tipo: string;
  sector: string;
  estado: string;
  diag: string;
  serie: string;
  ingreso: string;
  festado: string;
  asignado: string;
  fdiag: string;
  egreso: string;
  cliente: string;
  operador: string;
  falla: string;
  diagnostico: string;
  garantia: number;
  tecnico: string;
  codart: string;
  descart: string;
  nrocompro: string;
  seguridad: string;
  vienedeop: string;
  observacion: string;
  costo: string;
  orauto: string;
  codartcambio: string;
  descartcambio: string;
  seriecambio: string;
  rvcambio: string;
  pendiente: string;
  codigo: string;
  descrip: string;
  txtpromo: string;
  codbarra: string;
  tipoart: string;
  rubro: string;
  grupo: number;
  categoria: number;
  ctacompra: string;
  ctaventa: string;
  unidad: string;
  ubicacion: string;
  imagen: string;
  comision: number;
  grabado: string;
  nrodespa1: string;
  nrodespa2: string;
  moneda: string;
  ctofob: string;
  origen: string;
  ctofle: string;
  ctoseg: string;
  ctoext: string;
  ctoder: string;
  ctoest: string;
  ctodes: string;
  ctoadi: string;
  ctofin: string;
  ctofec: string;
  lista1: string;
  renta1: string;
  lista2: string;
  renta2: string;
  lista3: string;
  renta3: string;
  lista4: string;
  renta4: string;
  lista5: string;
  renta5: string;
  lista6: string;
  renta6: string;
  impint: string;
  netogr: string;
  trabaserie: string;
  armado: string;
  minimo: number;
  costomas: string;
  garantiap: number;
  texto: string;
  talledesde: string;
  tallehasta: string;
  variacion: string;
  enlace: string;
  textoweb: string;
  lista7: string;
  renta7: string;
  lista8: string;
  renta8: string;
  lista9: number;
  renta9: string;
  nroconsu: number;
  codcompra: string;
  provedor: string;
  lista0: string;
  subfamilia: string;
  familia: string;
  id_promo: number;
  idweb: number;
  data_web: number;
  ctocif: string;
  priceList1WithTax: number;
};
