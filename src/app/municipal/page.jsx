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

export default function TableDemo() {
  return (
    <div className="mt-24 p-8">
      <Table>
        <TableCaption>Plastic usage data for Mumbai households.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Household Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Residence</TableHead>
            <TableHead>Plastic Usage (kg)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((household) => (
            <TableRow key={household.household_id}>
              <TableCell className="font-medium">{household.name}</TableCell>
              <TableCell>{household.email}</TableCell>
              <TableCell>
                {household.residence.locality}, {household.residence.district},{" "}
                {household.residence.state}, {household.residence.country}
              </TableCell>
              <TableCell>
                <ul>
                  <li>
                    Single-use Plastics:{" "}
                    {household.plastic_usage.single_use_plastics}
                  </li>
                  <li>Recyclables: {household.plastic_usage.recyclables}</li>
                  <li>
                    Non-recyclables: {household.plastic_usage.non_recyclables}
                  </li>
                  <li>Bulk Plastic: {household.plastic_usage.bulk_plastic}</li>
                  <li>Total: {household.plastic_usage.total}</li>
                </ul>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
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
              kg
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
