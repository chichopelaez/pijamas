import React from 'react';

const EstadisticasBalanceInventario = ({ balance }) => {
  return (
    <div className="space-y-4 text-gray-200">
      <h3 className="text-lg font-semibold border-b border-gray-600 pb-2 text-gray-100">Balance de Inventario</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
          <p className="text-sm font-medium text-gray-300">Stock Total Actual:</p>
          <p className="text-xl font-bold text-green-400">{balance.stock_total_actual}</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
          <p className="text-sm font-medium text-gray-300">Valor Total Inventario:</p>
          <p className="text-xl font-bold text-purple-400">${balance.valor_total_inventario?.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};
export default EstadisticasBalanceInventario;