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

  const inputClass = "w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all";
  const labelClass = "block text-sm font-medium text-gray-300 mb-1";

  return (
    <div className="space-y-6 text-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Nombre Producto*</label>
          <input
            name="nombre_producto"
            value={formData.nombre_producto}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>

        <div>
          <label className={labelClass}>Categoría*</label>
          <input
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Descripción</label>
        <textarea
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          rows={3}
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <label className={labelClass}>Unidad Medida*</label>
          <select
            name="unidad_medida"
            value={formData.unidad_medida}
            onChange={handleChange}
            className={inputClass}
            required
          >
            <option value="unidad">Unidad</option>
            <option value="kg">Kilogramo</option>
            <option value="litro">Litro</option>
            <option value="caja">Caja</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>Precio Unitario*</label>
          <input
            type="number"
            name="precio_unitario"
            value={formData.precio_unitario}
            onChange={handleChange}
            className={inputClass}
            required
            min="0"
            step="0.01"
          />
        </div>

        <div>
          <label className={labelClass}>Costo Unitario*</label>
          <input
            type="number"
            name="costo_unitario"
            value={formData.costo_unitario}
            onChange={handleChange}
            className={inputClass}
            required
            min="0"
            step="0.01"
          />
        </div>

        <div>
          <label className={labelClass}>Proveedor Principal</label>
          <input
            name="proveedor_principal"
            value={formData.proveedor_principal}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className={labelClass}>Stock Mínimo</label>
          <input
            type="number"
            name="stock_minimo"
            value={formData.stock_minimo}
            onChange={handleChange}
            className={inputClass}
            min="0"
          />
        </div>

        <div>
          <label className={labelClass}>Stock Máximo</label>
          <input
            type="number"
            name="stock_maximo"
            value={formData.stock_maximo}
            onChange={handleChange}
            className={inputClass}
            min="0"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="activo"
            checked={formData.activo}
            onChange={handleChange}
            className="h-4 w-4 text-purple-500 focus:ring-purple-500 border-gray-600 rounded bg-gray-700"
          />
          <label className="ml-2 block text-sm text-gray-300">Producto Activo</label>
        </div>
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <button 
          type="button"
          onClick={onCancel}
          className="px-6 py-2 text-gray-300 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300"
        >
          Cancelar
        </button>
        <button 
          type="button"
          onClick={() => onSave(formData)}
          className="px-6 py-2 text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg"
        >
          {product ? 'Actualizar' : 'Guardar'} Producto
        </button>
      </div>
    </div>
  );
};
export default ProductForm;