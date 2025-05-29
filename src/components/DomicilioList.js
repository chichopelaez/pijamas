import React from 'react';

const DomicilioList = ({ domicilios, onEdit, onDelete }) => {
  const getEstadoColor = (estado) => {
    switch(estado) {
      case 'pendiente': return 'bg-yellow-100 text-yellow-800';
      case 'en_ruta': return 'bg-blue-100 text-blue-800';
      case 'entregado': return 'bg-green-100 text-green-800';
      case 'cancelado': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">N° Domicilio</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dirección</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {domicilios.map((domicilio, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap font-medium">
                {domicilio.domicilio_id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {domicilio.cliente_nombre}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {new Date(domicilio.fecha_domicilio).toLocaleDateString()}
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">{domicilio.direccion_entrega}</div>
                <div className="text-sm text-gray-500">{domicilio.ciudad_entrega}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getEstadoColor(domicilio.estado_domicilio)}`}>
                  {domicilio.estado_domicilio}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button 
                  onClick={() => onEdit(domicilio)}
                  className="text-blue-600 hover:text-blue-900 mr-2"
                >
                  Editar
                </button>
                <button 
                  onClick={() => onDelete(domicilio.domicilio_id)}
                  className="text-red-600 hover:text-red-900"
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
export default DomicilioList;