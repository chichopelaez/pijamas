import React from 'react';

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Producto</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoría</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product, index) => (
            <tr key={index} className={!product.activo ? 'bg-gray-50' : ''}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="font-medium text-gray-900">{product.nombre_producto}</div>
                <div className="text-sm text-gray-500">{product.descripcion?.substring(0, 30)}...</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {product.categoria}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${product.precio_unitario?.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                  ${product.stock_actual <= product.stock_minimo ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                  {product.stock_actual || 0}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button 
                  onClick={() => onEdit(product)}
                  className="text-blue-600 hover:text-blue-900 mr-2"
                >
                  Editar
                </button>
                <button 
                  onClick={() => onDelete(product.producto_id)}
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
export default ProductList;