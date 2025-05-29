import React, { useState } from 'react';

const ProveedorForm = ({ proveedor, onSave, onCancel }) => {
  const [formData, setFormData] = useState(proveedor || {
    proveedor_id: '',
    nombre_legal: '',
    nombre_comercial: '',
    tipo_persona: 'natural',
    identificacion_fiscal: '',
    fecha_registro: new Date().toISOString().split('T')[0],
    direccion: '',
    ciudad: '',
    pais: '',
    telefono: '',
    email: '',
    pagina_web: '',
    contacto_nombre: '',
    contacto_cargo: '',
    contacto_telefono: '',
    contacto_email: '',
    productos_servicios: '',
    categoria: 'materia_prima',
    banco: '',
    tipo_cuenta: 'corriente',
    numero_cuenta: '',
    titular_cuenta: '',
    codigo_swift_iban: '',
    condiciones_pago: '30_dias',
    certificaciones: '',
    documentacion_adjunta: false,
    comentarios: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sección Información Básica */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold border-b pb-2">Información Básica</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Legal*</label>
            <input
              name="nombre_legal"
              value={formData.nombre_legal}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Comercial</label>
            <input
              name="nombre_comercial"
              value={formData.nombre_comercial}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Persona*</label>
            <select
              name="tipo_persona"
              value={formData.tipo_persona}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="natural">Natural</option>
              <option value="juridica">Jurídica</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Identificación Fiscal*</label>
            <input
              name="identificacion_fiscal"
              value={formData.identificacion_fiscal}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Registro</label>
            <input
              type="date"
              name="fecha_registro"
              value={formData.fecha_registro}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>

        {/* Sección Ubicación */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold border-b pb-2">Ubicación</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Dirección</label>
            <input
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ciudad</label>
            <input
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">País</label>
            <input
              name="pais"
              value={formData.pais}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Sección Contacto */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold border-b pb-2">Contacto</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
            <input
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Página Web</label>
            <input
              name="pagina_web"
              value={formData.pagina_web}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contacto Principal</label>
            <input
              name="contacto_nombre"
              value={formData.contacto_nombre}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cargo</label>
            <input
              name="contacto_cargo"
              value={formData.contacto_cargo}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono Contacto</label>
            <input
              name="contacto_telefono"
              value={formData.contacto_telefono}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Contacto</label>
            <input
              type="email"
              name="contacto_email"
              value={formData.contacto_email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Sección Productos y Categoría */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold border-b pb-2">Productos/Servicios</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Productos/Servicios</label>
            <textarea
              name="productos_servicios"
              value={formData.productos_servicios}
              onChange={handleChange}
              rows={3}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
            <select
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="materia_prima">Materia Prima</option>
              <option value="logistica">Logística</option>
              <option value="tecnologia">Tecnología</option>
              <option value="servicios">Servicios</option>
              <option value="otros">Otros</option>
            </select>
          </div>
        </div>
      </div>

      {/* Sección Bancaria */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold border-b pb-2">Información Bancaria</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Banco</label>
            <input
              name="banco"
              value={formData.banco}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Cuenta</label>
            <select
              name="tipo_cuenta"
              value={formData.tipo_cuenta}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="corriente">Corriente</option>
              <option value="ahorros">Ahorros</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Número de Cuenta</label>
            <input
              name="numero_cuenta"
              value={formData.numero_cuenta}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Titular de la Cuenta</label>
            <input
              name="titular_cuenta"
              value={formData.titular_cuenta}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Código SWIFT/IBAN</label>
            <input
              name="codigo_swift_iban"
              value={formData.codigo_swift_iban}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Condiciones de Pago</label>
            <select
              name="condiciones_pago"
              value={formData.condiciones_pago}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="30_dias">30 días</option>
              <option value="15_dias">15 días</option>
              <option value="anticipado">Anticipado</option>
              <option value="contra_entrega">Contra entrega</option>
            </select>
          </div>
        </div>
      </div>

      {/* Sección Adicional */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold border-b pb-2">Información Adicional</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Certificaciones</label>
            <textarea
              name="certificaciones"
              value={formData.certificaciones}
              onChange={handleChange}
              rows={2}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="documentacion_adjunta"
              checked={formData.documentacion_adjunta}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-700">Documentación Adjunta</label>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Comentarios</label>
            <textarea
              name="comentarios"
              value={formData.comentarios}
              onChange={handleChange}
              rows={3}
              className="w-full p-2 border rounded-md"
            />
          </div>
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
          {proveedor ? 'Actualizar' : 'Guardar'} Proveedor
        </button>
      </div>
    </div>
  );
};

export default ProveedorForm;