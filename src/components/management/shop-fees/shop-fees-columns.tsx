
import { type ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

export interface ShopFee {
  id: string;
  name: string;
  location: string;
  isFeeActive: boolean;
  feePercentage: number | string;
  status: "Active" | "Inactive";
}

interface ShopFeeColumnsProps {
  onFeeToggle: (id: string, checked: boolean) => void;
  onFeeChange: (id: string, value: string) => void;
}

export const getShopFeeColumns = ({
  onFeeToggle,
  onFeeChange,
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
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }) => (
      <Badge variant={row.getValue("status") === "Active" ? "success" : "secondary"}>
        {row.getValue("status")}
      </Badge>
    ),
  },
  {
    accessorKey: "isFeeActive",
    header: "FEE ACTIVE",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Switch
          checked={row.getValue("isFeeActive")}
          onCheckedChange={(checked) => onFeeToggle(row.original.id, checked)}
        />
        <span className="text-sm text-muted-foreground">
          {row.getValue("isFeeActive") ? "On" : "Off"}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "feePercentage",
    header: "FEE PERCENTAGE (%)",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Input
          type="number"
          value={row.getValue("feePercentage")}
          onChange={(e) => onFeeChange(row.original.id, e.target.value)}
          disabled={!row.original.isFeeActive}
          className="w-24"
          min={0}
          max={100}
        />
        <span className="text-sm text-muted-foreground">%</span>
      </div>
    ),
  },
];
