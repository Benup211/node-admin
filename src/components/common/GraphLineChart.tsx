import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { IGraphLineChartProps } from "../../interface/Components.Common.IGraphLineChart";

export const GraphLineChart = ({data}:IGraphLineChartProps) => {
  return (
    <motion.div className="overflow-x-auto bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700">
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Sales OverView
      </h2>
      <div className="h-80 min-w-80">
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