import React from 'react';

const InventoryDashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Productos en Inventario</h3>
        <p className="text-3xl font-bold text-blue-600">1,245</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Stock Bajo</h3>
        <p className="text-3xl font-bold text-yellow-500">24</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Valor Total Inventario</h3>
        <p className="text-3xl font-bold text-green-600">$12,450,000</p>
      </div>
    </div>
  );
};
export default InventoryDashboard;