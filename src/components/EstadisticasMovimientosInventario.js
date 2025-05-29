import React from 'react';

const EstadisticasMovimientosInventario = ({ movimientos }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold border-b pb-2">Movimientos de Inventario</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm font-medium text-gray-700">Entradas Totales:</p>
          <p className="text-xl font-bold text-blue-600">{movimientos.entradas_totales}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm font-medium text-gray-700">Salidas Totales:</p>
          <p className="text-xl font-bold text-red-600">{movimientos.salidas_totales}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm font-medium text-gray-700">Ajustes Realizados:</p>
          <p className="text-xl font-bold text-yellow-600">{movimientos.ajustes_realizados}</p>
        </div>
      </div>
    </div>
  );
};
export default EstadisticasMovimientosInventario;