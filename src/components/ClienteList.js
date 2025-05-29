const ClienteList = ({ clientes, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cédula</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Correo</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {clientes.map((cliente, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{cliente.nombre}</td>
              <td className="px-6 py-4 whitespace-nowrap">{cliente.cedula}</td>
              <td className="px-6 py-4 whitespace-nowrap">{cliente.correo}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button 
                  onClick={() => onEdit(cliente)}
                  className="text-blue-600 hover:text-blue-900 mr-2"
                >
                  Editar
                </button>
                <button 
                  onClick={() => onDelete(cliente.cedula)}
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
export default ClienteList;