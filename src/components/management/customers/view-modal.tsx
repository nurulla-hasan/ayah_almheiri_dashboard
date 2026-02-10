import { useState } from "react";
import { Eye, Mail, Phone, Calendar, User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ModalWrapper } from "@/components/ui/custom/modal-wrapper";
import { Badge } from "@/components/ui/badge";
import { type Customer } from "./customers-columns";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CustomerViewModalProps {
  customer: Customer;
}

const CustomerViewModal = ({ customer }: CustomerViewModalProps) => {
  const [open, setOpen] = useState(false);

  const recentOrders = [
    { id: "ORD-1234", item: "Hot Coffee", price: "24.50AED" },
    { id: "ORD-1198", item: "Cold Coffee", price: "32.00AED" },
    { id: "ORD-1145", item: "Hot & Cold Drink", price: "28.00AED" },
  ];

  return (
    <ModalWrapper
      open={open}
      onOpenChange={setOpen}
      title="Customer Details"
      actionTrigger={
        <Button variant="outline" size="sm">
          <Eye className="h-4 w-4 mr-2" />
          View
        </Button>
      }
    >
      <ScrollArea className="max-h-[70vh]">
        <div className="p-6 space-y-6">
          {/* Header Info - Clean Shadcn style */}
          <div className="flex items-center gap-4 p-4 rounded-xl border bg-muted/30">
            <Avatar className="h-16 w-16 border-2 border-background shadow-sm">
              <AvatarFallback className="bg-primary/10 text-primary font-bold text-xl">
                {customer.initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <h4 className="text-xl font-bold text-foreground leading-tight">
                {customer.name}
              </h4>
              <p className="text-sm text-muted-foreground">{customer.email}</p>
              <div className="flex mt-1">
                <Badge variant="secondary" className="font-medium">
                  Active Member
                </Badge>
              </div>
            </div>
          </div>

          {/* Stats Grid - Using Shadcn/Card style containers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border bg-card shadow-sm flex flex-col gap-1">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Total Orders
              </p>
              <p className="text-2xl font-black text-foreground">
                {customer.totalOrders}
              </p>
            </div>
            <div className="p-4 rounded-xl border bg-card shadow-sm flex flex-col gap-1">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Total Spent
              </p>
              <p className="text-2xl font-black text-primary">
                {customer.totalSpent}
              </p>
            </div>
            <div className="p-4 rounded-xl border bg-card shadow-sm flex flex-col gap-1">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Loyalty Stamps
              </p>
              <p className="text-2xl font-black text-orange-600">
                {customer.loyaltyStamps}/{customer.maxStamps}
              </p>
            </div>
            <div className="p-4 rounded-xl border bg-card shadow-sm flex flex-col gap-1">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Member Since
              </p>
              <p className="text-2xl font-black text-foreground">
                {customer.joinDate}
              </p>
            </div>
          </div>

          {/* Contact Details - Extra Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border bg-muted/10 space-y-3">
              <h5 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                Contact Information
              </h5>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{customer.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{customer.phone}</span>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-xl border bg-muted/10 space-y-3">
              <h5 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                Account Info
              </h5>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Joined: {customer.joinDate}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span>ID: #{customer.id}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Order History */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h5 className="text-sm font-bold text-foreground uppercase tracking-wider">
                Recent Order History
              </h5>
              <Badge
                variant="outline"
                className="text-[10px] uppercase font-bold"
              >
                Last 3 Orders
              </Badge>
            </div>
            <div className="space-y-2">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-4 rounded-xl border bg-card hover:bg-muted/30 transition-colors shadow-sm"
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-bold text-foreground">
                      Order #{order.id}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {order.item}
                    </span>
                  </div>
                  <span className="text-sm font-black text-primary">
                    {order.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </ModalWrapper>
  );
};

export default CustomerViewModal;
