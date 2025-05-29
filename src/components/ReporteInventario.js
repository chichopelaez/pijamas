import React from 'react';

const ReporteInventario = ({ inventario }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold border-b pb-2">Reporte de Inventario</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Producto</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoría</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock Actual</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock Mínimo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ubicación</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Última Actualización</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {inventario.map((item, index) => (
              <tr key={index} className={item.stock_actual <= item.stock_minimo ? 'bg-red-50' : ''}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.nombre}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.categoria}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.stock_actual}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.stock_minimo}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.ubicacion}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(item.fecha_ultima_actualizacion).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ReporteInventario;