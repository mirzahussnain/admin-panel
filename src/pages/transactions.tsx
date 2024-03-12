import { ReactElement, useCallback, useState } from "react";
import { AdminSideBar, TableHOC } from "../components";
import { Column } from "react-table";
import { Link } from "react-router-dom";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr:DataType[]=[
  {
    user:"Bilal Shura",
    amount:4500,
    discount:400,
    quantity:3,
    status:<span className="red">Processing</span>,
    action:<Link to="/admin/transactions/sajknaskd">Manage</Link>
  },
  {
    user:"Xavier",
    amount:6999,
    discount:400,
    quantity:6,
    status:<span className="green">Shipped</span>,
    action:<Link to="/admin/transactions/sajknaskd">Manage</Link>
  },
  {
    user:"Shams",
    amount:8500,
    discount:500,
    quantity:2,
    status:<span className="purple">Delivered</span>,
    action:<Link to="/admin/transactions/sajknaskd">Manage</Link>
  },
]

const Transactions = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-products-box",
      "Transactions",
      true
    ),[]
  );
  return (
    <div className="adminContainer">
      {/*SideBar*/}

      <AdminSideBar />

      {/*Main*/}

      <main>
        {Table()}
      </main>
    </div>
  );
};

export default Transactions;
