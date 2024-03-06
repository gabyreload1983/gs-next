import { getOrder } from '@/app/lib/data';
import {
  formatOrderNumber,
  getOrderDiagnosis,
  getOrderState,
  getOrderUbication,
} from '@/app/lib/utils';
import { getOrderTier } from '../../lib/utils';

export default function Order({ id }: { id: string }) {
  const nrocompro = formatOrderNumber(id);
  const order = getOrder(nrocompro);
  if (!order)
    return (
      <div>
        <h2>No se encontro Orden de reparacion</h2>
      </div>
    );

  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
      <div className="rounded-lg bg-slate-300 p-5">
        <div className="mb-3 border-2 p-3">
          <p>
            <strong>
              {order.nrocompro} - {order.ingresado.slice(0, 10)}
            </strong>
          </p>
          <p>
            <strong>
              {order.codigo} - {order.nombre}
            </strong>
          </p>
          <p>Telefono: {order.telefono}</p>
        </div>
        <div className="mb-3 border-2 p-3">
          <div className="flex items-center justify-between">
            <strong>{order.descart}</strong>
          </div>
          <div className="flex items-center justify-between pb-5">
            <strong>{order.accesorios}</strong>
          </div>
          <div className="flex items-center justify-between pb-5">
            {' '}
            <strong>Prioridad: </strong>
            <span className="rounded-xl bg-lime-500 p-2">
              {getOrderTier(order.prioridad)}
            </span>
          </div>
          <div className="flex items-center justify-between pb-5">
            {' '}
            <strong>Estado: </strong>
            <span className="rounded-xl bg-lime-500 p-2">
              {getOrderState(order.estado)}
            </span>
          </div>
          <div className="flex items-center justify-between pb-5">
            {' '}
            <strong>Diagnostico: </strong>
            <span className="rounded-xl bg-lime-500 p-2">
              {getOrderDiagnosis(order.diag)}
            </span>
          </div>
          <div className="flex items-center justify-between pb-5">
            {' '}
            <strong>Ubicacion: </strong>
            <span className="rounded-xl bg-lime-500 p-2">
              {getOrderUbication(order.ubicacion)}
            </span>
          </div>
          <p>
            {' '}
            <strong>Falla: </strong>
            {order.falla}
          </p>
        </div>
      </div>
      <div className="rounded-lg bg-slate-300 p-5">
        <div className="mb-3 border-2 p-3">
          <p>
            <strong>Diagnostico: </strong> {order.diagnostico}
          </p>
        </div>
        <div className="mb-3 border-2 p-3">
          <div className="flex justify-between">
            <span>Descripcion</span>
            <span>Precio</span>
          </div>
          {order.products.map((product) => (
            <div className="flex justify-between">
              <span>{product.descart.slice(0, 20)}</span>
              <span>$ {product.priceList1WithTax.toFixed()}</span>
            </div>
          ))}
          <div className="flex justify-between">
            <span>Mano de Obra</span>
            <span className="font-bold">${order.total?.toFixed()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
