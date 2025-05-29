const PijamaTab = ({ active, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
        active
          ? 'bg-blue-600 text-white'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
      }`}
    >
      {children}
    </button>
  );
};
export default PijamaTab;