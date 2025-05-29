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

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Cliente*</label>
          <select
            name="cliente_id"
            value={formData.cliente_id}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
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
          <label className="block text-sm font-medium text-gray-700 mb-1">País Destino*</label>
          <input
            name="pais_destino"
            value={formData.pais_destino}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Fecha Exportación</label>
          <input
            type="date"
            name="fecha_exportacion"
            value={formData.fecha_exportacion}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Incoterm*</label>
          <select
            name="incoterm"
            value={formData.incoterm}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Medio Transporte*</label>
          <select
            name="medio_transporte"
            value={formData.medio_transporte}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="marítimo">Marítimo</option>
            <option value="aéreo">Aéreo</option>
            <option value="terrestre">Terrestre</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Dirección Destino*</label>
        <input
          name="direccion_destino"
          value={formData.direccion_destino}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Responsable*</label>
          <input
            name="responsable_exportacion"
            value={formData.responsable_exportacion}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">N° Guía</label>
          <input
            name="numero_guia"
            value={formData.numero_guia}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Estado*</label>
          <select
            name="estado_exportacion"
            value={formData.estado_exportacion}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
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
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label className="ml-2 block text-sm text-gray-700">Documentación Adjunta</label>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Observaciones</label>
        <textarea
          name="observaciones"
          value={formData.observaciones}
          onChange={handleChange}
          rows={3}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="border-t pt-4">
        <h3 className="text-lg font-semibold mb-4">Productos a Exportar</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Producto*</label>
            <select
              name="producto_id"
              value={detalleActual.producto_id}
              onChange={handleDetalleChange}
              className="w-full p-2 border rounded-md"
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Cantidad</label>
            <input
              type="number"
              name="cantidad_exportada"
              value={detalleActual.cantidad_exportada}
              onChange={handleDetalleChange}
              min="1"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Valor Unitario (USD)</label>
            <input
              type="number"
              name="valor_unitario_usd"
              value={detalleActual.valor_unitario_usd}
              onChange={handleDetalleChange}
              min="0"
              step="0.01"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subtotal (USD)</label>
            <input
              type="number"
              value={(detalleActual.cantidad_exportada * detalleActual.valor_unitario_usd).toFixed(2)}
              disabled
              className="w-full p-2 border rounded-md bg-gray-100"
            />
          </div>

          <div className="flex items-end">
            <button
              onClick={agregarDetalle}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Agregar
            </button>
          </div>
        </div>

        {formData.detalles.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Producto</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cantidad</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor Unitario (USD)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subtotal (USD)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {formData.detalles.map((detalle, index) => {
                  const producto = initialProductos.find(p => p.producto_id === detalle.producto_id);
                  return (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {producto?.nombre_producto || 'Producto no encontrado'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {detalle.cantidad_exportada}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        ${detalle.valor_unitario_usd?.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        ${detalle.subtotal_usd?.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button 
                          onClick={() => eliminarDetalle(detalle.detalle_id)}
                          className="text-red-600 hover:text-red-900"
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
                  <td colSpan="3" className="px-6 py-4 text-right font-semibold">Total USD:</td>
                  <td className="px-6 py-4 font-semibold">
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
          className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Cancelar
        </button>
        <button 
          type="button"
          onClick={() => onSave(formData)}
          className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {exportacion ? 'Actualizar' : 'Guardar'} Exportación
        </button>
      </div>
    </div>
  );
};
export default ExportacionForm;