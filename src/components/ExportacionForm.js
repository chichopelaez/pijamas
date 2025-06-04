import React, { useState } from 'react';
import { initialClientes } from '../mock/clientes';
import { initialProductos } from '../mock/productos';

const ExportacionForm = ({ exportacion, onSave, onCancel }) => {
  const [formData, setFormData] = useState(exportacion || {
    exportacion_id: '',
    fecha_exportacion: new Date().toISOString().split('T')[0],
    cliente_id: '',
    pais_destino: '',
    direccion_destino: '',
    incoterm: 'FOB',
    medio_transporte: 'marítimo',
    responsable_exportacion: '',
    numero_guia: '',
    documentacion_adjunta: false,
    estado_exportacion: 'pendiente',
    observaciones: '',
    detalles: []
  });

  const [detalleActual, setDetalleActual] = useState({
    producto_id: '',
    cantidad_exportada: 1,
    valor_unitario_usd: 0
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleDetalleChange = (e) => {
    const { name, value } = e.target;
    const newDetalle = { 
      ...detalleActual, 
      [name]: name.includes('valor') ? parseFloat(value) || 0 : value 
    };
    setDetalleActual(newDetalle);
  };

  const agregarDetalle = () => {
    if (!detalleActual.producto_id) return;
    
    const subtotal = detalleActual.cantidad_exportada * detalleActual.valor_unitario_usd;
    
    setFormData(prev => ({
      ...prev,
      detalles: [
        ...prev.detalles,
        {
          ...detalleActual,
          detalle_id: `DET-${Date.now()}`,
          subtotal_usd: subtotal
        }
      ]
    }));
    
    setDetalleActual({
      producto_id: '',
      cantidad_exportada: 1,
      valor_unitario_usd: 0
    });
  };

  const eliminarDetalle = (detalleId) => {
    setFormData(prev => ({
      ...prev,
      detalles: prev.detalles.filter(d => d.detalle_id !== detalleId)
    }));
  };

  const calcularTotal = () => {
    return formData.detalles.reduce((sum, detalle) => sum + detalle.subtotal_usd, 0);
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
          <label className={labelClass}>País Destino*</label>
          <input
            name="pais_destino"
            value={formData.pais_destino}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className={labelClass}>Fecha Exportación</label>
          <input
            type="date"
            name="fecha_exportacion"
            value={formData.fecha_exportacion}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Incoterm*</label>
          <select
            name="incoterm"
            value={formData.incoterm}
            onChange={handleChange}
            className={inputClass}
            required
          >
            <option value="EXW">EXW (Ex Works)</option>
            <option value="FOB">FOB (Free On Board)</option>
            <option value="CFR">CFR (Cost and Freight)</option>
            <option value="CIF">CIF (Cost, Insurance and Freight)</option>
            <option value="DAP">DAP (Delivered At Place)</option>
            <option value="DDP">DDP (Delivered Duty Paid)</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>Medio Transporte*</label>
          <select
            name="medio_transporte"
            value={formData.medio_transporte}
            onChange={handleChange}
            className={inputClass}
            required
          >
            <option value="marítimo">Marítimo</option>
            <option value="aéreo">Aéreo</option>
            <option value="terrestre">Terrestre</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Dirección Destino*</label>
        <input
          name="direccion_destino"
          value={formData.direccion_destino}
          onChange={handleChange}
          className={inputClass}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className={labelClass}>Responsable*</label>
          <input
            name="responsable_exportacion"
            value={formData.responsable_exportacion}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>

        <div>
          <label className={labelClass}>N° Guía</label>
          <input
            name="numero_guia"
            value={formData.numero_guia}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Estado*</label>
          <select
            name="estado_exportacion"
            value={formData.estado_exportacion}
            onChange={handleChange}
            className={inputClass}
            required
          >
            <option value="pendiente">Pendiente</option>
            <option value="en tránsito">En tránsito</option>
            <option value="entregado">Entregado</option>
            <option value="cancelado">Cancelado</option>
          </select>
        </div>
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
        <h3 className={sectionTitleClass}>Productos a Exportar</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
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
              name="cantidad_exportada"
              value={detalleActual.cantidad_exportada}
              onChange={handleDetalleChange}
              min="1"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Valor Unitario (USD)</label>
            <input
              type="number"
              name="valor_unitario_usd"
              value={detalleActual.valor_unitario_usd}
              onChange={handleDetalleChange}
              min="0"
              step="0.01"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Subtotal (USD)</label>
            <input
              type="number"
              value={(detalleActual.cantidad_exportada * detalleActual.valor_unitario_usd).toFixed(2)}
              disabled
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Valor Unitario (USD)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Subtotal (USD)</th>
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
                        {detalle.cantidad_exportada}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                        ${detalle.valor_unitario_usd?.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                        ${detalle.subtotal_usd?.toLocaleString(undefined, { minimumFractionDigits: 2 })}
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
              <tfoot>
                <tr>
                  <td colSpan="3" className="px-6 py-4 text-right font-semibold text-gray-100">Total USD:</td>
                  <td className="px-6 py-4 font-semibold text-gray-100">
                    ${calcularTotal().toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </td>
                  <td></td>
                </tr>
              </tfoot>
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
          {exportacion ? 'Actualizar' : 'Guardar'} Exportación
        </button>
      </div>
    </div>
  );
};
export default ExportacionForm;