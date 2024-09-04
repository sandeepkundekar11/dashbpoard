import { memo, useState } from "react";
import { Pie, PieChart, Tooltip } from "recharts";
import data from "../JsonData/Alarms.json";

const AlarmPieChart = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div className="ChartBox bg-white m-3 shadow-sm flex border p-4">
      <div className="h-auto">
        <h1 className=" ml-3 bigFont " style={{ color: "#1b2733" }}>
          Alarm Summary
        </h1>
        {/* chart */}
        <PieChart width={280} height={250} className="mt-2 -ml-4">
          <Pie
            activeIndex={activeIndex}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={110}
            dataKey="value"
            onMouseEnter={onPieEnter}
          />
          <Tooltip />
        </PieChart>
      </div>
      {/* Chart Indexing */}
      <ul className=" ml-12  mt-4">
        {data.map((ele, index) => {
          return (
            <li className="flex mt-3 cursor-pointer" key={index}>
              <div
                className={`w-9 h-9 flex justify-center items-center text-white rounded-full`}
                style={{ backgroundColor: `${ele?.fill}` }}
              >
                {ele.value}
              </div>
              <p className="ml-2 ">{ele.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default memo(AlarmPieChart);
