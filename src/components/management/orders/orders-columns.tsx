/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";

export type OrderStatus = "Pending" | "Preparing" | "Ready" | "Completed";

export type Order = {
  id: string;
  orderNumber: string;
  timeAgo: string;
  customerName: string;
  deliveryType: string;
  deliveryDetails: string;
  items: string[];
  totalAmount: string;
  status: OrderStatus;
};

export const ordersColumns: ColumnDef<Order>[] = [
  {
    accessorKey: "orderNumber",
    header: "Order ID",
    cell: ({ row }) => (
      <span className="text-sm font-medium text-foreground">
        {row.original.orderNumber}
      </span>
    ),
  },
  {
    accessorKey: "customerName",
    header: "Customer",
    cell: ({ row }) => (
      <span className="text-sm font-medium text-foreground">
        {row.original.customerName}
      </span>
    ),
  },
  {
    accessorKey: "items",
    header: "Items",
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">
        {row.original.items.join(", ")}
      </span>
    ),
  },
  {
    accessorKey: "totalAmount",
    header: "Total",
    cell: ({ row }) => (
      <span className="text-sm font-medium text-foreground">
        {row.original.totalAmount}
      </span>
    ),
  },
  {
    accessorKey: "deliveryType",
    header: "Pickup",
    cell: ({ row }) => (
      <Badge variant="secondary">
        {row.original.deliveryType}
      </Badge>
    ),
  },
  {
    accessorKey: "deliveryDetails",
    header: "Details",
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">
        {row.original.deliveryDetails || "-"}
      </span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      let variant: "destructive" | "warning" | "info" | "success" | "default" = "default";

      switch (status) {
        case "Pending":
          variant = "destructive";
          break;
        case "Preparing":
          variant = "warning";
          break;
        case "Ready":
          variant = "info";
          break;
        case "Completed":
          variant = "success";
          break;
      }

      return (
        <Badge variant={variant as any}>
          {status}
        </Badge>
      );
    },
  },
];
