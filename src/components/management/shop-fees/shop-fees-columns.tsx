
import { type ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";

export interface ShopFee {
  id: string;
  name: string;
  ownerName: string;
  category: string;
  location: string;
  status: "Active" | "Inactive";
  joinedDate: string;
  feePercentage: number;
  isFeeActive: boolean;
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
    cell: ({ row }) => (
      <div className="flex flex-col gap-0.5">
        <span className="font-bold text-foreground line-clamp-1">
          {row.original.name}
        </span>
        <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
          {row.original.category}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "ownerName",
    header: "OWNER",
    cell: ({ row }) => (
      <span className="text-sm font-medium text-muted-foreground">
        {row.original.ownerName}
      </span>
    ),
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <Badge variant={status === "Active" ? "success" : "muted"} className="font-bold">
          {status}
        </Badge>
      );
    },
  },
  {
    id: "appliedFee",
    header: "APPLIED FEE",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 bg-primary/5 px-2 py-1 rounded-md border border-primary/10">
          <span
            className={`text-sm font-bold ${
              row.original.isFeeActive ? "text-primary" : "text-muted-foreground/40"
            }`}
          >
            {row.original.isFeeActive ? `${globalFee}%` : "0%"}
          </span>
        </div>
      </div>
    ),
  },
];
