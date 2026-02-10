import { useState } from "react";
import { ModalWrapper } from "@/components/ui/custom/modal-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { type Promotion } from "./promotions-columns";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import { type DateRange } from "react-day-picker";

interface PromotionModalProps {
  mode: "create" | "edit";
  promotion?: Promotion;
  trigger?: React.ReactNode;
}

export const PromotionModal = ({ mode, promotion, trigger }: PromotionModalProps) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<DateRange | undefined>(() => {
    if (promotion?.period) {
      const [from, to] = promotion.period.split(" - ").map(d => new Date(d));
      return { from, to };
    }
    return undefined;
  });

  return (
    <ModalWrapper
      open={open}
      onOpenChange={setOpen}
      title={mode === "create" ? "Create New Promotion" : "Edit Promotion"}
      actionTrigger={
        trigger || (
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            + Create Promotion
          </Button>
        )
      }
    >
      <div className="p-6">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="font-medium text-muted-foreground">Promotion Name</Label>
            <Input 
              id="name" 
              placeholder="e.g., Summer Special" 
              defaultValue={promotion?.name}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="type" className="font-medium text-muted-foreground">Discount Type</Label>
              <Select defaultValue={promotion?.type || "Percentage"}>
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Percentage">Percentage</SelectItem>
                  <SelectItem value="Fixed Amount">Fixed Amount</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="value" className="font-medium text-muted-foreground">Discount Value</Label>
              <Input 
                id="value" 
                type="text" 
                placeholder="0" 
                defaultValue={promotion?.value.replace(/[^0-9.]/g, '')}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="code" className="font-medium text-muted-foreground">Promo Code</Label>
            <Input 
              id="code" 
              placeholder="SUMMER20" 
              defaultValue={promotion?.code}
              className="uppercase font-mono" 
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label className="font-medium text-muted-foreground">Promotion Period</Label>
            <DatePickerWithRange 
              date={date} 
              setDate={setDate} 
              placeholder="Select start and end date"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="limit" className="font-medium text-muted-foreground">Usage Limit (Optional)</Label>
            <Input 
              id="limit" 
              placeholder="Leave empty for unlimited" 
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              className="flex-1"
              onClick={() => setOpen(false)}
            >
              {mode === "create" ? "Create Promotion" : "Save Changes"}
            </Button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};
