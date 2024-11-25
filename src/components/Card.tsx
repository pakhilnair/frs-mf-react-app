import { FC, PropsWithChildren } from "react";

const Card: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={
        "md:w-64 md:h-fit space-y-1 p-4 bg-gray-800 bg-opacity-60 rounded-md overflow-auto"
      }
    >
      {children}
    </div>
  );
};

export default Card;
