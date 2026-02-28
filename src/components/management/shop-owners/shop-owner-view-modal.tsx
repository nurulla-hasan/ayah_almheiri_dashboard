/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { ModalWrapper } from "@/components/ui/custom/modal-wrapper";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Building2, User, Phone, Mail, MapPin, FileText, Eye, CheckCircle, XCircle } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { type ShopOwner } from "./shop-owners-columns";
import { toast } from "sonner";

interface ShopOwnerViewModalProps {
  shopOwner: ShopOwner;
  trigger?: React.ReactNode;
}

export function ShopOwnerViewModal({ shopOwner, trigger }: ShopOwnerViewModalProps) {
  const [open, setOpen] = useState(false);

  const handleApprove = () => {
    toast.success(`${shopOwner.shopName} has been approved!`);
    setOpen(false);
  };

  const handleReject = () => {
    toast.error(`${shopOwner.shopName} has been rejected.`);
    setOpen(false);
  };

  return (
    <ModalWrapper
      open={open}
      onOpenChange={setOpen}
      title={`Shop Details: ${shopOwner.shopName}`}
      description="Review shop owner's information for approval"
      actionTrigger={
        trigger || (
          <Button variant="outline" size="icon-sm">
            <Eye />
          </Button>
        )
      }
      showClose={true}
    >
      <ScrollArea className="h-[50vh]">
        <div className="p-6 space-y-6">
          {/* Status Badge */}
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground font-medium">
              Registration Status
            </span>
            <Badge
              variant={
                shopOwner.status === "Approved"
                  ? "success"
                  : shopOwner.status === "Rejected"
                  ? "destructive"
                  : ("warning" as any)
              }
              className="text-sm px-3 py-1"
            >
              {shopOwner.status}
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-muted/30 p-4 rounded-lg border">
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                Joined Date
              </span>
              <p className="text-sm font-medium">{shopOwner.joinedDate}</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                License No.
              </span>
              <p className="text-sm font-medium">{shopOwner.licenseNumber}</p>
            </div>
          </div>

          <Separator />

          {/* Shop Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <Building2 />
              <span className="font-medium text-sm">Shop Information</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shop Name:</span>
                <span className="font-medium">{shopOwner.shopName}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-muted-foreground">Description:</span>
                <span className="text-foreground leading-relaxed italic border-l-2 border-primary/20 pl-3">
                  "{shopOwner.description}"
                </span>
              </div>
              <div className="flex gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                <span className="text-foreground">{shopOwner.address}</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Owner Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <User />
              <span className="font-medium text-sm">Owner Information</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-muted/20 p-3 rounded-md border border-dashed">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {shopOwner.ownerName.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Full Name</span>
                  <span className="text-sm font-medium">{shopOwner.ownerName}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-muted/20 p-3 rounded-md border border-dashed">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Phone</span>
                  <span className="text-sm font-medium">{shopOwner.phone}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-muted/20 p-3 rounded-md border border-dashed col-span-full">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Email</span>
                  <span className="text-sm font-medium">{shopOwner.email}</span>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Documents Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <FileText />
              <span className="font-medium text-sm">Business Documents</span>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-primary/10 rounded flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Trade_License_2024.pdf</p>
                  <p className="text-xs text-muted-foreground">2.4 MB</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                View
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          {shopOwner.status === "Pending" && (
            <div className="flex flex-col md:flex-row gap-3 pt-4">
              <Button
                onClick={handleApprove}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white gap-2"
              >
                <CheckCircle />
                Approve Shop
              </Button>
              <Button
                onClick={handleReject}
                variant="destructive"
                className="flex-1 gap-2"
              >
                <XCircle />
                Reject Shop
              </Button>
            </div>
          )}
        </div>
      </ScrollArea>
    </ModalWrapper>
  );
}
