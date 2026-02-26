import { useState } from "react";
import PageLayout from "@/components/common/page-layout";
import PageHeader from "@/components/ui/custom/page-header";
import { DataTable } from "@/components/ui/custom/data-table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  type Order,
  ordersColumns,
} from "@/components/management/orders/orders-columns";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as XLSX from "xlsx";

const ordersData: Order[] = [
  {
    id: "1",
    orderNumber: "#ORD-1234",
    timeAgo: "2 mins ago",
    customerName: "John Smith",
    deliveryType: "Car Pickup",
    deliveryDetails: "ABC-123",
    items: ["Burger Combo", "Fries", "Coke"],
    totalAmount: "AED 24.50",
    status: "Preparing",
  },
  {
    id: "2",
    orderNumber: "#ORD-1235",
    timeAgo: "5 mins ago",
    customerName: "Sarah Johnson",
    deliveryType: "Counter Pickup",
    deliveryDetails: "",
    items: ["Pizza Large", "Coke"],
    totalAmount: "AED 32.00",
    status: "Ready",
  },
  {
    id: "3",
    orderNumber: "#ORD-1236",
    timeAgo: "1 min ago",
    customerName: "Mike Williams",
    deliveryType: "Car Pickup",
    deliveryDetails: "XYZ-789",
    items: ["Salad Bowl"],
    totalAmount: "AED 12.50",
    status: "Pending",
  },
  {
    id: "4",
    orderNumber: "#ORD-1237",
    timeAgo: "8 mins ago",
    customerName: "Emma Davis",
    deliveryType: "Counter Pickup",
    deliveryDetails: "",
    items: ["Pasta", "Garlic Bread"],
    totalAmount: "AED 28.00",
    status: "Preparing",
  },
  {
    id: "5",
    orderNumber: "#ORD-1238",
    timeAgo: "15 mins ago",
    customerName: "David Brown",
    deliveryType: "Car Pickup",
    deliveryDetails: "DEF-456",
    items: ["Steak Dinner", "Wine"],
    totalAmount: "AED 45.00",
    status: "Completed",
  },
  {
    id: "6",
    orderNumber: "#ORD-1239",
    timeAgo: "3 mins ago",
    customerName: "Lisa Anderson",
    deliveryType: "Counter Pickup",
    deliveryDetails: "",
    items: ["Chicken Wings", "Fries"],
    totalAmount: "AED 18.50",
    status: "Ready",
  },
];

const Orders = () => {
  const [activeTab, setActiveTab] = useState<string>("All");

  const filteredOrders =
    activeTab === "All"
      ? ordersData
      : ordersData.filter((order) => order.status === activeTab);

  const counts = {
    All: ordersData.length,
    Pending: ordersData.filter((o) => o.status === "Pending").length,
    Preparing: ordersData.filter((o) => o.status === "Preparing").length,
    Ready: ordersData.filter((o) => o.status === "Ready").length,
    Completed: ordersData.filter((o) => o.status === "Completed").length,
  };

  const handleExport = () => {
    const ws = XLSX.utils.json_to_sheet(filteredOrders);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Orders");
    XLSX.writeFile(wb, `orders_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  return (
    <PageLayout>
      <div className="flex flex-col md:flex-row gap-2 justify-between">
        <PageHeader
          title="Orders Management"
          description="Manage and track all customer orders"
        />

        <div className="flex items-center gap-2">
          <Select defaultValue="main">
            <SelectTrigger className="w-48 bg-background">
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-1 rounded-md">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                </div>
                <SelectValue placeholder="Select Branch" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="main">Main Branch</SelectItem>
              <SelectItem value="dhaka">Dhaka Branch</SelectItem>
              <SelectItem value="chittagong">Chittagong Branch</SelectItem>
            </SelectContent>
          </Select>

          {/* Export Button */}
          <Button onClick={handleExport} variant="outline">
            Export <Download />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="All" onValueChange={setActiveTab} className="w-full">
        <ScrollArea className="w-87 sm:w-full">
          <TabsList>
            {Object.entries(counts).map(([status, count]) => (
              <TabsTrigger key={status} value={status}>
                {status} ({count})
              </TabsTrigger>
            ))}
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </Tabs>

      {/* replace card grid with table */}
      <DataTable columns={ordersColumns} data={filteredOrders} />
    </PageLayout>
  );
};

export default Orders;
