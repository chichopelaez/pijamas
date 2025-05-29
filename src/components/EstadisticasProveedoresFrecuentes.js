import React from 'react';

const EstadisticasProveedoresFrecuentes = ({ proveedores }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold border-b pb-2">Proveedores Frecuentes</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proveedor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Órdenes de Compra</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Comprado</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {proveedores.map((proveedor, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{proveedor.nombre}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{proveedor.ordenes_compras}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${proveedor.total_comprado?.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default EstadisticasProveedoresFrecuentes;