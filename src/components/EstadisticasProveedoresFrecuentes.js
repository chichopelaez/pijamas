import React from 'react';

const EstadisticasProveedoresFrecuentes = ({ proveedores }) => {
  return (
    <div className="space-y-4 text-gray-200">
      <h3 className="text-lg font-semibold border-b border-gray-600 pb-2 text-gray-100">Proveedores Frecuentes</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Proveedor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Órdenes de Compra</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Total Comprado</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
            {proveedores.map((proveedor, index) => (
              <tr key={index} className="hover:bg-gray-700 transition-colors duration-200">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">{proveedor.nombre}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{proveedor.ordenes_compras}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">${proveedor.total_comprado?.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default EstadisticasProveedoresFrecuentes;