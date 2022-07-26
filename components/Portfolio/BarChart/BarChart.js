import React from "react";
import style from "./BarChart.module.scss";
import data2 from "./data1";
import data from "./data";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BarChart = ({ defaultColor, dataFile }) => {
  return (
    <div className={style.container}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={1000}
          height={300}
          data={dataFile ? data : data2}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          // border-radius={{
          //   top: 20,
          //   right: 20,
          //   left: 20,
          //   bottom: 20,
          // }}
        >
          {/* <CartesianGrid strokeDasharray="3 " /> */}
          {/* <XAxis dataKey="name" /> */}
          {/* <YAxis baseLine={8} /> */}
          <YAxis
            padding={{ top: 0, bottom: 0 }}
            tick={false}
            tickLine={false}
            axisLine={false}
          />
          <XAxis 
          tick={false} axisLine={false} />

          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="50%" stopColor="#D26BF5" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#D26BF5" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="colorUvW" x1="0" y1="0" x2="0" y2="1">
              <stop offset="50%" stopColor="#D26BF5" stopOpacity={1} />
              <stop offset="95%" stopColor="#D26BF5" stopOpacity={0} />
            </linearGradient>
          </defs>

          <Tooltip />
          <Area
            className={style.wrapper}
            type="monotone"
            dataKey="uv"
            stackId="1"
            stroke={`${defaultColor ? "#D26BF5 " : "#D26BF5"}`}
            fill={`url(#${defaultColor ? "colorUv " : "colorUvW"})`}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
