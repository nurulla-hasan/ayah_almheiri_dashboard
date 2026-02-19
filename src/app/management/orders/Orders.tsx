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

const ordersData: Order[] = [
  {
    id: "1",
    orderNumber: "#ORD-1234",
    timeAgo: "2 mins ago",
    customerName: "John Smith",
    deliveryType: "Car Pickup",
    deliveryDetails: "ABC-123",
    items: ["Burger Combo", "Fries", "Coke"],
    totalAmount: "24.50AED",
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
    totalAmount: "32.00AED",
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
    totalAmount: "12.50AED",
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
    totalAmount: "28.00AED",
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
    totalAmount: "45.00AED",
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
    totalAmount: "18.50AED",
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

  return (
    <PageLayout>
      <div className="space-y-6">
        <PageHeader
          title="Orders Management"
          description="Manage and track all customer orders"
        />

        <Tabs
          defaultValue="All"
          onValueChange={setActiveTab}
          className="w-full"
        >
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
      </div>
    </PageLayout>
  );
};

export default Orders;
