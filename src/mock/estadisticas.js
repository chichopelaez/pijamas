export const initialEstadisticas = {
  productos_mas_vendidos: [
    { producto_id: 'PJ-001', nombre: 'Pijama Algodón Premium', unidades_vendidas: 150, ingresos_generados: 8985000 },
    { producto_id: 'PJ-002', nombre: 'Pijama Seda', unidades_vendidas: 80, ingresos_generados: 7192000 }
  ],
  clientes_frecuentes: [
    { cliente_id: '123456789', nombre: 'Juan Pérez', compras_realizadas: 10, total_gastado: 1500000 },
    { cliente_id: '987654321', nombre: 'María Gómez', compras_realizadas: 8, total_gastado: 1200000 }
  ],
  proveedores_frecuentes: [
    { proveedor_id: 'PROV-001', nombre: 'TextiValle', ordenes_compras: 5, total_comprado: 5000000 }
  ],
  movimientos_inventario: {
    entradas_totales: 200,
    salidas_totales: 180,
    ajustes_realizados: 5
  },
  balance_inventario: {
    stock_total_actual: 1245,
    valor_total_inventario: 12450000
  }
};