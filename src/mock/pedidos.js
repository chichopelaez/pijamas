export const initialPedidos = [
  {
    pedido_id: 'PED-001',
    fecha_pedido: '2023-05-10',
    proveedor_id: 'PROV-001',
    proveedor_nombre: 'TextiValle',
    estado_pedido: 'completado',
    fecha_entrega_estimada: '2023-05-20',
    metodo_pago: 'transferencia',
    numero_orden_compra_proveedor: 'OC-12345',
    responsable: 'Juan Pérez',
    observaciones: 'Entregar antes del 20 de mayo',
    total: 1750000,
    detalles: [
      {
        detalle_id: 'DET-001',
        producto_id: 'PJ-001',
        cantidad_pedida: 50,
        precio_unitario: 35000,
        subtotal: 1750000,
        fecha_entrega_producto: '2023-05-18',
        recibido: true
      }
    ]
  }
];