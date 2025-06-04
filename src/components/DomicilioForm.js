import React, { useState } from 'react';
import { initialClientes } from '../mock/clientes';
import { initialProductos } from '../mock/productos';

const DomicilioForm = ({ domicilio, onSave, onCancel }) => {
  const [formData, setFormData] = useState(domicilio || {
    domicilio_id: '',
    fecha_domicilio: new Date().toISOString().split('T')[0],
    cliente_id: '',
    direccion_entrega: '',
    ciudad_entrega: '',
    estado_domicilio: 'pendiente',
    responsable_entrega: '',
    contacto_receptor: '',
    telefono_contacto: '',
    observaciones: '',
    detalles: []
  });

  const [detalleActual, setDetalleActual] = useState({
    producto_id: '',
    cantidad_entregada: 1,
    observaciones_producto: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDetalleChange = (e) => {
    const { name, value } = e.target;
    setDetalleActual(prev => ({ ...prev, [name]: value }));
  };

  const agregarDetalle = () => {
    if (!detalleActual.producto_id) return;
    
    setFormData(prev => ({
      ...prev,
      detalles: [
        ...prev.detalles,
        {
          ...detalleActual,
          detalle_id: `DET-${Date.now()}`
        }
      ]
    }));
    
    setDetalleActual({
      producto_id: '',
      cantidad_entregada: 1,
      observaciones_producto: ''
    });
  };

  const eliminarDetalle = (detalleId) => {
    setFormData(prev => ({
      ...prev,
      detalles: prev.detalles.filter(d => d.detalle_id !== detalleId)
    }));
  };

  const inputClass = "w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all";
  const labelClass = "block text-sm font-medium text-gray-300 mb-1";
  const sectionTitleClass = "text-lg font-semibold border-b border-gray-600 pb-2 text-gray-100";

  return (
    <div className="space-y-6 text-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Cliente*</label>
          <select
            name="cliente_id"
            value={formData.cliente_id}
            onChange={handleChange}
            className={inputClass}
            required
          >
            <option value="">Seleccionar cliente</option>
            {initialClientes.map(cliente => (
              <option key={cliente.cedula} value={cliente.cedula}>
                {cliente.nombre} - {cliente.cedula}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass}>Estado*</label>
          <select
            name="estado_domicilio"
            value={formData.estado_domicilio}
            onChange={handleChange}
            className={inputClass}
            required
          >
            <option value="pendiente">Pendiente</option>
            <option value="en_ruta">En ruta</option>
            <option value="entregado">Entregado</option>
            <option value="cancelado">Cancelado</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Fecha Domicilio</label>
          <input
            type="date"
            name="fecha_domicilio"
            value={formData.fecha_domicilio}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Responsable Entrega*</label>
          <input
            name="responsable_entrega"
            value={formData.responsable_entrega}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Dirección Entrega*</label>
          <input
            name="direccion_entrega"
            value={formData.direccion_entrega}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>

        <div>
          <label className={labelClass}>Ciudad Entrega*</label>
          <input
            name="ciudad_entrega"
            value={formData.ciudad_entrega}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Contacto Receptor</label>
          <input
            name="contacto_receptor"
            value={formData.contacto_receptor}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Teléfono Contacto</label>
          <input
            name="telefono_contacto"
            value={formData.telefono_contacto}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Observaciones</label>
        <textarea
          name="observaciones"
          value={formData.observaciones}
          onChange={handleChange}
          rows={3}
          className={inputClass}
        />
      </div>

      <div className="border-t border-gray-700 pt-4">
        <h3 className={sectionTitleClass}>Productos a Entregar</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className={labelClass}>Producto*</label>
            <select
              name="producto_id"
              value={detalleActual.producto_id}
              onChange={handleDetalleChange}
              className={inputClass}
            >
              <option value="">Seleccionar producto</option>
              {initialProductos.map(producto => (
                <option key={producto.producto_id} value={producto.producto_id}>
                  {producto.nombre_producto}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClass}>Cantidad</label>
            <input
              type="number"
              name="cantidad_entregada"
              value={detalleActual.cantidad_entregada}
              onChange={handleDetalleChange}
              min="1"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Observaciones</label>
            <input
              name="observaciones_producto"
              value={detalleActual.observaciones_producto}
              onChange={handleDetalleChange}
              className={inputClass}
            />
          </div>

          <div className="flex items-end">
            <button
              onClick={agregarDetalle}
              className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg"
            >
              Agregar
            </button>
          </div>
        </div>

        {formData.detalles.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Producto</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Cantidad</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Observaciones</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {formData.detalles.map((detalle, index) => {
                  const producto = initialProductos.find(p => p.producto_id === detalle.producto_id);
                  return (
                    <tr key={index} className="hover:bg-gray-700 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap text-gray-100">
                        {producto?.nombre_producto || 'Producto no encontrado'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                        {detalle.cantidad_entregada}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                        {detalle.observaciones_producto}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button 
                          onClick={() => eliminarDetalle(detalle.detalle_id)}
                          className="text-red-400 hover:text-red-300 transition-colors duration-200"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
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
          {domicilio ? 'Actualizar' : 'Guardar'} Domicilio
        </button>
      </div>
    </div>
  );
};
export default DomicilioForm;