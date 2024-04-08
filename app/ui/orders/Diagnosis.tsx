import { Order } from '@/app/lib/definitions';

export default function Diagnosis({ order }: { order: Order }) {
  return (
    <>
      <div className="py-3">
        <label className="font-bold" htmlFor="diagnostico">
          Diagnostico
        </label>
        <textarea
          id="diagnostico"
          defaultValue={order.diagnostico}
          className="w-full text-black"
          disabled
        ></textarea>
      </div>
    </>
  );
}
