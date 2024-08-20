import { FC, ReactElement } from "react";
import { Header } from "../components/common/Header";
import { motion } from "framer-motion";
import { StatCard } from "../components/common/StatCard";
import { GraphLineChart } from "../components/common/GraphLineChart";
import { GraphPieChart } from "../components/common/GraphPieChart";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import { IGraphPieChart } from "../interface/Components.Common.IGraphPieChart";
import { IGraphLineChart } from "../interface/Components.Common.IGraphLineChart";
import { IStatCard } from "../interface/Components.Common.IStatCard";

//Piechart Data
const PieData:IGraphPieChart[]=[
  {name: 'Electronics', value: 400, color: '#8884d8'},
  {name: 'Books', value: 300, color: '#83a6ed'},
  {name: 'Clothes', value: 300, color: '#8dd1e1'},
  {name: 'Furniture', value: 200, color: '#82ca9d'},
  {name: 'Others', value: 200, color: '#a4de6c'},
]
//linechart Data
const Linedata: IGraphLineChart[] = [
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
  }];
  
  //statcard Data
  const StatData: IStatCard[] = [
      {
          name: "Total Sales",
          icon: Zap,
          value: "$1234",
          color: "#6366F1",
      },
      {
          name: "New Users",
          icon: Users,
          value: "$1234",
          color: "#8B5CF6",
      },
      {
          name: "Total Products",
          icon: ShoppingBag,
          value: "$1234",
          color: "#EC4899",
      },
      {
          name: "Conversion Rate",
          icon: BarChart2,
          value: "$1234",
          color: "#10B981",
      },
  ];
export const ProductPage:FC = ():ReactElement => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
    <Header title="Overview" />
    <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            {
                StatData.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))
            }
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <GraphLineChart data={Linedata}/>
            <GraphPieChart data={PieData}/>
        </div>
    </main>
</div>
  )
}