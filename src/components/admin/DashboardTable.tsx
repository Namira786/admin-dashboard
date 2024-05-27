import { Column } from "react-table";
import TableHOC from "./TableHOC";

interface DataType {
  rank:number;
  name: string;
  calmar: number;
  overall:number;
  avg: number;
  win:number;
  price:number;
  action:string;
  

}

const columns: Column<DataType>[] = [
  {
    Header: "Rank",
    accessor: "rank",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Calmar Ratio",
    accessor: "calmar",
  },
  {
    Header: "Overall profit",
    accessor: "overall",
  },
  {
    Header: "Avg. Daily Profit",
    accessor: "avg",
  },
  {
    Header: "Win %(Day)",
    accessor: "win",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Action",
    accessor: "action",
  },
  
];

const DashboardTable = ({ data = [] }: { data: DataType[] }) => {
  return TableHOC<DataType>(
    columns,
    data,
    "transaction-box",
    "Basic Backtest"
  )();
};

export default DashboardTable;
