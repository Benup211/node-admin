import {motion} from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell
} from "recharts";
import { IGraphBarProps } from '../../interface/Components.Common.IGraphBar';
export const GraphBar = ({data}:IGraphBarProps) => {
  return (
    <motion.div
            className="overflow-x-auto bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <h2 className="text-lg font-medium mb-4 text-gray-100">
                Sales by Channel
            </h2>
            <div className="h-80 min-w-96">
              <ResponsiveContainer>
                <BarChart
                data={data}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip
                  contentStyle={{
                      backgroundColor: "rgba(31,41,55,0.8)",
                      borderColor: "#4B5563",
                  }}
                  itemStyle={{ color: "#E5E7EB" }}
                  />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8">
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
        </motion.div>
  )
}
