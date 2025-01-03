"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "./CustomToolTip";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { data } from "@/data/user";

export default function PlasticUsage() {
  const chartData = data[0].usage.map((entry) => ({
    date: entry.date,
    ...entry.plastic_usage,
  }));

  return (
    <div className="w-full p-4">
      <a href="/user" className="underline ml-2">
        Back
      </a>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="text-3xl gap-8">
            Trends - {data[0].name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="chart">
            <TabsContent value="chart" className="pt-4">
              <div className="w-full h-[500px] p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={chartData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                      dataKey="date"
                      tick={{ fill: "#666" }}
                      tickLine={{ stroke: "#666" }}
                    />
                    <YAxis
                      tick={{ fill: "#666" }}
                      tickLine={{ stroke: "#666" }}
                      label={{
                        value: "Usage (kg)",
                        angle: -90,
                        position: "insideLeft",
                        fill: "#666",
                      }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend verticalAlign="top" height={36} />
                    <Line
                      type="monotone"
                      dataKey="single_use_plastics"
                      name="Single Use"
                      stroke="#7c3aed"
                      strokeWidth={2}
                      dot={{ fill: "#7c3aed", r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="recyclables"
                      name="Recyclables"
                      stroke="#059669"
                      strokeWidth={2}
                      dot={{ fill: "#059669", r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="non_recyclables"
                      name="Non-Recyclables"
                      stroke="#dc2626"
                      strokeWidth={2}
                      dot={{ fill: "#dc2626", r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="bulk_plastic"
                      name="Bulk Plastic"
                      stroke="#0ea5e9"
                      strokeWidth={2}
                      dot={{ fill: "#0ea5e9", r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
