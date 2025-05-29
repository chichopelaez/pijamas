import React from 'react';

const EstadisticasBalanceInventario = ({ balance }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold border-b pb-2">Balance de Inventario</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm font-medium text-gray-700">Stock Total Actual:</p>
          <p className="text-xl font-bold text-green-600">{balance.stock_total_actual}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm font-medium text-gray-700">Valor Total Inventario:</p>
          <p className="text-xl font-bold text-purple-600">${balance.valor_total_inventario?.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};
export default EstadisticasBalanceInventario;