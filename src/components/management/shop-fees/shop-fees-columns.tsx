
import { type ColumnDef } from "@tanstack/react-table";
// import { Badge } from "@/components/ui/badge";

export interface ShopFee {
  id: string;
  name: string;
  location: string;
  isFeeActive: boolean;
  feePercentage: number | string;
  status: "Active" | "Inactive";
}

interface ShopFeeColumnsProps {
  globalFee: number;
}

export const getShopFeeColumns = ({
  globalFee,
}: ShopFeeColumnsProps): ColumnDef<ShopFee>[] => [
  {
    accessorKey: "name",
    header: "SHOP NAME",
    cell: ({ row }) => <span className="font-medium">{row.getValue("name")}</span>,
  },
  {
    accessorKey: "location",
    header: "LOCATION",
    cell: ({ row }) => <span>{row.getValue("location")}</span>,
  },
  // {
  //   accessorKey: "status",
  //   header: "STATUS",
  //   cell: ({ row }) => (
  //     <Badge variant={row.getValue("status") === "Active" ? "success" : "secondary"}>
  //       {row.getValue("status")}
  //     </Badge>
  //   ),
  // },
  // {
  //   accessorKey: "isFeeActive",
  //   header: "FEE APPLICABLE",
  //   cell: ({ row }) => (
  //     <div className="flex items-center gap-2">
  //       <Badge variant={row.getValue("isFeeActive") ? "default" : "secondary"} className="rounded-md px-3">
  //         {row.getValue("isFeeActive") ? "Yes" : "No"}
  //       </Badge>
  //     </div>
  //   ),
  // },
  {
    id: "appliedFee",
    header: "APPLIED FEE",
    cell: ({ row }) => (
      <div className="flex items-center gap-1 font-medium">
        <span className={row.original.isFeeActive ? "text-primary" : "text-muted-foreground/50"}>
          {row.original.isFeeActive ? `${globalFee}%` : "0%"}
        </span>
      </div>
    ),
  },
];
