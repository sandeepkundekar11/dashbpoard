import React, { Suspense, useEffect, useState } from "react";
import smallCard from "../JsonData/Card.json";
import SignalQualityData from "../JsonData/SignalQuality.json";
import TrafficData from "../JsonData/TrafficUtilization.json";
import HistoricalAlarmDatas from "../JsonData/HistoricalAlarm.json";
import PsuStatusChart from "../Graphs/PsuStatusChart";
import PsuData from "../JsonData/PSUStatus.json";
import SysteOnOffdatas from "../JsonData/SystemOn_Off.json";
const HistoricalAlarmChart = React.lazy(() =>
  import("../Graphs/HistoricalAlarmCart")
);
const AlarmPieChart = React.lazy(() => import("../Graphs/AlarmPieChart"));
const DashBoardLineChart = React.lazy(() =>
  import("../Graphs/DashBoardLineChart")
);
const DashboardSmallCard = React.lazy(() =>
  import("./HelperComponents/DashbaordSmallCard")
);

const Dashboard = () => {
  const [TrafficUitlizationData, setTafficUtilizationData] = useState([]);
  const [HistoricalAlarms, setHistoricalAlarms] = useState([]);
  const [PsuStatus, setPsuStatus] = useState([]);
  const [SystemOnOffsummery, setSystemOnOffSummery] = useState([]);
  useEffect(() => {
    // modifing the Traffic data
    let trafficData = TrafficData.map((ele) => {
      return {
        name: ele.day.substring(0, 3),
        pv: ele.trafficUtilization,
      };
    });

    // modifing the Historical Alarm data
    let HistoricalAlarmData = HistoricalAlarmDatas.map((ele) => {
      return {
        name: ele.time,
        pv: ele.alarmCount,
      };
    });

    // modifing the Psu Status data

    let PsuModifiedData = PsuData.map((ele) => {
      return {
        name: ele?.cardID,
        critical: ele?.critical,
        major: ele?.minor,
        minor: ele?.major,
      };
    });

    let SystemOnOffData = SysteOnOffdatas.map((ele) => {
      return {
        name: ele.month,
        pv: ele.uptime,
      };
    });
    setSystemOnOffSummery(SystemOnOffData);
    setPsuStatus(PsuModifiedData);
    setHistoricalAlarms(HistoricalAlarmData);
    setTafficUtilizationData(trafficData);
  }, []);
  return (
    <>
      <div className="dashboard w-screen h-screen bg-[#F6F8F9]">
        {/* heading */}
        <div className="heading w-full h-20 flex items-center bg-white z-30 shadow pl-4 fixed">
          <h1 className="HeadingFont ml-2">Welcome to Ems Dashboard</h1>
        </div>
        {/* dashboard  */}
        <div className="w-full h-screen mt-3 overflow-auto pl-4 pt-20 pb-20">
          <div className="w-full flex flex-wrap md:space-y-0 space-y-5  items-center">
            {smallCard.map((ele, index) => {
              return (
                index <= 2 && (
                  <Suspense>
                    <DashboardSmallCard
                      Heading={ele.title}
                      Info={ele.info}
                      key={index}
                    />
                  </Suspense>
                )
              );
            })}
          </div>

          <div className="w-full mt-0 flex flex-wrap md:space-y-0 space-y-5  items-center">
            {smallCard.map((ele, index) => {
              return (
                index > 2 && (
                  <Suspense>
                    <DashboardSmallCard
                      Heading={ele.title}
                      Info={ele.info}
                      key={index}
                    />
                  </Suspense>
                )
              );
            })}
          </div>
          {/* charts */}
          <div className="w-full mt-3 flex flex-wrap  md:space-y-0 space-y-5  items-center">
            <AlarmPieChart />
            {/* Signal Quality graph */}
            <DashBoardLineChart
              title={"Signal Quality Over Time"}
              key={Date.now() + 1}
              width={500}
              data={SignalQualityData}
              stroke={"#2A9D90"}
            />

            {/*  */}
            <DashBoardLineChart
              title={"Traffic Utilization"}
              key={Date.now()}
              width={500}
              data={TrafficUitlizationData}
              stroke={"#1246CD"}
            />
          </div>

          {/* Historical Alarms */}
          <HistoricalAlarmChart
            title="Historical Alarm"
            key={Date.now() + 10}
            data={HistoricalAlarms}
            fillColor={"#CD121D"}
          />

          {/* PSU Alarm chart and system on/off summery */}

          <div className="w-full mt-3  flex flex-wrap  md:space-y-0 space-y-5  items-center">
            <PsuStatusChart
              key={Date.now() + 10}
              data={PsuStatus}
              title={"PUS Cards Status"}
            />
            {/* system on/off summery */}
            <DashBoardLineChart
              key={Date.now()}
              width={650}
              title={"System On/Off Summery"}
              data={SystemOnOffsummery}
              customClass="systemOnOffSummery"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
