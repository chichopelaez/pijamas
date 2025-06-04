import React from 'react';

const ReporteInventario = ({ inventario }) => {
  return (
    <div className="space-y-4 text-gray-200">
      <h3 className="text-lg font-semibold border-b border-gray-600 pb-2 text-gray-100">Reporte de Inventario</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Producto</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Categoría</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Stock Actual</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Stock Mínimo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Ubicación</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Última Actualización</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
            {inventario.map((item, index) => (
              <tr key={index} className={`hover:bg-gray-700 transition-colors duration-200 ${item.stock_actual <= item.stock_minimo ? 'bg-red-900 bg-opacity-20' : ''}`}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">{item.nombre}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.categoria}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.stock_actual}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.stock_minimo}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.ubicacion}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{new Date(item.fecha_ultima_actualizacion).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ReporteInventario;