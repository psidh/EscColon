"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { data } from "@/data/mumbai";
import Analytics from "@/components/Analytics";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Comparisons from "./Comparison";

export default function TableDemo() {
  const router = useRouter();
  const [showTable, setShowTable] = useState(true); // State to control table visibility
  const [showAnalytics, setShowAnalytics] = useState(false); // State to control analytics visibility
  return (
    <div className="mt-24 px-16 py-8">
      {/* Buttons */}
      <div className="flex justify-start gap-4 mb-6">
        <Button
          onClick={
            () => router.push("/municipal/add-data") // Navigate to Add Data page
          }
        >
          Add Data
        </Button>
        <Button onClick={() => setShowAnalytics(!showAnalytics)}>
          {showAnalytics ? "Hide Analytics" : "See Analytics"}
        </Button>
      </div>

      {/* Analytics (conditionally rendered) */}
      {showAnalytics && <Analytics />}

      <Comparisons />
      <p className="text-center w-full text-neutral-400 italic mb-6">Plastic usage data for Visakhapatnam households.</p>
      {/* Table (conditionally rendered) */}
      {showTable && (
        <Table className="rounded-t-2xl rounded-2xl">
          <TableHeader className="rounded-t-2xl">
            <TableRow className="bg-neutral-200 rounded-t-2xl">
              <TableHead className="w-[150px]">Household Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Residence</TableHead>
              <TableHead>Plastic Usage (lbs)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((household) => (
              <TableRow key={household.household_id}>
                <TableCell className="font-medium">{household.name}</TableCell>
                <TableCell>{household.email}</TableCell>
                <TableCell>
                  {household.residence.locality}, {household.residence.district}
                  , {household.residence.state}, {household.residence.country}
                </TableCell>
                <TableCell className="bg-neutral-100">
                  <ul>
                    <li>
                      Single-use Plastics:{" "}
                      {household.plastic_usage.single_use_plastics}
                    </li>
                    <li>Recyclables: {household.plastic_usage.recyclables}</li>
                    <li>
                      Non-recyclables: {household.plastic_usage.non_recyclables}
                    </li>
                    <li>
                      Bulk Plastic: {household.plastic_usage.bulk_plastic}
                    </li>
                    <li>Total: {household.plastic_usage.total}</li>
                  </ul>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className="rounded-b-2xl">
            <TableRow className="hover:bg-black hover:text-white bg-black rounded-b-2xl text-xl font-light text-white">
              <TableCell colSpan={3}>
                Total Plastic Usage (All Households)
              </TableCell>
              <TableCell>
                {data
                  .reduce(
                    (sum, household) => sum + household.plastic_usage.total,
                    0
                  )
                  .toFixed(2)}{" "}
                lbs
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      )}
    </div>
  );
}
