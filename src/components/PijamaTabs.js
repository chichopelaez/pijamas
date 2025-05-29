const PijamaTabs = ({ children }) => {
  return (
    <div className="w-full">
      <div className="flex space-x-1 overflow-x-auto pb-2">
        {children}
      </div>
    </div>
  );
};
export default PijamaTabs;