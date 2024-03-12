import { ReactElement, useCallback, useState } from "react";
import { AdminSideBar, TableHOC } from "../components";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
 

interface DataType {
  photo:ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];


const img="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fD88MHxzZWFyY2h8mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804"
const img2="https://media.istockphoto.com/id/1368668733/photo/half-opened-apple-brand-m1-model-macbook-pro-laptop-computer-on-a-white-background.jpg?s=612x612&w=0&k=20&c=arXEYXBHKeksvRXJbJHNpSE3Kx1fHgrYUc_ho3uaqq4="
const arr: DataType[] = [
  {
    photo:<img src={img} alt="Shoes"/>,
    name:"Puma Shoes Air Jordan Cook Nigga 2023",
    price:690,
    stock:3,
    action:<Link to="/admin/products/sajknaskd">Manage</Link>,
    
  },
  {
    photo:<img src={img2} alt="Laptop"/>,
    name:"MacBook",
    price:232223,
    stock:213,
    action:<Link to="/admin/products/sajknaskd">Manage</Link>,
    
  },
  {
    photo:<img src={img} alt="Shoes"/>,
    name:"Puma Shoes Air Jordan Cook Nigga 2023",
    price:690,
    stock:3,
    action:<Link to="/admin/products/sajknaskd">Manage</Link>,
    
  },
  {
    photo:<img src={img2} alt="Laptop"/>,
    name:"MacBook",
    price:232223,
    stock:213,
    action:<Link to="/admin/products/sajknaskd">Manage</Link>,
    
  },
  {
    photo:<img src={img} alt="Shoes"/>,
    name:"Puma Shoes Air Jordan Cook Nigga 2023",
    price:690,
    stock:3,
    action:<Link to="/admin/products/sajknaskd">Manage</Link>,
    
  },
  {
    photo:<img src={img2} alt="Laptop"/>,
    name:"MacBook",
    price:232223,
    stock:213,
    action:<Link to="/admin/products/sajknaskd">Manage</Link>,
    
  },
  {
    photo:<img src={img} alt="Shoes"/>,
    name:"Puma Shoes Air Jordan Cook Nigga 2023",
    price:690,
    stock:3,
    action:<Link to="/admin/products/sajknaskd">Manage</Link>,
    
  },
  {
    photo:<img src={img2} alt="Laptop"/>,
    name:"MacBook",
    price:232223,
    stock:213,
    action:<Link to="/admin/products/sajknaskd">Manage</Link>,
    
  },
  {
    photo:<img src={img} alt="Shoes"/>,
    name:"Puma Shoes Air Jordan Cook Nigga 2023",
    price:690,
    stock:3,
    action:<Link to="/admin/products/sajknaskd">Manage</Link>,
    
  },
  {
    photo:<img src={img2} alt="Laptop"/>,
    name:"MacBook",
    price:232223,
    stock:213,
    action:<Link to="/admin/products/sajknaskd">Manage</Link>,
    
  },
  {
    photo:<img src={img} alt="Shoes"/>,
    name:"Puma Shoes Air Jordan Cook Nigga 2023",
    price:690,
    stock:3,
    action:<Link to="/admin/products/sajknaskd">Manage</Link>,
    
  },
  {
    photo:<img src={img2} alt="Laptop"/>,
    name:"MacBook",
    price:232223,
    stock:213,
    action:<Link to="/admin/products/sajknaskd">Manage</Link>,
    
  },
 
];
const Products = () => {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHOC<DataType>(columns, data, "dashboard-products-box", "Products",true),
    []
  );
  return (
    <div className="adminContainer">
      {/*SideBar*/}

      <AdminSideBar />

      {/*Main*/}

      <main>{Table()}</main>
      <Link to="/admin/product/new" className="create-product-btn">
        <FaPlus/>
      </Link>
    </div>
  );
};

export default Products;
