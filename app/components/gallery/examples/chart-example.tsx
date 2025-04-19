import React from "react";
import styles from "./chart-example.module.css";
import {
  ChartContainer,
  ChartTooltipContent,
  ChartLegend,
  type ChartConfig,
} from "@/components/ui/chart/chart";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", sales: 400, revenue: 2400, profit: 1200 },
  { name: "Feb", sales: 300, revenue: 1398, profit: 900 },
  { name: "Mar", sales: 520, revenue: 3000, profit: 1500 },
  { name: "Apr", sales: 270, revenue: 2780, profit: 1000 },
  { name: "May", sales: 500, revenue: 4090, profit: 2000 },
  { name: "Jun", sales: 450, revenue: 3300, profit: 1700 },
];

const lineChartConfig: ChartConfig = {
  sales: {
    label: "Sales",
    color: "#4f46e5",
  },
  revenue: {
    label: "Revenue",
    color: "#0ea5e9",
  },
  profit: {
    label: "Profit",
    color: "#10b981",
  },
};

const barChartConfig: ChartConfig = {
  sales: {
    label: "Sales",
    color: "#8b5cf6",
  },
  revenue: {
    label: "Revenue",
    color: "#f59e0b",
  },
};

export function ChartExample() {
  return (
    <div className={styles.container}>
      <div className={styles.charts}>
        <div className={styles.chartContainer}>
          <h4 className={styles.chartTitle}>Line Chart</h4>
          <ChartContainer className={styles.chart} config={lineChartConfig}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className={styles.grid} />
              <XAxis dataKey="name" className={styles.axis} />
              <YAxis className={styles.axis} />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend content={<ChartLegend />} />
              <Line
                type="monotone"
                dataKey="sales"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="profit"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ChartContainer>
        </div>

        <div className={styles.chartContainer}>
          <h4 className={styles.chartTitle}>Bar Chart</h4>
          <ChartContainer className={styles.chart} config={barChartConfig}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className={styles.grid} />
              <XAxis dataKey="name" className={styles.axis} />
              <YAxis className={styles.axis} />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend content={<ChartLegend />} />
              <Bar dataKey="sales" barSize={30} radius={[4, 4, 0, 0]} />
              <Bar dataKey="revenue" barSize={30} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
}
