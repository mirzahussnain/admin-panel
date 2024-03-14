import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { IconType } from "react-icons";
import { AiFillFile } from "react-icons/ai";
import { CiSun } from "react-icons/ci";
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import { RiCoupon3Fill, RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { Link, Location, useLocation } from "react-router-dom";
import { IoMoonOutline } from "react-icons/io5";
import { useTheme } from "../context/themeContext";

interface sideNavItems {
  heading: string;
  divData: { url: string; text: string; Icon: IconType }[];
  location: Location;
  phoneActive:boolean;
  setShowModal:Dispatch<SetStateAction<boolean>>;
}

const AdminSideBar = () => {
  const {theme,toggleTheme}=useTheme();
  const location = useLocation();
  const [showModal,setShowModal]=useState<boolean>(false);
  const [phoneActive,setPhoneActive]=useState<boolean>(window.innerWidth<1100)
  
  const resizeHandler=()=>{
    setPhoneActive(window.innerWidth<1100);
  }
  
  useEffect(()=>{
    window.addEventListener("resize",resizeHandler)

    return ()=>{
      window.removeEventListener("resize",resizeHandler);
    };
  },[])
  return (
    <>
    {
      phoneActive && <button id="hamburger" onClick={()=>setShowModal(true)}>
        <HiMenuAlt4/> 
      </button>
    }
     <aside style={phoneActive?{
      width:"20rem",
      height:"100vh",
      position:"fixed",
      top:0,
      left:showModal?"0":"-20rem",
      transition:"all 0.5s",
     }:{}}>
      <div className="logo-toggle">
      <h2>Logo.</h2>
      <button onClick={()=>toggleTheme()}>{theme==='dark'?<CiSun/>:<IoMoonOutline/>}</button>
      </div>

      {/*Dashboard*/}

      <SideNavDivs
        heading={"Dashboard"}
        divData={[
          {
            url: "/admin/dashboard",
            text: "Dashboard",
            Icon: RiDashboardFill,
          },
          {
            url: "/admin/products",
            text: "Products",
            Icon: RiShoppingBag3Fill,
          },
          {
            url: "/admin/customers",
            text: "Customers",
            Icon: IoIosPeople,
          },
          {
            url: "/admin/transactions",
            text: "Transactions",
            Icon: AiFillFile,
          },
        ]}
        location={location}
        phoneActive={phoneActive}
        setShowModal={setShowModal}
      />

      {/*Charts*/}

      <SideNavDivs
        heading={"Charts"}
        divData={[
          {
            url: "/admin/charts/bar",
            text: "Bar",
            Icon: FaChartBar,
          },
          {
            url: "/admin/charts/pie",
            text: "Pie",
            Icon: FaChartPie,
          },
          {
            url: "/admin/charts/line",
            text: "Line",
            Icon: FaChartLine,
          },
        ]}
        location={location}
        phoneActive={phoneActive}
        setShowModal={setShowModal}
      />

      {/*Games*/}

      <SideNavDivs
        heading={"Apps"}
        divData={[
          {
            url: "/admin/apps/stopwatch",
            text: "Stopwatch",
            Icon: FaStopwatch,
          },
          {
            url: "/admin/apps/coupon",
            text: "Coupon",
            Icon: RiCoupon3Fill,
          },
          {
            url: "/admin/apps/toss",
            text: "Toss",
            Icon: FaGamepad,
          },
        ]}
        location={location}
        phoneActive={phoneActive}
        setShowModal={setShowModal}
      />
      
    </aside>
    </>
   
  );
};

const SideNavDivs = ({ heading, divData, location,phoneActive,setShowModal }: sideNavItems) => {
  return (
    <div>
      <h5>{heading}</h5>
      <ul>
        {divData.map((data,index) => (
          <li key={`${data}-${index}`}
            style={{
              backgroundColor: location.pathname.includes(data.url)
                ? "rgba(0,115,255,0.1)"
                : "var(--light-bg-color)",
            }}
          >
            <Link
              to={data.url}
              style={{
                color: location.pathname.includes(data.url)
                  ? "rgb(0,115,255)"
                  : "var(--light-heading-color)",
              }}
            >
              <data.Icon />
              {data.text}
            </Link>
          </li>
        ))}
      </ul>

      {
        phoneActive && heading==="Apps"&& <button id="close-sidebar" onClick={()=>setShowModal(false)}>Close</button>
      }

    </div>
  );
};

export default AdminSideBar;
