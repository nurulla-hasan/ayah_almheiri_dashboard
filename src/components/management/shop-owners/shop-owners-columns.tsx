/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { ShopOwnerViewModal } from "./shop-owner-view-modal";

export type ShopOwnerStatus = "Pending" | "Approved" | "Rejected";

export type ShopOwner = {
  id: string;
  shopName: string;
  ownerName: string;
  email: string;
  phone: string;
  status: ShopOwnerStatus;
  joinedDate: string;
  address: string;
  licenseNumber: string;
  description: string;
};

export const shopOwnersColumns: ColumnDef<ShopOwner>[] = [
  {
    accessorKey: "shopName",
    header: "Shop Name",
    cell: ({ row }) => (
      <span className="text-sm font-semibold text-foreground">
        {row.original.shopName}
      </span>
    ),
  },
  {
    accessorKey: "ownerName",
    header: "Owner",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="text-sm font-medium text-foreground">
          {row.original.ownerName}
        </span>
        <span className="text-xs text-muted-foreground">
          {row.original.email}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">
        {row.original.phone}
      </span>
    ),
  },
  {
    accessorKey: "joinedDate",
    header: "Joined Date",
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground whitespace-nowrap">
        {row.original.joinedDate}
      </span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      let variant: "destructive" | "warning" | "success" | "default" = "default";

      switch (status) {
        case "Pending":
          variant = "warning";
          break;
        case "Approved":
          variant = "success";
          break;
        case "Rejected":
          variant = "destructive";
          break;
      }

      return <Badge variant={variant as any}>{status}</Badge>;
    },
  },
  {
    id: "actions",
    header: () => <div className="text-right">Actions</div>,
    cell: ({ row }) => (
      <div className="flex justify-end">
        <ShopOwnerViewModal shopOwner={row.original} />
      </div>
    ),
  },
];
