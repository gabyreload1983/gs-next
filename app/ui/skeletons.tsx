export default function DashboardSkeleton() {
  return (
    <>
      <div className={`rounded-xl bg-gray-100 p-2 shadow-sm`}>
        <p className="text-center text-3xl text-black">WAIT...</p>
      </div>
    </>
  );
}
export function OrdersTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className=" md:hidden">
            <div className="mb-2 w-full rounded-md border-2 border-lime-600 bg-white p-4">
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <div className="mb-2 flex items-center">
                    <p></p>
                  </div>
                  <p className="text-sm text-gray-500"></p>
                </div>
              </div>
              <div className="flex w-full items-center justify-between pt-4">
                <div>
                  <p className="text-xl font-medium">Prioridad:</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Nº Orden
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Cliente
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Tier
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Fecha
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                <td className="h-10 whitespace-nowrap px-3 py-3"></td>
                <td className="h-10 whitespace-nowrap px-3 py-3"></td>
                <td className="h-10 whitespace-nowrap px-3 py-3"></td>
                <td className="h-10 whitespace-nowrap px-3 py-3"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
