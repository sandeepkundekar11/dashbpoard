import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DashBoardLineChart = ({
  title,
  data = [],
  stroke,
  customClass,
  width,
}) => {
  return (
    <div
      className={`${customClass} ChartBox bg-white m-3 shadow-sm flex border p-4`}
    >
      <div className="">
        <h1 className="bigFont ml-3 " style={{ color: "#1b2733" }}>
          {title}
        </h1>
        <LineChart
          width={width}
          height={220}
          data={data}
          className="mt-8 -ml-10  p-0"
        >
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="name" className="tooSmallFont" />
          <YAxis className="tooSmallFont" />
          <Tooltip />
          <Line type="monotone" dataKey="pv" stroke={stroke} />
        </LineChart>
      </div>
    </div>
  );
};
export default DashBoardLineChart;
