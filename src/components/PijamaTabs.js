const PijamaTabs = ({ children }) => {
  return (
    <div className="w-full">
      <div className="flex space-x-2 overflow-x-auto pb-3 border-b border-gray-700">
        {children}
      </div>
    </div>
  );
};
export default PijamaTabs;