import React, { useState, useEffect } from 'react';
import { initialProveedores } from '../mock/proveedores';
import { initialProductos } from '../mock/productos';

const PedidoForm = ({ pedido, onSave, onCancel }) => {
  const [formData, setFormData] = useState(pedido || {
    pedido_id: '',
    fecha_pedido: new Date().toISOString().split('T')[0],
    proveedor_id: '',
    estado_pedido: 'borrador',
    fecha_entrega_estimada: '',
    metodo_pago: 'transferencia',
    numero_orden_compra_proveedor: '',
    responsable: '',
    observaciones: '',
    detalles: []
  });

  const [detalleActual, setDetalleActual] = useState({
    producto_id: '',
    cantidad_pedida: 1,
    precio_unitario: 0,
    fecha_entrega_producto: ''
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
    
    const producto = initialProductos.find(p => p.producto_id === detalleActual.producto_id);
    const subtotal = detalleActual.cantidad_pedida * (detalleActual.precio_unitario || producto.costo_unitario);
    
    setFormData(prev => ({
      ...prev,
      detalles: [
        ...prev.detalles,
        {
          ...detalleActual,
          detalle_id: `DET-${Date.now()}`,
          precio_unitario: detalleActual.precio_unitario || producto.costo_unitario,
          subtotal,
          recibido: false
        }
      ]
    }));
    
    setDetalleActual({
      producto_id: '',
      cantidad_pedida: 1,
      precio_unitario: 0,
      fecha_entrega_producto: ''
    });
  };

  const eliminarDetalle = (detalleId) => {
    setFormData(prev => ({
      ...prev,
      detalles: prev.detalles.filter(d => d.detalle_id !== detalleId)
    }));
  };

  const calcularTotal = () => {
    return formData.detalles.reduce((sum, detalle) => sum + detalle.subtotal, 0);
  };

  const inputClass = "w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all";
  const labelClass = "block text-sm font-medium text-gray-300 mb-1";
  const sectionTitleClass = "text-lg font-semibold border-b border-gray-600 pb-2 text-gray-100";

  return (
    <div className="space-y-6 text-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Proveedor*</label>
          <select
            name="proveedor_id"
            value={formData.proveedor_id}
            onChange={handleChange}
            className={inputClass}
            required
          >
            <option value="">Seleccionar proveedor</option>
            {initialProveedores.map(proveedor => (
              <option key={proveedor.proveedor_id} value={proveedor.proveedor_id}>
                {proveedor.nombre_comercial || proveedor.nombre_legal}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass}>Estado*</label>
          <select
            name="estado_pedido"
            value={formData.estado_pedido}
            onChange={handleChange}
            className={inputClass}
            required
          >
            <option value="borrador">Borrador</option>
            <option value="enviado">Enviado</option>
            <option value="aprobado">Aprobado</option>
            <option value="parcial">Parcial</option>
            <option value="completado">Completado</option>
            <option value="cancelado">Cancelado</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className={labelClass}>Fecha Pedido</label>
          <input
            type="date"
            name="fecha_pedido"
            value={formData.fecha_pedido}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Fecha Entrega Estimada</label>
          <input
            type="date"
            name="fecha_entrega_estimada"
            value={formData.fecha_entrega_estimada}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Método de Pago</label>
          <select
            name="metodo_pago"
            value={formData.metodo_pago}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="transferencia">Transferencia</option>
            <option value="efectivo">Efectivo</option>
            <option value="crédito">Crédito</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>N° Orden Compra Proveedor</label>
          <input
            name="numero_orden_compra_proveedor"
            value={formData.numero_orden_compra_proveedor}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Responsable</label>
          <input
            name="responsable"
            value={formData.responsable}
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
        <h3 className={sectionTitleClass}>Detalles del Pedido</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className={labelClass}>Producto</label>
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
              name="cantidad_pedida"
              value={detalleActual.cantidad_pedida}
              onChange={handleDetalleChange}
              min="1"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Precio Unitario</label>
            <input
              type="number"
              name="precio_unitario"
              value={detalleActual.precio_unitario}
              onChange={handleDetalleChange}
              min="0"
              step="0.01"
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Precio Unitario</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Subtotal</th>
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
                        {detalle.cantidad_pedida}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                        ${detalle.precio_unitario?.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                        ${detalle.subtotal?.toLocaleString()}
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
                  <td colSpan="3" className="px-6 py-4 text-right font-semibold text-gray-100">Total:</td>
                  <td className="px-6 py-4 font-semibold text-gray-100">${calcularTotal().toLocaleString()}</td>
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
          {pedido ? 'Actualizar' : 'Guardar'} Pedido
        </button>
      </div>
    </div>
  );
};
export default PedidoForm;