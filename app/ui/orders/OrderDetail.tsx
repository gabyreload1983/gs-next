import { Order } from '@/app/lib/definitions';
import {
  getOrderDiagnosis,
  getOrderState,
  getOrderTier,
  getOrderTierBackground,
  getOrderUbication,
} from '@/app/lib/utils';

export default function OrderDetail({ order }: { order: Order }) {
  return (
    <div className="rounded-lg bg-gray-700 p-2">
      <div className="mb-3 p-3">
        <p
          className={`${getOrderTierBackground(
            order.prioridad,
          )} mb-2 rounded-lg px-2 py-1 text-center text-xs text-gray-950`}
        >
          Tier {getOrderTier(order.prioridad)}
        </p>
        <div className=" flex items-center justify-between">
          <strong className="text-lg">{order.nrocompro}</strong>
        </div>
        <p>Fecha: {order.ingresado.slice(0, 10)}</p>
        <p className="font-semibold">
          {order.codigo} - {order.nombre}
        </p>
        <p className="mb-2">Telefono: {order.telefono}</p>
        <div className="mb-3 flex flex-col items-center justify-between rounded-lg bg-gray-900 py-2">
          <p>{order.descart}</p>
          <p>{order.accesorios}</p>
        </div>
        <div className="mb-5 grid grid-cols-3 gap-2 text-center text-xs">
          <div className="flex flex-col items-center rounded-lg bg-amber-100 py-2 text-gray-950">
            <p>Estado</p>
            <p> {getOrderState(order.estado)}</p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-amber-100 py-2 text-gray-950">
            <p>Diagnostico</p>
            <p> {getOrderDiagnosis(order.diag)}</p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-amber-100 py-2 text-gray-950">
            <p>Ubicacion</p>
            <p> {getOrderUbication(order.ubicacion)}</p>
          </div>
        </div>

        <p>
          {' '}
          <strong>Falla: </strong>
          {order.falla}
        </p>
        <p>
          <strong>Diagnostico: </strong> {order.diagnostico}
        </p>
      </div>
    </div>
  );
}
