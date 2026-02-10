import { type ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Trash2, Edit, User, ShieldCheck, UserCog, UserCheck } from "lucide-react";
import { ConfirmationModal } from "@/components/ui/custom/confirmation-modal";
import { AdminModal, type Admin } from "./admin-modal";

export const adminColumns: ColumnDef<Admin>[] = [
  {
    accessorKey: "name",
    header: "ADMIN NAME",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <User className="h-4 w-4" />
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-foreground">{row.getValue("name")}</span>
          <span className="text-xs text-muted-foreground">{row.original.email}</span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "role",
    header: "ROLE",
    cell: ({ row }) => {
      const role = row.getValue("role") as string;
      return (
        <div className="flex items-center gap-2">
          {role === "Super Admin" && <ShieldCheck className="h-4 w-4 text-purple-600" />}
          {role === "Manager" && <UserCheck className="h-4 w-4 text-blue-600" />}
          {role === "Editor" && <UserCog className="h-4 w-4 text-orange-600" />}
          <span className="text-muted-foreground">{role}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "joinedDate",
    header: "JOINED DATE",
    cell: ({ row }) => (
      <span className="text-muted-foreground">{row.getValue("joinedDate")}</span>
    ),
  },
  {
    id: "actions",
    header: () => <div className="text-right">ACTIONS</div>,
    cell: ({ row }) => (
      <div className="flex items-center justify-end">
        <AdminModal 
          mode="edit" 
          admin={row.original} 
          trigger={
            <Button variant="ghost" size="icon">
              <Edit />
            </Button>
          } 
        />
        <ConfirmationModal
          title="Delete Admin"
          description={`Are you sure you want to delete admin "${row.original.name}"? This action cannot be undone.`}
          onConfirm={() => {
            console.log("Deleting admin:", row.original.id);
          }}
          trigger={
            <Button variant="ghost" size="icon" className="text-destructive">
              <Trash2 />
            </Button>
          }
        />
      </div>
    ),
  },
];
