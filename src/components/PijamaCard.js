const PijamaCard = ({ children }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-700 transform hover:scale-[1.005] transition-transform duration-300 ease-in-out">
      {children}
    </div>
  );
};
export default PijamaCard;