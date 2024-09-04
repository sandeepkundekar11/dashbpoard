import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CustomTooltip from "../Components/ToolTips/CustomTooltip";

const HistoricalAlarmChart = ({ title = "", data = [], fillColor }) => {
  const [width, setWidth] = useState(Window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      let adjustWidth = window.innerWidth;

      setWidth(adjustWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);
  return (
    <div className="w-[92.5%] bg-white m-3 shadow-sm flex border p-4">
      <div className=" overflow-hidden">
        <h1 className="bigFont ml-3 " style={{ color: "#1b2733" }}>
          {title}
        </h1>
        <BarChart
          data={data}
          width={width}
          height={220}
          className=" -ml-10 mt-10"
        >
          <Bar dataKey="pv" fill={fillColor} />
          <CartesianGrid strokeDasharray="4" />
          <XAxis dataKey="name" className="tooSmallFont" />
          <YAxis className="tooSmallFont" />
          <Tooltip
            content={<CustomTooltip customValue="Alarms" customLable="Date" />}
          />
        </BarChart>
      </div>
    </div>
  );
};
export default HistoricalAlarmChart;
