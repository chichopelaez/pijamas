import React from 'react';

const PedidoList = ({ pedidos, onEdit, onDelete }) => {
  const getEstadoColor = (estado) => {
    switch(estado) {
      case 'borrador': return 'bg-gray-700 text-gray-300';
      case 'enviado': return 'bg-blue-800 text-blue-200';
      case 'aprobado': return 'bg-yellow-800 text-yellow-200';
      case 'parcial': return 'bg-orange-800 text-orange-200';
      case 'completado': return 'bg-green-800 text-green-200';
      case 'cancelado': return 'bg-red-800 text-red-200';
      default: return 'bg-gray-700 text-gray-300';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">N° Pedido</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Proveedor</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Fecha Pedido</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Estado</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Total</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-gray-800 divide-y divide-gray-700">
          {pedidos.map((pedido, index) => (
            <tr key={index} className="hover:bg-gray-700 transition-colors duration-200">
              <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-100">
                {pedido.pedido_id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                {pedido.proveedor_nombre}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                {new Date(pedido.fecha_pedido).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getEstadoColor(pedido.estado_pedido)}`}>
                  {pedido.estado_pedido}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                ${pedido.total?.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button 
                  onClick={() => onEdit(pedido)}
                  className="text-blue-400 hover:text-blue-300 mr-4 transition-colors duration-200"
                >
                  Editar
                </button>
                <button 
                  onClick={() => onDelete(pedido.pedido_id)}
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
export default PedidoList;