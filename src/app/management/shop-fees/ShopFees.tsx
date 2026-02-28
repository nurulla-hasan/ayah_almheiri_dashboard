import { useMemo } from "react";
import PageLayout from "@/components/common/page-layout";
import { DataTable } from "@/components/ui/custom/data-table";
import { Button } from "@/components/ui/button";
import { Save, Percent } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  getShopFeeColumns,
  type ShopFee,
} from "@/components/management/shop-fees/shop-fees-columns";

const INITIAL_DATA: ShopFee[] = [
  { id: "1", name: "Main Branch", location: "Downtown", isFeeActive: true, feePercentage: 10, status: "Active" },
  { id: "2", name: "North Branch", location: "North District", isFeeActive: false, feePercentage: 10, status: "Active" },
  { id: "3", name: "South Branch", location: "South Side", isFeeActive: true, feePercentage: 12, status: "Active" },
  { id: "4", name: "West Branch", location: "West End", isFeeActive: false, feePercentage: 8, status: "Inactive" },
];

const ShopFees = () => {
  const globalFee = 10;
  const columns = useMemo(() => getShopFeeColumns({ globalFee }), [globalFee]);

  return (
    <PageLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 bg-card p-6 rounded-2xl border shadow-sm">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight">Shop Fees</h2>
            <p className="text-muted-foreground text-sm">Set global commission for all shops</p>
          </div>
          
          <div className="flex items-end gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-muted-foreground uppercase tracking-tight text-xs">Shop Percentage</label>
              <div className="relative w-32">
                <Input
                  type="number"
                  value={globalFee}
                  readOnly
                  className="h-10 pr-8 font-bold text-primary focus-visible:ring-0 cursor-default"
                />
                <Percent className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            <Button 
              disabled
              className="h-10 gap-2 px-6 opacity-50 cursor-not-allowed"
            >
              <Save className="h-4 w-4" /> Save Changes
            </Button>
          </div>
        </div>

        <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
          <DataTable columns={columns} data={INITIAL_DATA} />
        </div>
      </div>
    </PageLayout>
  );
};

export default ShopFees;
