
import { Pie, PieChart, Cell } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartData = [
  { status: "Completed", value: 145, color: "#a855f7" },
  { status: "Preparing", value: 23, color: "#93c5fd" },
  { status: "Pending", value: 8, color: "#f97316" },
];

const chartConfig = {
  value: {
    label: "Orders",
  },
} satisfies ChartConfig;

const OrderStatusChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-bold">
          Order Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <ChartContainer
            config={chartConfig}
            className="aspect-square h-62.5 w-full"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="status"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
          
          <div className="w-full space-y-3 mt-4">
            {chartData.map((item, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-muted-foreground">{item.status}</span>
                </div>
                <span className="font-bold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderStatusChart;
