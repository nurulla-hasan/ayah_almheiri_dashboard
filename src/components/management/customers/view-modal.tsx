import { useState } from "react";
import { Eye, Mail, Phone, Award, Calendar, User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ModalWrapper } from "@/components/ui/custom/modal-wrapper";
import { Badge } from "@/components/ui/badge";
import { type Customer } from "./customers-columns";

interface CustomerViewModalProps {
  customer: Customer;
}

const CustomerViewModal = ({ customer }: CustomerViewModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <ModalWrapper
      open={open}
      onOpenChange={setOpen}
      title="Customer Details"
      description="Detailed information about the customer"
      actionTrigger={
        <Button
          variant="outline"
          size="sm"
          className="text-blue-600 border-blue-200 hover:bg-blue-50 hover:text-blue-700"
        >
          <Eye/>
          View
        </Button>
      }
      showClose={true}
    >
      <div className="p-6 space-y-6">
        {/* Header Info */}
        <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-muted-foreground/10">
          <Avatar className="h-16 w-16 text-xl bg-blue-100 text-blue-600 border-2 border-white shadow-sm">
            <AvatarFallback>{customer.initials}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <h4 className="text-xl font-bold text-foreground leading-tight">{customer.name}</h4>
            <p className="text-sm text-muted-foreground">ID: #{customer.id}</p>
            <div className="flex mt-1">
              <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100 border-none">
                Active Member
              </Badge>
            </div>
          </div>
        </div>

        {/* Contact & Date Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-3 p-4 rounded-xl border border-muted-foreground/10 bg-background/50">
            <h5 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Contact Details</h5>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{customer.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{customer.phone}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 p-4 rounded-xl border border-muted-foreground/10 bg-background/50">
            <h5 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Registration</h5>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>Joined on {customer.joinDate}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <User className="h-4 w-4 text-muted-foreground" />
                <span>Individual Account</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 flex flex-col items-center">
            <p className="text-xs font-medium text-blue-600 uppercase">Orders</p>
            <p className="text-2xl font-black text-blue-700 mt-1">{customer.totalOrders}</p>
          </div>
          <div className="p-4 rounded-xl bg-green-50/50 border border-green-100 flex flex-col items-center">
            <p className="text-xs font-medium text-green-600 uppercase">Spent</p>
            <p className="text-2xl font-black text-green-700 mt-1">{customer.totalSpent}</p>
          </div>
          <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-100 flex flex-col items-center">
            <p className="text-xs font-medium text-orange-600 uppercase">Stamps</p>
            <p className="text-2xl font-black text-orange-700 mt-1">{customer.loyaltyStamps}</p>
          </div>
        </div>

        {/* Loyalty Progress */}
        <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/30 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-sm font-bold text-blue-700">
              <Award className="h-4 w-4" />
              Loyalty Progress
            </div>
            <span className="text-sm font-bold text-blue-700">
              {customer.loyaltyStamps}/{customer.maxStamps} Stamps
            </span>
          </div>
          <div className="h-2 w-full bg-blue-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 transition-all duration-500" 
              style={{ width: `${(customer.loyaltyStamps / customer.maxStamps) * 100}%` }}
            />
          </div>
          <p className="text-[10px] text-blue-600/70 mt-2 text-center font-medium italic">
            {customer.maxStamps - customer.loyaltyStamps} more stamps to reach the next reward level!
          </p>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default CustomerViewModal;