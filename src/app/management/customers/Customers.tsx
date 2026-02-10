import PageLayout from "@/components/common/page-layout";
import PageHeader from "@/components/ui/custom/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { DataTable } from "@/components/ui/custom/data-table";
import {
  customersColumns,
  type Customer,
} from "@/components/management/customers/customers-columns";

const customersData: Customer[] = [
  {
    id: "1",
    name: "John Smith",
    email: "john@example.com",
    phone: "+1 234 567 8901",
    totalOrders: 24,
    loyaltyStamps: 8,
    maxStamps: 10,
    totalSpent: "586.50AED",
    joinDate: "Jan 15, 2024",
    initials: "JS",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "+1 234 567 8902",
    totalOrders: 18,
    loyaltyStamps: 6,
    maxStamps: 10,
    totalSpent: "586.50AED",
    joinDate: "Feb 3, 2024",
    initials: "SJ",
  },
  {
    id: "3",
    name: "Mike Williams",
    email: "mike@example.com",
    phone: "+1 234 567 8903",
    totalOrders: 31,
    loyaltyStamps: 10,
    maxStamps: 10,
    totalSpent: "586.50AED",
    joinDate: "Dec 20, 2023",
    initials: "MW",
  },
  {
    id: "4",
    name: "Emma Davis",
    email: "emma@example.com",
    phone: "+1 234 567 8904",
    totalOrders: 12,
    loyaltyStamps: 4,
    maxStamps: 10,
    totalSpent: "586.50AED",
    joinDate: "Mar 8, 2024",
    initials: "ED",
  },
  {
    id: "5",
    name: "David Brown",
    email: "david@example.com",
    phone: "+1 234 567 8905",
    totalOrders: 45,
    loyaltyStamps: 15,
    maxStamps: 10,
    totalSpent: "586.50AED",
    joinDate: "Nov 5, 2023",
    initials: "DB",
  },
  {
    id: "6",
    name: "Lisa Anderson",
    email: "lisa@example.com",
    phone: "+1 234 567 8906",
    totalOrders: 8,
    loyaltyStamps: 2,
    maxStamps: 10,
    totalSpent: "586.50AED",
    joinDate: "Apr 12, 2024",
    initials: "LA",
  },
  {
    id: "7",
    name: "Tom Wilson",
    email: "tom@example.com",
    phone: "+1 234 567 8907",
    totalOrders: 22,
    loyaltyStamps: 7,
    maxStamps: 10,
    totalSpent: "586.50AED",
    joinDate: "Jan 28, 2024",
    initials: "TW",
  },
  {
    id: "8",
    name: "Amy Clark",
    email: "amy@example.com",
    phone: "+1 234 567 8908",
    totalOrders: 16,
    loyaltyStamps: 5,
    maxStamps: 10,
    totalSpent: "586.50AED",
    joinDate: "Feb 18, 2024",
    initials: "AC",
  },
];

const Customers = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-2 justify-between">
          <PageHeader
            title="Customers"
            description="Manage customer information and loyalty progress"
          />

          <div className="relative flex items-center">
            <Search className="absolute left-4 size-4 text-muted-foreground/50" />
            <Input
              placeholder="Search customers by name or email..."
              className="pl-11 w-full md:w-70 border-muted-foreground/20"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent>
              <p className="text-sm font-medium text-muted-foreground">
                Total Customers
              </p>
              <h3 className="text-3xl font-bold mt-1">220</h3>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="text-sm font-medium text-muted-foreground">
                Active Customers
              </p>
              <h3 className="text-3xl font-bold mt-1">142</h3>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="text-sm font-medium text-muted-foreground">
                Avg. Orders
              </p>
              <h3 className="text-3xl font-bold mt-1">22</h3>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="text-sm font-medium text-muted-foreground">
                Loyalty Members
              </p>
              <h3 className="text-3xl font-bold mt-1">1,248</h3>
            </CardContent>
          </Card>
        </div>

        <DataTable columns={customersColumns} data={customersData} />
      </div>
    </PageLayout>
  );
};

export default Customers;
