import React from 'react';

const InventoryDashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg border border-gray-600 text-center transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-lg font-semibold mb-2 text-gray-200">Productos en Inventario</h3>
        <p className="text-4xl font-bold text-blue-400">1,245</p>
      </div>
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg border border-gray-600 text-center transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-lg font-semibold mb-2 text-gray-200">Stock Bajo</h3>
        <p className="text-4xl font-bold text-yellow-400">24</p>
      </div>
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg border border-gray-600 text-center transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-lg font-semibold mb-2 text-gray-200">Valor Total Inventario</h3>
        <p className="text-4xl font-bold text-green-400">$12,450,000</p>
      </div>
    </div>
  );
};
export default InventoryDashboard;