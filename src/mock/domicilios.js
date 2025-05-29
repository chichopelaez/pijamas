export const initialDomicilios = [
  {
    domicilio_id: 'DOM-001',
    fecha_domicilio: '2023-05-15',
    cliente_id: '123456789',
    cliente_nombre: 'Juan Pérez',
    direccion_entrega: 'Calle 123 #45-67',
    ciudad_entrega: 'Bogotá',
    estado_domicilio: 'entregado',
    responsable_entrega: 'Carlos Gómez',
    contacto_receptor: 'María Pérez',
    telefono_contacto: '3101234567',
    observaciones: 'Entregar en portería',
    detalles: [
      {
        detalle_id: 'DET-001',
        producto_id: 'PJ-001',
        cantidad_entregada: 2,
        observaciones_producto: 'Talla M'
      }
    ]
  }
];