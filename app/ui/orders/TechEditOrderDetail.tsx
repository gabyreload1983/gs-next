'use client';
import { Order } from '@/app/lib/definitions';

import { closeOrder, saveOrder } from '@/app/lib/actions';
import { useState } from 'react';

export default function TechEditOrderDetail({ order }: { order: Order }) {
  const [orderUpdate, setOrderUpdate] = useState(order);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>,
  ) => {
    setOrderUpdate((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <>
      <div className="py-3">
        <label className="font-bold" htmlFor="diagnosis">
          Diagnostico
        </label>
        <textarea
          id="diagnostico"
          defaultValue={order.diagnostico}
          className="w-full text-black"
          onChange={(e) => handleChange(e)}
        ></textarea>
      </div>
      <div className="flex items-center gap-3 py-3">
        <label htmlFor="cost">Costo</label>
        <span>$</span>
        <input
          className="w-28 text-black"
          id="costo"
          type="number"
          min={1}
          defaultValue={Number(order.costo).toFixed()}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="mt-3 flex gap-2">
        <button
          onClick={() => saveOrder(orderUpdate)}
          className="rounded-md bg-green-300 px-3 py-2 text-black hover:bg-green-400"
        >
          Guardar
        </button>
        <button
          onClick={() => closeOrder(orderUpdate)}
          className="rounded-md bg-sky-300 px-3 py-2 text-black hover:bg-sky-400"
        >
          Cerrar
        </button>
      </div>
    </>
  );
}
