import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";
import { motion } from "framer-motion";
import { IGraphPieChartProps } from "../../interface/Components.Common.IGraphPieChart";
import { ReactElement } from "react";
export const GraphPieChart = ({ data }: IGraphPieChartProps): ReactElement => {
    const total = data.reduce((acc, cur) => acc + cur.value, 0);
    return (
        <motion.div
            className="overflow-x-auto bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-6 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <h2 className="text-lg font-medium mb-4 text-gray-100">
                Category Distribution
            </h2>
            <div className="h-80 min-w-96">
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx={"50%"}
                            cy={"50%"}
                            labelLine={true}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey={"value"}
                            label={({name,value }) =>
                                `${name} ${((value / total) * 100).toFixed(1)}%`
                            }
                        >
                            {data.map((cell, index) => (
                                <Cell key={`cell-${index}`} fill={cell.color} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31,41,55,0.8)",
                                borderColor: "#4B5563",
                            }}
                            itemStyle={{ color: "#E5E7EB" }}
                        />
                        <Legend/>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};
