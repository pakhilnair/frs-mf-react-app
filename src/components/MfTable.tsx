import { useNavigate } from "react-router-dom";

const MfTable = ({ data }) => {
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
              <p>Serial</p>
            </th>
            <th scope="col" className="px-6 py-3">
              <p>Mutual Fund</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 20).map((mf, index) => (
            <tr
              className="border-t dark:border-gray-700 text-sm cursor-pointer"
              key={index}
              onClick={() => navigateToDetails(mf.schemeCode)}
            >
              <th
                scope="row"
                className="flex items-center px-6 py-4 font-medium whitespace-nowrap"
              >
                <p>{index + 1}</p>
              </th>

              <td className="px-6 py-4">{mf.schemeName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MfTable;
