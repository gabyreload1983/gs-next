export type User = {
  _id: string;
  email: string;
  code_technical: string;
  first_name: string;
  last_name: string;
  role: string;
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

export type Product = {
  codigo: string;
  descrip: string;
  stockd00: string;
  reserd00: string;
  entrad00: string;
  invend00: string;
  fechad00: string;
  stkval: string;
  stkfec: string;
  stockd01: string;
  reserd01: string;
  invend01: string;
  fechad01: string;
  stockd02: string;
  reserd02: string;
  invend02: string;
  fechad02: string;
  stockd03: string;
  reserd03: string;
  invend03: string;
  fechad03: string;
  stockd04: string;
  reserd04: string;
  invend04: string;
  fechad04: string;
  stockd05: string;
  reserd05: string;
  invend05: string;
  fechad05: string;
  stockd06: string;
  reserd06: string;
  invend06: string;
  fechad06: string;
  stockd07: string;
  reserd07: string;
  invend07: string;
  fechad07: string;
  stockd08: string;
  reserd08: string;
  invend08: string;
  fechad08: string;
  stockd09: string;
  reserd09: string;
  invend09: string;
  fechad09: string;
  stockd10: string;
  reserd10: string;
  invend10: string;
  fechad10: string;
  cdespa1: string;
  ndespa1: string;
  cdespa2: string;
  ndespa2: string;
  cdespa3: string;
  ndespa3: string;
  minimo: number;
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
  garantia: number;
  estado: string;
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
