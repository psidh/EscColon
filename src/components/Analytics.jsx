"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { data } from "@/data/mumbai";

// Transform household data for chart usage
const chartData = data.map((household) => ({
  name: household.name,
  singleUse: household.plastic_usage.single_use_plastics,
  recyclables: household.plastic_usage.recyclables,
  nonRecyclables: household.plastic_usage.non_recyclables,
  bulkPlastic: household.plastic_usage.bulk_plastic,
}));

const chartConfig = {
  singleUse: {
    label: "Single-use Plastics",
    color: "hsl(var(--chart-1))",
  },
  recyclables: {
    label: "Recyclables",
    color: "hsl(var(--chart-2))",
  },
  nonRecyclables: {
    label: "Non-recyclables",
    color: "hsl(var(--chart-3))",
  },
  bulkPlastic: {
    label: "Bulk Plastic",
    color: "hsl(var(--chart-4))",
  },
};

export default function Analytics() {
  const [activeChart, setActiveChart] = React.useState("singleUse");

  const total = React.useMemo(() => {
    const totals = {};
    Object.keys(chartConfig).forEach((key) => {
      totals[key] = chartData.reduce((acc, curr) => acc + curr[key], 0);
    });
    return totals;
  }, []);

  return (
    <Card className="my-20">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Plastic Usage Analytics</CardTitle>
          <CardDescription>
            Showing total plastic usage across households.
          </CardDescription>
        </div>
        <div className="flex">
          {Object.keys(chartConfig).map((key) => {
            const chart = key;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[chart].toFixed(2)} kg
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="name"
                  labelFormatter={(value) => `Household: ${value}`}
                />
              }
            />
            <Bar dataKey={activeChart} fill={chartConfig[activeChart].color} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
