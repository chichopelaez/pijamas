export const initialExportaciones = [
  {
    exportacion_id: 'EXP-001',
    fecha_exportacion: '2023-05-10',
    cliente_id: '987654321',
    cliente_nombre: 'María Gómez',
    pais_destino: 'Estados Unidos',
    direccion_destino: '123 Main St, Miami, FL',
    incoterm: 'FOB',
    medio_transporte: 'marítimo',
    responsable_exportacion: 'Juan Pérez',
    numero_guia: 'GUIA-12345',
    documentacion_adjunta: true,
    estado_exportacion: 'entregado',
    observaciones: 'Entregado en puerto de Miami',
    total: 3500,
    detalles: [
      {
        detalle_id: 'DET-001',
        producto_id: 'PJ-002',
        cantidad_exportada: 50,
        valor_unitario_usd: 70,
        subtotal_usd: 3500
      }
    ]
  }
];