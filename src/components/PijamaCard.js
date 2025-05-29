const PijamaCard = ({ children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800">
      {children}
    </div>
  );
};
export default PijamaCard;