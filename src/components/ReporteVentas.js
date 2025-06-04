import React from 'react';

const ReporteVentas = ({ ventas }) => {
  return (
    <div className="space-y-4 text-gray-200">
      <h3 className="text-lg font-semibold border-b border-gray-600 pb-2 text-gray-100">Reporte de Ventas</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Venta ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Fecha</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Cliente</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Productos</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
            {ventas.map((venta, index) => (
              <tr key={index} className="hover:bg-gray-700 transition-colors duration-200">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">{venta.venta_id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{new Date(venta.fecha_venta).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{venta.cliente_nombre}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">${venta.total_venta?.toLocaleString()}</td>
                <td className="px-6 py-4 text-sm text-gray-300">
                  <ul className="list-disc list-inside">
                    {venta.productos_vendidos.map((producto, pIndex) => (
                      <li key={pIndex}>
                        {producto.cantidad} x {producto.nombre} (${producto.subtotal?.toLocaleString()})
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
export default ReporteVentas;