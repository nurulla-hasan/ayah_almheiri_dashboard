/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Timer } from "lucide-react";

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
  {
    id: "actions",
    header:() => <div className="flex justify-center">Actions</div>,
    cell: ({ row }) => {
      const status = row.original.status as OrderStatus;
      switch (status) {
        case "Pending":
          return (
            <div className="flex gap-2 w-full">
              <Button variant="outline" className="flex-1">
                <CheckCircle2 /> Accept
              </Button>
              <Button variant="destructive" className="flex-1">
                <XCircle /> Reject
              </Button>
            </div>
          );
        case "Preparing":
          return (
            <Button variant="success" className="w-full">
              <CheckCircle2 /> Mark as Ready
            </Button>
          );
        case "Ready":
          return (
            <Button variant="purple" className="w-full">
              <CheckCircle2 /> Mark as Completed
            </Button>
          );
        case "Completed":
          return (
            <Button variant="outline" className="w-full">
              <Timer /> View Details
            </Button>
          );
        default:
          return null;
      }
    },
  },
];
