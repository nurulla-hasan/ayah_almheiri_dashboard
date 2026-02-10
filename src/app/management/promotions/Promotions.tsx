import PageLayout from "@/components/common/page-layout";
import { DataTable } from "@/components/ui/custom/data-table";
import PageHeader from "@/components/ui/custom/page-header";
import { Card, CardContent } from "@/components/ui/card";
import {
  promotionsColumns,
  type Promotion,
} from "@/components/management/promotions/promotions-columns";
import { PromotionModal } from "@/components/management/promotions/promotion-modal";

const promotions: Promotion[] = [
  {
    id: "1",
    name: "Ramadan",
    type: "Percentage",
    value: "20%",
    code: "SUMMER20",
    period: "2024-06-01 - 2024-08-31",
    uses: 145,
    status: "Active",
  },
  {
    id: "2",
    name: "Eid AL-Fitr",
    type: "Fixed Amount",
    value: "$10",
    code: "FIRST10",
    period: "2024-01-01 - 2024-12-31",
    uses: 89,
    status: "Active",
  },
  {
    id: "3",
    name: "Valentine's Day",
    type: "Percentage",
    value: "15%",
    code: "LUNCH15",
    period: "2024-05-01 - 2024-07-31",
    uses: 234,
    status: "Active",
  },
  {
    id: "4",
    name: "Easter",
    type: "Fixed Amount",
    value: "$5",
    code: "WEEKEND5",
    period: "2024-03-01 - 2024-05-31",
    uses: 67,
    status: "Expired",
  },
  {
    id: "5",
    name: "Ramadan",
    type: "Percentage",
    value: "10%",
    code: "STUDENT10",
    period: "2024-01-01 - 2024-12-31",
    uses: 156,
    status: "Active",
  },
];

const meta = {
  total: promotions.length,
  page: 1,
  limit: 10,
  totalPages: 1,
};

const Promotions = () => {
  const totalPromotions = promotions.length;
  const activePromotions = promotions.filter(p => p.status === "Active").length;
  const totalUses = promotions.reduce((acc, p) => acc + p.uses, 0);
  const revenueImpact = "8,450 AED"; // Keep this as static for now as it's a specific impact metric

  return (
    <PageLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <PageHeader
            title="Promotions & Discounts"
            description="Create and manage promotional offers"
          />
          <PromotionModal mode="create" />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-muted-foreground">Total Promotions</p>
                <p className="text-3xl font-bold">{totalPromotions}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-muted-foreground">Active</p>
                <p className="text-3xl font-bold text-green-600">{activePromotions}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-muted-foreground">Total Uses</p>
                <p className="text-3xl font-bold text-primary/60">{totalUses}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-muted-foreground">Revenue Impact</p>
                <p className="text-3xl font-bold text-primary">{revenueImpact}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Promotions Table */}
          <DataTable columns={promotionsColumns} data={promotions} meta={meta} />
      </div>
    </PageLayout>
  );
};

export default Promotions;
