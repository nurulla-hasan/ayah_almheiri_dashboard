/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { ModalWrapper } from "@/components/ui/custom/modal-wrapper";
import { type Order } from "./orders-columns";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Clock, User, ShoppingBag, Truck, Receipt, Eye } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface OrderViewModalProps {
  order: Order;
  trigger?: React.ReactNode;
}

export function OrderViewModal({ order, trigger }: OrderViewModalProps) {
  const [open, setOpen] = useState(false);

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Pending":
        return "destructive";
      case "Preparing":
        return "warning";
      case "Ready":
        return "info";
      case "Completed":
        return "success";
      default:
        return "default";
    }
  };

  return (
    <ModalWrapper
      open={open}
      onOpenChange={setOpen}
      title={`Order #${order.orderNumber}`}
      description={`Details for order placed ${order.timeAgo}`}
      actionTrigger={
        trigger || (
          <Button variant="outline" size="icon-sm">
            <Eye />
          </Button>
        )
      }
      showClose={true}
    >
      <ScrollArea className="h-[50vh] whitespace-nowrap">
        <div className="p-6 space-y-6">
          {/* Status Badge */}
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground font-medium">
                Order Status
              </span>
              <Badge
                variant={getStatusVariant(order.status) as any}
                className="text-sm px-3 py-1"
              >
                {order.status}
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-4 bg-muted/30 p-4 rounded-lg border">
              <div className="space-y-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                  Order Date
                </span>
                <p className="text-sm font-medium">{order.date}</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                  Time
                </span>
                <p className="text-sm font-medium">{order.timeAgo}</p>
              </div>
            </div>

          <Separator />

          {/* Customer Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-muted-foreground">
                <User className="h-4 w-4" />
                <span className="text-xs font-medium uppercase tracking-wider">
                  Customer
                </span>
              </div>
              <p className="font-medium text-sm">{order.customerName}</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span className="text-xs font-medium uppercase tracking-wider">
                  Time
                </span>
              </div>
              <p className="font-medium text-sm">{order.timeAgo}</p>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="bg-muted/30 p-4 rounded-lg space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <Truck className="h-4 w-4" />
              <span className="font-medium text-sm">Delivery Information</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground block text-xs mb-1">
                  Type
                </span>
                <span className="font-medium">{order.deliveryType}</span>
              </div>
              <div>
                <span className="text-muted-foreground block text-xs mb-1">
                  Details
                </span>
                <span className="font-medium">
                  {order.deliveryDetails || "N/A"}
                </span>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <ShoppingBag className="h-4 w-4" />
              <span className="font-medium text-sm">Order Items</span>
            </div>
            <div className="border rounded-md divide-y">
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="p-3 text-sm flex justify-between items-center"
                >
                  <span>{item}</span>
                  <span className="text-muted-foreground">x1</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Total Amount */}
          <div className="flex justify-between items-center bg-primary/5 p-4 rounded-lg border border-primary/10">
            <div className="flex items-center gap-2">
              <Receipt className="h-4 w-4 text-primary" />
              <span className="font-medium text-primary">Total Amount</span>
            </div>
            <span className="text-xl font-bold">{order.totalAmount}</span>
          </div>
        </div>
      </ScrollArea>
    </ModalWrapper>
  );
}
