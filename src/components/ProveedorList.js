import React from 'react';

const ProveedorList = ({ proveedores, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Nombre Comercial</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Identificación</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Contacto</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Categoría</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-gray-800 divide-y divide-gray-700">
          {proveedores.map((proveedor, index) => (
            <tr key={index} className="hover:bg-gray-700 transition-colors duration-200">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="font-medium text-gray-100">{proveedor.nombre_comercial || proveedor.nombre_legal}</div>
                <div className="text-sm text-gray-400">{proveedor.productos_servicios?.substring(0, 30)}...</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {proveedor.identificacion_fiscal}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-100">{proveedor.contacto_nombre}</div>
                <div className="text-sm text-gray-400">{proveedor.contacto_email}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-800 text-purple-200">
                  {proveedor.categoria.replace('_', ' ')}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button 
                  onClick={() => onEdit(proveedor)}
                  className="text-blue-400 hover:text-blue-300 mr-4 transition-colors duration-200"
                >
                  Editar
                </button>
                <button 
                  onClick={() => onDelete(proveedor.proveedor_id)}
                  className="text-red-400 hover:text-red-300 transition-colors duration-200"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProveedorList;