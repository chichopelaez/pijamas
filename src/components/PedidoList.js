import React from 'react';

const PedidoList = ({ pedidos, onEdit, onDelete }) => {
  const getEstadoColor = (estado) => {
    switch(estado) {
      case 'borrador': return 'bg-gray-100 text-gray-800';
      case 'enviado': return 'bg-blue-100 text-blue-800';
      case 'aprobado': return 'bg-yellow-100 text-yellow-800';
      case 'parcial': return 'bg-orange-100 text-orange-800';
      case 'completado': return 'bg-green-100 text-green-800';
      case 'cancelado': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">N° Pedido</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proveedor</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha Pedido</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {pedidos.map((pedido, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap font-medium">
                {pedido.pedido_id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {pedido.proveedor_nombre}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {new Date(pedido.fecha_pedido).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getEstadoColor(pedido.estado_pedido)}`}>
                  {pedido.estado_pedido}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                ${pedido.total?.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button 
                  onClick={() => onEdit(pedido)}
                  className="text-blue-600 hover:text-blue-900 mr-2"
                >
                  Editar
                </button>
                <button 
                  onClick={() => onDelete(pedido.pedido_id)}
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
export default PedidoList;