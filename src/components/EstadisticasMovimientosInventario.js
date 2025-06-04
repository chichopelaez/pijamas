import React from 'react';

const EstadisticasMovimientosInventario = ({ movimientos }) => {
  return (
    <div className="space-y-4 text-gray-200">
      <h3 className="text-lg font-semibold border-b border-gray-600 pb-2 text-gray-100">Movimientos de Inventario</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
          <p className="text-sm font-medium text-gray-300">Entradas Totales:</p>
          <p className="text-xl font-bold text-blue-400">{movimientos.entradas_totales}</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
          <p className="text-sm font-medium text-gray-300">Salidas Totales:</p>
          <p className="text-xl font-bold text-red-400">{movimientos.salidas_totales}</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
          <p className="text-sm font-medium text-gray-300">Ajustes Realizados:</p>
          <p className="text-xl font-bold text-yellow-400">{movimientos.ajustes_realizados}</p>
        </div>
      </div>
    </div>
  );
};
export default EstadisticasMovimientosInventario;