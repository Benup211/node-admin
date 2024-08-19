import { motion } from "framer-motion";
import { ILineChart } from "../../interface/Components.Common.ILineChart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const GraphLineChart = () => {
  const data: ILineChart[] = [
    {
        name: "Jan",
        value: 4000,
    },
    {
        name: "Feb",
        value: 3000,
    },
    {
        name: "Mar",
        value: 2000,
    },
    {
        name: "Apr",
        value: 2780,
    },
    {
        name: "May",
        value: 1890,
    },
    {
        name: "Jun",
        value: 2390,
    },
    {
        name: "Jul",
        value: 3490,
    },
    {
        name: "Aug",
        value: 3490,
    },
    {
        name: "Sep",
        value: 3490,
    },
    {
        name: "Oct",
        value: 3490,
    },
    {
        name: "Nov",
        value: 3490,
    },
    {
        name: "Dec",
        value: 3490,
    }];
  return (
    <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700">
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Sales OverView
      </h2>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={data}>
            <XAxis dataKey={"name"} stroke={"#4B5563"}/>
            <YAxis stroke={"#9CA3AF" }/>
            <CartesianGrid strokeDasharray={"3 3"} stroke="#4B5563" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line
              type={"monotone"}
              dataKey="value"
              stroke="#6366f1"
              strokeWidth={3}
              dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};