import React from 'react';

const ReporteClientes = ({ clientes }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold border-b pb-2">Reporte de Clientes</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Compras</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Historial de Compras</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {clientes.map((cliente, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cliente.nombre_cliente}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${cliente.total_compras?.toLocaleString()}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <ul className="list-disc list-inside">
                    {cliente.compras.map((compra, cIndex) => (
                      <li key={cIndex}>
                        Venta ID: {compra.venta_id} (Fecha: {new Date(compra.fecha).toLocaleDateString()} - Total: ${compra.total?.toLocaleString()})
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ReporteClientes;