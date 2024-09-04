import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const PsuStatusChart = ({ data = [], title }) => {
  const graphData = [
    { name: "critical", fill: "#EF4444" },
    { name: "major", fill: "#F97316" },
    { name: "minor", fill: "#EAB308" },
  ];
  return (
    <div className="PSU-Chart border shadow-sm bg-white flex m-3 p-4">
      <div>
        <h1 className="bigFont ml-3 ">{title}</h1>
        <BarChart width={500} height={250} data={data} className="mt-2 -ml-5">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" className="tooSmallFont" />
          <YAxis className="tooSmallFont" />
          <Tooltip />

          {/* total bars */}
          {graphData.map((ele) => {
            return <Bar dataKey={ele.name} fill={ele.fill} />;
          })}
        </BarChart>
      </div>

      <div className="ml-10">
        {/* Chart Indexing */}
        <ul className=" ml-12  mt-4">
          {graphData.map((ele, index) => {
            return (
              <li className="flex mt-3 cursor-pointer" key={index}>
                <div
                  className={`w-6 h-6 flex justify-center items-center text-white `}
                  style={{ backgroundColor: `${ele?.fill}` }}
                ></div>
                <p className="ml-2 font-normal">{ele.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default PsuStatusChart;
