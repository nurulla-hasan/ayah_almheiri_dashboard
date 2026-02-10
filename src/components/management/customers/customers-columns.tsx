import type { ColumnDef } from "@tanstack/react-table";
import { Mail, Phone, Award } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import CustomerViewModal from "./view-modal";

export type Customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  totalOrders: number;
  loyaltyStamps: number;
  maxStamps: number;
  totalSpent: string;
  joinDate: string;
  initials: string;
};

export const customersColumns: ColumnDef<Customer>[] = [
  {
    accessorKey: "name",
    header: "CUSTOMER",
    cell: ({ row }) => {
      const customer = row.original;
      return (
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarFallback>{customer.initials}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-foreground">
            {customer.name}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "contact",
    header: "CONTACT",
    cell: ({ row }) => {
      const customer = row.original;
      return (
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Mail className="h-3.5 w-3.5" />
            {customer.email}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Phone className="h-3.5 w-3.5" />
            {customer.phone}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "totalOrders",
    header: "TOTAL ORDERS",
    cell: ({ row }) => (
      <span className="text-sm font-bold text-foreground">
        {row.original.totalOrders}
      </span>
    ),
  },
  {
    accessorKey: "loyaltyStamps",
    header: "LOYALTY STAMPS",
    cell: ({ row }) => {
      const { loyaltyStamps, maxStamps } = row.original;
      const percentage = Math.min((loyaltyStamps / maxStamps) * 100, 100);

      return (
        <div className="flex flex-col gap-1.5 min-w-25">
          <div className="flex items-center gap-1 text-xs font-bold text-blue-600">
            <Award className="h-3.5 w-3.5" />
            {loyaltyStamps}/{maxStamps}
          </div>
          <div className="h-1.5 w-full bg-blue-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-300"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "totalSpent",
    header: "TOTAL SPENT",
    cell: ({ row }) => (
      <span className="text-sm font-bold text-green-600">
        {row.original.totalSpent}
      </span>
    ),
  },
  {
    accessorKey: "joinDate",
    header: "JOIN DATE",
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">
        {row.original.joinDate}
      </span>
    ),
  },
  {
    id: "actions",
    header: () => <div className="text-end mr-2">ACTIONS</div>,
    cell: ({ row }) => (
      <div className="text-end">
        <CustomerViewModal customer={row.original} />
      </div>
    ),
  },
];
