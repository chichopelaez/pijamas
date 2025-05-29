import React from 'react';

const EstadisticasProductosVendidos = ({ productos }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold border-b pb-2">Productos Más Vendidos</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Producto</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unidades Vendidas</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ingresos Generados</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {productos.map((producto, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{producto.nombre}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{producto.unidades_vendidas}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${producto.ingresos_generados?.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default EstadisticasProductosVendidos;