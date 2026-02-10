import { type ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash2, Percent, DollarSign, Calendar, Edit } from "lucide-react";
import { ConfirmationModal } from "@/components/ui/custom/confirmation-modal";
import { PromotionModal } from "./promotion-modal";

export type Promotion = {
  id: string;
  name: string;
  type: "Percentage" | "Fixed Amount";
  value: string;
  code: string;
  period: string;
  uses: number;
  status: "Active" | "Expired";
};

export const promotionsColumns: ColumnDef<Promotion>[] = [
  {
    accessorKey: "name",
    header: "PROMOTION NAME",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <div className={`h-9 w-9 rounded-lg flex items-center justify-center ${row.original.type === "Percentage" ? "bg-primary/10 text-primary" : "bg-green-100 text-green-600"}`}>
          {row.original.type === "Percentage" ? <Percent className="h-4 w-4" /> : <DollarSign className="h-4 w-4" />}
        </div>
        <span className="font-medium text-foreground">{row.getValue("name")}</span>
      </div>
    ),
  },
  {
    accessorKey: "type",
    header: "TYPE",
    cell: ({ row }) => (
      <span className="text-muted-foreground">{row.getValue("type")}</span>
    ),
  },
  {
    accessorKey: "value",
    header: "VALUE",
    cell: ({ row }) => (
      <span className="font-bold text-foreground">{row.getValue("value")}</span>
    ),
  },
  {
    accessorKey: "code",
    header: "CODE",
    cell: ({ row }) => (
      <Badge variant="secondary" className="bg-muted text-muted-foreground font-mono px-2 py-0.5 border-none uppercase">
        {row.getValue("code")}
      </Badge>
    ),
  },
  {
    accessorKey: "period",
    header: "PERIOD",
    cell: ({ row }) => (
      <div className="flex items-center gap-2 text-muted-foreground text-sm">
        <Calendar className="h-3.5 w-3.5" />
        {row.getValue("period")}
      </div>
    ),
  },
  {
    accessorKey: "uses",
    header: "USES",
    cell: ({ row }) => (
      <span className="font-bold text-foreground">{row.getValue("uses")}</span>
    ),
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge 
          variant={status === "Active" ? "success" : "muted"}
        >
          {status}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="text-right">ACTIONS</div>,
    cell: ({ row }) => (
      <div className="flex items-center justify-end gap-2">
        <PromotionModal 
          mode="edit" 
          promotion={row.original} 
          trigger={
            <Button variant="ghost" size="icon">
              <Edit />
            </Button>
          } 
        />
        <ConfirmationModal
          title="Delete Promotion"
          description={`Are you sure you want to delete the promotion "${row.original.name}"? This action cannot be undone.`}
          onConfirm={() => {
            console.log("Deleting promotion:", row.original.id);
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
