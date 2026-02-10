import { useState } from "react";
import { ModalWrapper } from "@/components/ui/custom/modal-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export type Admin = {
  id: string;
  name: string;
  email: string;
  role: "Super Admin" | "Manager" | "Editor";
  joinedDate: string;
};

interface AdminModalProps {
  mode: "create" | "edit";
  admin?: Admin;
  trigger?: React.ReactNode;
}

export const AdminModal = ({ mode, admin, trigger }: AdminModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <ModalWrapper
      open={open}
      onOpenChange={setOpen}
      title={mode === "create" ? "Add New Admin" : "Edit Admin"}
      actionTrigger={
        trigger || (
          <Button className="bg-primary/80 hover:bg-primary">
            + Add New Admin
          </Button>
        )
      }
    >
      <div className="p-6">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="font-medium text-muted-foreground">Full Name</Label>
            <Input id="name" placeholder="John Doe" defaultValue={admin?.name} />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="font-medium text-muted-foreground">Email Address</Label>
            <Input id="email" type="email" placeholder="john@example.com" defaultValue={admin?.email} />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="role" className="font-medium text-muted-foreground">Role</Label>
            <Select defaultValue={admin?.role || "Editor"}>
              <SelectTrigger id="role">
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Super Admin">Super Admin</SelectItem>
                <SelectItem value="Manager">Manager</SelectItem>
                <SelectItem value="Editor">Editor</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {mode === "create" && (
            <div className="flex flex-col gap-2">
              <Label htmlFor="password" className="font-medium text-muted-foreground">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <Button variant="outline" className="flex-1" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button className="flex-1" onClick={() => setOpen(false)}>
              {mode === "create" ? "Add Admin" : "Save Changes"}
            </Button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};
