export const initialReportes = {
  reporte_ventas: [
    {
      venta_id: 'VENTA-001',
      fecha_venta: '2023-05-18',
      cliente_id: '123456789',
      cliente_nombre: 'Juan Pérez',
      total_venta: 119800,
      productos_vendidos: [
        { producto_id: 'PJ-001', nombre: 'Pijama Algodón Premium', cantidad: 2, precio_unitario: 59900, subtotal: 119800 }
      ]
    }
  ],
  reporte_inventario: [
    {
      producto_id: 'PJ-001',
      nombre: 'Pijama Algodón Premium',
      categoria: 'Pijamas Adulto',
      stock_actual: 45,
      stock_minimo: 10,
      ubicacion: 'ALM-001',
      fecha_ultima_actualizacion: '2023-05-15'
    },
    {
      producto_id: 'PJ-002',
      nombre: 'Pijama Seda',
      categoria: 'Pijamas Adulto',
      stock_actual: 12,
      stock_minimo: 5,
      ubicacion: 'ALM-001',
      fecha_ultima_actualizacion: '2023-05-10'
    }
  ],
  reporte_proveedores: [
    {
      proveedor_id: 'PROV-001',
      nombre_proveedor: 'TextiValle',
      productos_suministrados: [
        { producto_id: 'PJ-001', nombre: 'Pijama Algodón Premium', ultima_compra: '2023-05-01', precio_unitario: 35000 }
      ]
    }
  ],
  reporte_clientes: [
    {
      cliente_id: '123456789',
      nombre_cliente: 'Juan Pérez',
      total_compras: 119800,
      compras: [
        { venta_id: 'VENTA-001', fecha: '2023-05-18', total: 119800 }
      ]
    }
  ]
};