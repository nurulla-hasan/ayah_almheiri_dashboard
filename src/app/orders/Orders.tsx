import { useState } from "react";
import PageLayout from "@/components/common/page-layout";
import PageHeader from "@/components/ui/custom/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, ShoppingBag, CheckCircle2, XCircle, Timer } from "lucide-react";
import { type Order, type OrderStatus } from "@/components/management/orders/orders-columns";

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

  const getStatusBadge = (status: OrderStatus) => {
    switch (status) {
      case "Pending":
        return <Badge variant="destructive">Pending</Badge>;
      case "Preparing":
        return <Badge variant="warning">Preparing</Badge>;
      case "Ready":
        return <Badge variant="info">Ready</Badge>;
      case "Completed":
        return <Badge variant="success">Completed</Badge>;
    }
  };

  const getActionButton = (status: OrderStatus) => {
    switch (status) {
      case "Pending":
        return (
          <div className="flex gap-2 w-full">
            <Button variant="outline" className="flex-1">
              <CheckCircle2 className="w-4 h-4 mr-1" /> Accept
            </Button>
            <Button variant="destructive" className="flex-1">
              <XCircle className="w-4 h-4 mr-1" /> Reject
            </Button>
          </div>
        );
      case "Preparing":
        return (
          <Button variant="success" className="w-full">
            <CheckCircle2 className="w-4 h-4 mr-1" /> Mark as Ready
          </Button>
        );
      case "Ready":
        return (
          <Button variant="purple" className="w-full">
            <CheckCircle2 className="w-4 h-4 mr-1" /> Mark as Completed
          </Button>
        );
      case "Completed":
        return (
          <Button variant="outline" className="w-full">
            <Timer className="w-4 h-4 mr-1" /> View Details
          </Button>
        );
    }
  };

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
          <TabsList className="w-full">
            {Object.entries(counts).map(([status, count]) => (
              <TabsTrigger key={status} value={status}>
                {status} ({count})
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredOrders.map((order) => (
            <Card key={order.id} className="flex flex-col h-full">
              <CardContent className="flex flex-col h-full space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {order.orderNumber}
                    </h3>
                    <p className="text-xs text-muted-foreground">{order.timeAgo}</p>
                  </div>
                  {getStatusBadge(order.status)}
                </div>

                <div className="flex items-center gap-3 py-2 border-b">
                  <div className="p-2 bg-muted rounded-full">
                    <User className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {order.customerName}
                    </p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <ShoppingBag className="w-3 h-3" />
                      {order.deliveryType}{" "}
                      {order.deliveryDetails && `• ${order.deliveryDetails}`}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 grow">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Items:
                  </p>
                  <ul className="space-y-1">
                    {order.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-foreground/80 flex items-center gap-2"
                      >
                        <div className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center py-4 border-t">
                  <p className="text-sm text-muted-foreground">Total Amount</p>
                  <p className="text-lg font-bold text-foreground">
                    {order.totalAmount}
                  </p>
                </div>

                <div className="pt-2 mt-auto">{getActionButton(order.status)}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Orders;
