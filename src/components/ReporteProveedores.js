import React from 'react';

const ReporteProveedores = ({ proveedores }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold border-b pb-2">Reporte de Proveedores</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proveedor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Productos Suministrados</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {proveedores.map((proveedor, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{proveedor.nombre_proveedor}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <ul className="list-disc list-inside">
                    {proveedor.productos_suministrados.map((producto, pIndex) => (
                      <li key={pIndex}>
                        {producto.nombre} (Última compra: {new Date(producto.ultima_compra).toLocaleDateString()} - ${producto.precio_unitario?.toLocaleString()})
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
export default ReporteProveedores;