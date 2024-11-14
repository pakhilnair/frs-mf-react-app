const Card = ({ children }) => {
  return (
    <div
      className={
        "h-fit md:min-h-32 p-4 mx-2 mb-4 mt-1 bg-gray-800 bg-opacity-60 rounded-md overflow-y-auto"
      }
    >
      {children}
    </div>
  );
};

export default Card;
