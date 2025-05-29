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

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Proveedor*</label>
          <select
            name="proveedor_id"
            value={formData.proveedor_id}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Estado*</label>
          <select
            name="estado_pedido"
            value={formData.estado_pedido}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Fecha Pedido</label>
          <input
            type="date"
            name="fecha_pedido"
            value={formData.fecha_pedido}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Fecha Entrega Estimada</label>
          <input
            type="date"
            name="fecha_entrega_estimada"
            value={formData.fecha_entrega_estimada}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Método de Pago</label>
          <select
            name="metodo_pago"
            value={formData.metodo_pago}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="transferencia">Transferencia</option>
            <option value="efectivo">Efectivo</option>
            <option value="crédito">Crédito</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">N° Orden Compra Proveedor</label>
          <input
            name="numero_orden_compra_proveedor"
            value={formData.numero_orden_compra_proveedor}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Responsable</label>
          <input
            name="responsable"
            value={formData.responsable}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
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
        <h3 className="text-lg font-semibold mb-4">Detalles del Pedido</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Producto</label>
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
              name="cantidad_pedida"
              value={detalleActual.cantidad_pedida}
              onChange={handleDetalleChange}
              min="1"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Precio Unitario</label>
            <input
              type="number"
              name="precio_unitario"
              value={detalleActual.precio_unitario}
              onChange={handleDetalleChange}
              min="0"
              step="0.01"
              className="w-full p-2 border rounded-md"
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio Unitario</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subtotal</th>
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
                        {detalle.cantidad_pedida}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        ${detalle.precio_unitario?.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        ${detalle.subtotal?.toLocaleString()}
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
                  <td colSpan="3" className="px-6 py-4 text-right font-semibold">Total:</td>
                  <td className="px-6 py-4 font-semibold">${calcularTotal().toLocaleString()}</td>
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
          {pedido ? 'Actualizar' : 'Guardar'} Pedido
        </button>
      </div>
    </div>
  );
};
export default PedidoForm;