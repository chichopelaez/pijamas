import React, { useState } from 'react';

const ClienteForm = ({ cliente, onSave, onCancel }) => {
  const [formData, setFormData] = useState(cliente || {
    nombre: '',
    cedula: '',
    correo: '',
    direccion: '',
    ciudad: '',
    pais: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Nombre
          <span className="text-red-500">*</span>
        </label>
        <input
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Cédula
            <span className="text-red-500">*</span>
          </label>
          <input
            name="cedula"
            value={formData.cedula}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Correo
            <span className="text-red-500">*</span>
          </label>
          <input
            name="correo"
            type="email"
            value={formData.correo}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Dirección</label>
        <input
          name="direccion"
          value={formData.direccion}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Ciudad</label>
          <input
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">País</label>
          <input
            name="pais"
            value={formData.pais}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
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
          Guardar Cliente
        </button>
      </div>
    </div>
  );
};

export default ClienteForm;

// DONE