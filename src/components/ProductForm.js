import React, { useState } from 'react';

const ProductForm = ({ product, onSave, onCancel }) => {
  const [formData, setFormData] = useState(product || {
    producto_id: '',
    nombre_producto: '',
    descripcion: '',
    categoria: '',
    unidad_medida: 'unidad',
    precio_unitario: 0,
    costo_unitario: 0,
    stock_minimo: 0,
    stock_maximo: 0,
    proveedor_principal: '',
    activo: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : type === 'number' ? parseFloat(value) : value 
    }));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Producto*</label>
          <input
            name="nombre_producto"
            value={formData.nombre_producto}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Categoría*</label>
          <input
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
        <textarea
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          rows={3}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Unidad Medida*</label>
          <select
            name="unidad_medida"
            value={formData.unidad_medida}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="unidad">Unidad</option>
            <option value="kg">Kilogramo</option>
            <option value="litro">Litro</option>
            <option value="caja">Caja</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Precio Unitario*</label>
          <input
            type="number"
            name="precio_unitario"
            value={formData.precio_unitario}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
            min="0"
            step="0.01"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Costo Unitario*</label>
          <input
            type="number"
            name="costo_unitario"
            value={formData.costo_unitario}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
            min="0"
            step="0.01"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Proveedor Principal</label>
          <input
            name="proveedor_principal"
            value={formData.proveedor_principal}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Stock Mínimo</label>
          <input
            type="number"
            name="stock_minimo"
            value={formData.stock_minimo}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Stock Máximo</label>
          <input
            type="number"
            name="stock_maximo"
            value={formData.stock_maximo}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            min="0"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="activo"
            checked={formData.activo}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-gray-700">Producto Activo</label>
        </div>
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <button 
          type="button"
          onClick={onCancel}
          className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Cancelar
        </button>
        <button 
          type="button"
          onClick={() => onSave(formData)}
          className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {product ? 'Actualizar' : 'Guardar'} Producto
        </button>
      </div>
    </div>
  );
};
export default ProductForm;