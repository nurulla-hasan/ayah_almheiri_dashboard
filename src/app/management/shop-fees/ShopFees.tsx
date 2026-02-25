
import { useState, useMemo } from "react";
import PageLayout from "@/components/common/page-layout";
import PageHeader from "@/components/ui/custom/page-header";
import { DataTable } from "@/components/ui/custom/data-table";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { toast } from "sonner";
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
  const [data, setData] = useState<ShopFee[]>(INITIAL_DATA);
  const [hasChanges, setHasChanges] = useState(false);

  const handleFeeToggle = (id: string, checked: boolean) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isFeeActive: checked } : item
      )
    );
    setHasChanges(true);
  };

  const handleFeeChange = (id: string, value: string) => {
    if (value === "") {
      setData((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, feePercentage: "" } : item
        )
      );
      setHasChanges(true);
      return;
    }

    const numValue = parseFloat(value);
    if (isNaN(numValue) || numValue < 0 || numValue > 100) return;

    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, feePercentage: numValue } : item
      )
    );
    setHasChanges(true);
  };

  const columns = useMemo(
    () =>
      getShopFeeColumns({
        onFeeToggle: handleFeeToggle,
        onFeeChange: handleFeeChange,
      }),
    []
  );

  const handleSaveChanges = () => {
    // API call would go here
    console.log("Saving changes:", data);
    toast.success("Fee settings updated successfully");
    setHasChanges(false);
  };

  return (
    <PageLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <PageHeader
            title="Shop Fees Management"
            description="Manage commission fees and percentages for each shop"
          />
          <Button
            onClick={handleSaveChanges}
            disabled={!hasChanges}
            className="w-full md:w-auto"
          >
            <Save />
            Save Changes
          </Button>
        </div>

        <DataTable columns={columns} data={data} />
      </div>
    </PageLayout>
  );
};

export default ShopFees;

