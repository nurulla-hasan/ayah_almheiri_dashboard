import PageLayout from "@/components/common/page-layout";
import PageHeader from "@/components/ui/custom/page-header";
import { DataTable } from "@/components/ui/custom/data-table";
import {
  type ShopOwner,
  shopOwnersColumns,
} from "@/components/management/shop-owners/shop-owners-columns";
import { Download, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const shopOwnersData: ShopOwner[] = [
  {
    id: "1",
    shopName: "Urban Brews Coffee",
    ownerName: "Sarah Ahmed",
    email: "sarah.ahmed@example.com",
    phone: "+971 50 123 4567",
    status: "Pending",
    joinedDate: "2024-03-10",
    address: "Downtown Dubai, Building 4, Shop 12",
    licenseNumber: "TR-98234-X",
    description:
      "Specialty coffee shop focusing on organic beans and sustainable brewing methods.",
  },
  {
    id: "2",
    shopName: "Gourmet Garden",
    ownerName: "John Doe",
    email: "john.doe@example.com",
    phone: "+971 52 987 6543",
    status: "Approved",
    joinedDate: "2024-02-15",
    address: "Jumeirah Beach Residence, Walk 102",
    licenseNumber: "TR-12938-A",
    description:
      "Fresh farm-to-table restaurant with a focus on local ingredients.",
  },
  {
    id: "3",
    shopName: "Tech Hub Cafe",
    ownerName: "Michael Smith",
    email: "michael.tech@example.com",
    phone: "+971 55 555 1234",
    status: "Rejected",
    joinedDate: "2024-01-20",
    address: "Dubai Internet City, Phase 2",
    licenseNumber: "TR-88273-Y",
    description: "A co-working space and cafe designed for digital nomads.",
  },
  {
    id: "4",
    shopName: "Vintage Vinyls & Coffee",
    ownerName: "Emma Watson",
    email: "emma.vintage@example.com",
    phone: "+971 50 999 8888",
    status: "Pending",
    joinedDate: "2024-03-12",
    address: "Al Quoz, Warehouse 14, Street 8",
    licenseNumber: "TR-77213-V",
    description:
      "Unique combination of a record store and a premium coffee bar.",
  },
  {
    id: "5",
    shopName: "The Healthy Bite",
    ownerName: "David Lee",
    email: "david.lee@example.com",
    phone: "+971 52 444 3333",
    status: "Approved",
    joinedDate: "2024-02-28",
    address: "Dubai Marina Mall, Level 2",
    licenseNumber: "TR-33298-H",
    description:
      "Specialized in healthy snacks, protein shakes, and vegan desserts.",
  },
];

const ShopOwners = () => {
  // const handleExport = () => {
  //   const ws = XLSX.utils.json_to_sheet(filteredData);
  //   const wb = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, "ShopOwners");
  //   XLSX.writeFile(wb, `shop_owners_${new Date().toISOString().split('T')[0]}.xlsx`);
  // };

  return (
    <PageLayout>
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <PageHeader
          title="Shop Owner Requests"
          description="Review and manage new shop owner registrations"
        />

        <div className="flex items-center gap-2">
          <div className="relative flex items-center">
            <Search className="absolute left-4 size-4 text-muted-foreground/50" />
            <Input
              placeholder="Search customers by name or email..."
              className="pl-11 w-full md:w-70 border-muted-foreground/20"
            />
          </div>
          <Button onClick={() => {}} variant="outline">
            Export <Download />
          </Button>
        </div>
      </div>

      <DataTable columns={shopOwnersColumns} data={shopOwnersData} />
    </PageLayout>
  );
};

export default ShopOwners;
