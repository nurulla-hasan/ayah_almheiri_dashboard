import { type ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Upload } from "lucide-react";
import { ProductViewModal } from "./view-modal";

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  availability: boolean;
  image?: string;
};

export const productsColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "ITEM NAME",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center border">
          {row.original.image ? (
            <img src={row.original.image} alt={row.original.name} className="h-full w-full object-cover rounded-lg" />
          ) : (
            <Upload className="h-5 w-5 text-muted-foreground" />
          )}
        </div>
        <span className="font-medium text-foreground">{row.getValue("name")}</span>
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: "CATEGORY",
    cell: ({ row }) => (
      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1">
        {row.getValue("category")}
      </Badge>
    ),
  },
  {
    accessorKey: "description",
    header: "DESCRIPTION",
    cell: ({ row }) => (
      <span className="text-muted-foreground text-sm line-clamp-1 max-w-62.5">
        {row.getValue("description")}
      </span>
    ),
  },
  {
    accessorKey: "price",
    header: "PRICE",
    cell: ({ row }) => (
      <span className="font-bold text-foreground">
        {row.getValue("price")}
      </span>
    ),
  },
  {
    accessorKey: "availability",
    header: "AVAILABILITY",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Switch checked={row.getValue("availability")} />
        <span className={`text-sm font-medium ${row.getValue("availability") ? "text-green-600" : "text-red-600"}`}>
          {row.getValue("availability") ? "Available" : "Unavailable"}
        </span>
      </div>
    ),
  },
  {
    id: "actions",
    header: () => <div className="text-right mr-5">VIEW</div>,
    cell: ({ row }) => (
      <div className="flex justify-end">
        <ProductViewModal product={row.original} />
      </div>
    ),
  },
];
