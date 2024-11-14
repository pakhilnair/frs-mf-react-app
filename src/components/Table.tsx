import { useNavigate } from "react-router-dom";

const Table = ({ data }) => {
  const navigate = useNavigate();
  const navigateToDetails = (schemeCode: number) => {
    console.log(schemeCode);
    navigate(`/mf/${schemeCode}`);
  };

  return (
    <div className="relative overflow-x-auto rounded-md">
      <table className="w-full text-left border-gray-700">
        <thead className="text-sm text-gray-300 uppercase bg-gray-800 border-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3">
              <p>Mutual Funds</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((mf, index) => (
            <tr
              className="border-t dark:border-gray-700 text-sm cursor-pointer hover:shadow-md hover:border-b"
              key={index}
              onClick={() => navigateToDetails(mf.schemeCode)}
            >
              <td className="px-6 py-4">{mf.schemeName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
