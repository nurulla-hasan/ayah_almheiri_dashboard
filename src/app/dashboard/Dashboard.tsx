import PageLayout from "@/components/common/page-layout";
import Stats from "@/components/dashboard/stats";
import WeeklyRevenueChart from "@/components/dashboard/weekly-revenue";
import OrderStatusChart from "@/components/dashboard/order-status";
import { DataTable } from "@/components/ui/custom/data-table";
import { usersColumns, type User } from "@/components/management/users/users-columns";

const Dashboard = () => {
  return (
    <PageLayout >
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
          <p className="text-sm text-slate-500">Welcome back! Here's what's happening today.</p>
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
         <DataTable columns={usersColumns} data={users} />
      </div>
    </PageLayout>
  );
};

export default Dashboard;



const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Trainer",
    joinedDate: "12 Jan 2025",
    status: "Approved",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Individual",
    joinedDate: "12 Jan 2025",
    status: "Decline",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    role: "Trainer",
    joinedDate: "12 Jan 2025",
    status: "Decline",
  },
  {
    id: 4,
    name: "Emily Brown",
    email: "emily.brown@example.com",
    role: "Individual",
    joinedDate: "12 Jan 2025",
    status: "Approved",
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david.wilson@example.com",
    role: "Individual",
    joinedDate: "12 Jan 2025",
    status: "Approved",
  },
];
