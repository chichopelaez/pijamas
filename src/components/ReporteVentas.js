import React from 'react';

const ReporteVentas = ({ ventas }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold border-b pb-2">Reporte de Ventas</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Venta ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Productos</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {ventas.map((venta, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{venta.venta_id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(venta.fecha_venta).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{venta.cliente_nombre}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${venta.total_venta?.toLocaleString()}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
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