import React from 'react';

const ClienteList = ({ clientes, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Nombre</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Cédula</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Correo</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-gray-800 divide-y divide-gray-700">
          {clientes.map((cliente, index) => (
            <tr key={index} className="hover:bg-gray-700 transition-colors duration-200">
              <td className="px-6 py-4 whitespace-nowrap text-gray-100">{cliente.nombre}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-300">{cliente.cedula}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-300">{cliente.correo}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button 
                  onClick={() => onEdit(cliente)}
                  className="text-blue-400 hover:text-blue-300 mr-4 transition-colors duration-200"
                >
                  Editar
                </button>
                <button 
                  onClick={() => onDelete(cliente.cedula)}
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
export default ClienteList;