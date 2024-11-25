import Table from "./Table";
interface TableDataItem {
  schemeCode: number;
  schemeName: string;
}

interface TableData {
  data: TableDataItem[];
}

const MfTable = ({ data }: TableData) => {
  return <Table data={data} />;
};

export default MfTable;
