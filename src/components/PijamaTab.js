const PijamaTab = ({ active, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ease-in-out 
        ${active
          ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg transform scale-105'
          : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200'
        }
        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75
      `}
    >
      {children}
    </button>
  );
};
export default PijamaTab;