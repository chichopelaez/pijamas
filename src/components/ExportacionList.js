import React from 'react';

const ExportacionList = ({ exportaciones, onEdit, onDelete }) => {
  const getEstadoColor = (estado) => {
    switch(estado) {
      case 'pendiente': return 'bg-yellow-800 text-yellow-200';
      case 'en tránsito': return 'bg-blue-800 text-blue-200';
      case 'entregado': return 'bg-green-800 text-green-200';
      case 'cancelado': return 'bg-red-800 text-red-200';
      default: return 'bg-gray-700 text-gray-300';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">N° Exportación</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Cliente</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Fecha</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Destino</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Incoterm</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Estado</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Total USD</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-gray-800 divide-y divide-gray-700">
          {exportaciones.map((exportacion, index) => (
            <tr key={index} className="hover:bg-gray-700 transition-colors duration-200">
              <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-100">
                {exportacion.exportacion_id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                {exportacion.cliente_nombre}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                {new Date(exportacion.fecha_exportacion).toLocaleDateString()}
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-100">{exportacion.pais_destino}</div>
                <div className="text-sm text-gray-400">{exportacion.direccion_destino}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                {exportacion.incoterm}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getEstadoColor(exportacion.estado_exportacion)}`}>
                  {exportacion.estado_exportacion}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                ${exportacion.total?.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button 
                  onClick={() => onEdit(exportacion)}
                  className="text-blue-400 hover:text-blue-300 mr-4 transition-colors duration-200"
                >
                  Editar
                </button>
                <button 
                  onClick={() => onDelete(exportacion.exportacion_id)}
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
export default ExportacionList;