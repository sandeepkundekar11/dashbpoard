import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import home from "../../Images/Home.png";
import inventory from "../../Images/Inventory.png";
import loginImg from "../../Images/Logout.png";
const NavigationWrapper = ({ children }) => {
  let location = useLocation();
  const Navigate = useNavigate();
  const [presentPath, setPresentPath] = useState(null);
  useEffect(() => {
    setPresentPath(location.pathname);
  }, [location]);
  useEffect(() => {
    let user = localStorage.getItem("user");
    if (!user) {
      Navigate("/");
    }
  }, []);
  return (
    <div className="w-screen h-screen overflow-hidden relative ">
      <div className="navigationBar h-12 w-full bg-[rgb(22,22,22)] flex items-center justify-between ">
        <p className="IBM-font text-base text-slate-300 pl-3">
          UTL (United Telecoms Limited)
        </p>
        <div className="w-28 float-end ">
          <button
            className="flex hover:bg-[rgb(22,22,22)]"
            onClick={() => {
              localStorage.clear("user");
              Navigate("/");
            }}
          >
            <img className="w-6 h-6" src={loginImg} alt="" />
            <p className="font-medium text-white pl-2">Logout</p>
          </button>
        </div>
      </div>
      <div className="wrapper flex">
        <div className="SideBar h-screen  bg-[rgb(22,22,22)] absolute left-0 pt-4 z-50">
          <ul className="space-y-1">
            <li
              className={`flex items-center py-2 ${
                presentPath === "/dashboard" && "SelectedRoute"
              }`}
            >
              <img className="w-10 h-6" src={home} alt="" />
              <p className=" ml-2 sidebarFont">Home</p>
            </li>
            <li
              className={`flex items-center py-2 ${
                presentPath === "/inventory" && "SelectedRoute"
              }`}
            >
              <img className="w-10 h-6 " src={inventory} alt="" />
              <p className="sidebarFont ml-2">Inventory</p>
            </li>
          </ul>
        </div>
        <div className="componentWrapper pl-8 overflow-auto">{children}</div>
      </div>
    </div>
  );
};
export default NavigationWrapper;
