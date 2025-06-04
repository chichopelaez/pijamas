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

  const inputClass = "w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all";
  const labelClass = "block text-sm font-medium text-gray-300 mb-1";
  const sectionTitleClass = "text-lg font-semibold border-b border-gray-600 pb-2 text-gray-100";

  return (
    <div className="space-y-6 text-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sección Información Básica */}
        <div className="space-y-4">
          <h3 className={sectionTitleClass}>Información Básica</h3>
          
          <div>
            <label className={labelClass}>Nombre Legal*</label>
            <input
              name="nombre_legal"
              value={formData.nombre_legal}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label className={labelClass}>Nombre Comercial</label>
            <input
              name="nombre_comercial"
              value={formData.nombre_comercial}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Tipo de Persona*</label>
            <select
              name="tipo_persona"
              value={formData.tipo_persona}
              onChange={handleChange}
              className={inputClass}
              required
            >
              <option value="natural">Natural</option>
              <option value="juridica">Jurídica</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Identificación Fiscal*</label>
            <input
              name="identificacion_fiscal"
              value={formData.identificacion_fiscal}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label className={labelClass}>Fecha de Registro</label>
            <input
              type="date"
              name="fecha_registro"
              value={formData.fecha_registro}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        {/* Sección Ubicación */}
        <div className="space-y-4">
          <h3 className={sectionTitleClass}>Ubicación</h3>
          
          <div>
            <label className={labelClass}>Dirección</label>
            <input
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Ciudad</label>
            <input
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>País</label>
            <input
              name="pais"
              value={formData.pais}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* Sección Contacto */}
      <div className="space-y-4">
        <h3 className={sectionTitleClass}>Contacto</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Teléfono</label>
            <input
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Página Web</label>
            <input
              name="pagina_web"
              value={formData.pagina_web}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <label className={labelClass}>Contacto Principal</label>
            <input
              name="contacto_nombre"
              value={formData.contacto_nombre}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Cargo</label>
            <input
              name="contacto_cargo"
              value={formData.contacto_cargo}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Teléfono Contacto</label>
            <input
              name="contacto_telefono"
              value={formData.contacto_telefono}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Email Contacto</label>
            <input
              type="email"
              name="contacto_email"
              value={formData.contacto_email}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* Sección Productos y Categoría */}
      <div className="space-y-4">
        <h3 className={sectionTitleClass}>Productos/Servicios</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Productos/Servicios</label>
            <textarea
              name="productos_servicios"
              value={formData.productos_servicios}
              onChange={handleChange}
              rows={3}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Categoría</label>
            <select
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
              className={inputClass}
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
        <h3 className={sectionTitleClass}>Información Bancaria</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Banco</label>
            <input
              name="banco"
              value={formData.banco}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Tipo de Cuenta</label>
            <select
              name="tipo_cuenta"
              value={formData.tipo_cuenta}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="corriente">Corriente</option>
              <option value="ahorros">Ahorros</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Número de Cuenta</label>
            <input
              name="numero_cuenta"
              value={formData.numero_cuenta}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Titular de la Cuenta</label>
            <input
              name="titular_cuenta"
              value={formData.titular_cuenta}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Código SWIFT/IBAN</label>
            <input
              name="codigo_swift_iban"
              value={formData.codigo_swift_iban}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Condiciones de Pago</label>
            <select
              name="condiciones_pago"
              value={formData.condiciones_pago}
              onChange={handleChange}
              className={inputClass}
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
        <h3 className={sectionTitleClass}>Información Adicional</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Certificaciones</label>
            <textarea
              name="certificaciones"
              value={formData.certificaciones}
              onChange={handleChange}
              rows={2}
              className={inputClass}
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="documentacion_adjunta"
              checked={formData.documentacion_adjunta}
              onChange={handleChange}
              className="h-4 w-4 text-purple-500 focus:ring-purple-500 border-gray-600 rounded bg-gray-700"
            />
            <label className="ml-2 block text-sm text-gray-300">Documentación Adjunta</label>
          </div>

          <div className="md:col-span-2">
            <label className={labelClass}>Comentarios</label>
            <textarea
              name="comentarios"
              value={formData.comentarios}
              onChange={handleChange}
              rows={3}
              className={inputClass}
            />
          </div>
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
          {proveedor ? 'Actualizar' : 'Guardar'} Proveedor
        </button>
      </div>
    </div>
  );
};

export default ProveedorForm;