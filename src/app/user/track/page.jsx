"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { data } from "@/data/user";
import { Input } from "@/components/ui/input";

export default function PlasticUsage() {
  const [usageData, setUsageData] = useState(data[0].usage);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [newEntry, setNewEntry] = useState({
    date: "",
    plastic_usage: {
      recyclables: 0,
      single_use_plastics: 0,
      non_recyclables: 0,
      bulk_plastic: 0,
      total: 0,
    },
  });

  const totalSum = usageData.reduce(
    (sum, entry) => sum + entry.plastic_usage.total,
    0
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry((prev) => ({
      ...prev,
      plastic_usage: {
        ...prev.plastic_usage,
        [name]: parseFloat(value) || 0,
      },
    }));
  };

  const handleAddEntry = () => {
    setNewEntry((prev) => ({
      ...prev,
      plastic_usage: {
        ...prev.plastic_usage,
        total:
          prev.plastic_usage.recyclables +
          prev.plastic_usage.single_use_plastics +
          prev.plastic_usage.non_recyclables +
          prev.plastic_usage.bulk_plastic,
      },
    }));
    setUsageData((prev) => [...prev, newEntry]);
    setDrawerOpen(false);
  };

  return (
    <div
      className="w-full p-4 mt-24 px-20"
      style={{ transition: "transform 1s ease-in-out" }}
    >
      <a href="/user" className="underline ml-2">
        Back
      </a>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="text-3xl gap-8">
            Plastic Usage Analysis - {data[0].name} (Total:{" "}
            {totalSum.toFixed(2)} lbs)
          </CardTitle>

          <Button className="mt-8 w-64" onClick={() => setDrawerOpen(true)}>
            Add Plastic Usage
          </Button>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="table">
            <TabsContent value="table">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-green-600 font-semibold">
                      Recyclables
                    </TableHead>
                    <TableHead className="text-red-600 font-semibold">
                      Single Use
                    </TableHead>
                    <TableHead className="text-red-600 font-semibold">
                      Non-Recyclables
                    </TableHead>
                    <TableHead className="text-blue-600 font-semibold">
                      Bulk Plastic
                    </TableHead>
                    <TableHead className="font-semibold">Total [Lbs]</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {usageData.map((entry, index) => (
                    <TableRow key={index}>
                      <TableCell>{entry.date}</TableCell>
                      <TableCell className="text-green-500 font-medium">
                        {entry.plastic_usage.recyclables}
                      </TableCell>
                      <TableCell className="text-red-500 font-medium">
                        {entry.plastic_usage.single_use_plastics}
                      </TableCell>
                      <TableCell className="text-red-500 font-medium">
                        {entry.plastic_usage.non_recyclables}
                      </TableCell>
                      <TableCell className="text-blue-600">
                        {entry.plastic_usage.bulk_plastic}
                      </TableCell>
                      <TableCell className="font-semibold">
                        {entry.plastic_usage.total}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {drawerOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setDrawerOpen(false)}
          ></div>

          <div
            className="fixed bottom-0 left-0 w-full bg-white p-6 shadow-lg transition-transform transform translate-y-0"
            style={{ transition: "transform 1s ease-in-out" }}
          >
            <h2 className="text-xl font-semibold mb-4">
              Add Plastic Usage Entry
            </h2>
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Date"
                value={newEntry.date}
                onChange={(e) =>
                  setNewEntry((prev) => ({ ...prev, date: e.target.value }))
                }
              />
              <Input
                type="number"
                name="recyclables"
                placeholder="Recyclables"
                onChange={handleInputChange}
              />
              <Input
                type="number"
                name="single_use_plastics"
                placeholder="Single Use Plastics"
                onChange={handleInputChange}
              />
              <Input
                type="number"
                name="non_recyclables"
                placeholder="Non-Recyclables"
                onChange={handleInputChange}
              />
              <Input
                type="number"
                name="bulk_plastic"
                placeholder="Bulk Plastic"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex space-x-4 mt-4">
              <Button onClick={handleAddEntry}>Add</Button>
              <Button variant="secondary" onClick={() => setDrawerOpen(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
