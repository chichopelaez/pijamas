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
    <div className="space-y-6 text-gray-200">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Nombre
          <span className="text-red-400">*</span>
        </label>
        <input
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Cédula
            <span className="text-red-400">*</span>
          </label>
          <input
            name="cedula"
            value={formData.cedula}
            onChange={handleChange}
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Correo
            <span className="text-red-400">*</span>
          </label>
          <input
            name="correo"
            type="email"
            value={formData.correo}
            onChange={handleChange}
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Dirección</label>
        <input
          name="direccion"
          value={formData.direccion}
          onChange={handleChange}
          className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Ciudad</label>
          <input
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">País</label>
          <input
            name="pais"
            value={formData.pais}
            onChange={handleChange}
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
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
          Guardar Cliente
        </button>
      </div>
    </div>
  );
};

export default ClienteForm;