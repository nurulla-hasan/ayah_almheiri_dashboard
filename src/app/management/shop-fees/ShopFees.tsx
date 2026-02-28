import { useMemo } from "react";
import PageLayout from "@/components/common/page-layout";
import PageHeader from "@/components/ui/custom/page-header";
import { DataTable } from "@/components/ui/custom/data-table";
import { Button } from "@/components/ui/button";
import { Save, Percent } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  getShopFeeColumns,
  type ShopFee,
} from "@/components/management/shop-fees/shop-fees-columns";

const INITIAL_DATA: ShopFee[] = [
  {
    id: "1",
    name: "Main Branch",
    location: "Downtown",
    isFeeActive: true,
    feePercentage: 10,
    status: "Active",
  },
  {
    id: "2",
    name: "North Branch",
    location: "North District",
    isFeeActive: false,
    feePercentage: 10,
    status: "Active",
  },
  {
    id: "3",
    name: "South Branch",
    location: "South Side",
    isFeeActive: true,
    feePercentage: 12,
    status: "Active",
  },
  {
    id: "4",
    name: "West Branch",
    location: "West End",
    isFeeActive: false,
    feePercentage: 8,
    status: "Inactive",
  },
];

const ShopFees = () => {
  const globalFee = 10;
  const columns = useMemo(() => getShopFeeColumns({ globalFee }), [globalFee]);

  return (
    <PageLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <PageHeader
            title="Shop Fees"
            description="Set global commission for all shops"
          />

          <div className="flex items-center gap-4">
            <div className="relative w-24">
              <Input
                type="number"
                placeholder="Add Global Fee"
                className="pr-8 font-bold text-primary"
              />
              <Percent className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <Button>
              <Save /> Save Changes
            </Button>
          </div>
        </div>

        <DataTable columns={columns} data={INITIAL_DATA} />
      </div>
    </PageLayout>
  );
};

export default ShopFees;
