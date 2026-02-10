import PageLayout from "@/components/common/page-layout";
import Stats from "@/components/dashboard/stats";
import WeeklyRevenueChart from "@/components/dashboard/weekly-revenue";
import OrderStatusChart from "@/components/dashboard/order-status";
import { DataTable } from "@/components/ui/custom/data-table";
import { ordersColumns, type Order } from "@/components/management/orders/orders-columns";

const Dashboard = () => {
  return (
    <PageLayout >
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Dashboard Overview</h1>
          <p className="text-sm text-muted-foreground">Welcome back! Here's what's happening today.</p>
        </div>

        <Stats />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <WeeklyRevenueChart />
          </div>
          <div className="lg:col-span-1">
            <OrderStatusChart />
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Recent Orders</h2>
          <DataTable columns={ordersColumns} data={recentOrders} />
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;

const recentOrders: Order[] = [
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
];
