import PageLayout from "@/components/common/page-layout";
import PageHeader from "@/components/ui/custom/page-header";
import { DataTable } from "@/components/ui/custom/data-table";
import { adminColumns } from "@/components/management/admins/admin-columns";
import {
  AdminModal,
  type Admin,
} from "@/components/management/admins/admin-modal";

const admins: Admin[] = [
  {
    id: "1",
    name: "Dr. Dina",
    email: "dr.dina@example.com",
    role: "Super Admin",
    joinedDate: "Jan 12, 2024",
  },
  {
    id: "2",
    name: "Nurulla Hasan",
    email: "nurulla@example.com",
    role: "Super Admin",
    joinedDate: "Jan 15, 2024",
  },
  {
    id: "3",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "Manager",
    joinedDate: "Feb 01, 2024",
  },
  {
    id: "4",
    name: "Mike Williams",
    email: "mike@example.com",
    role: "Editor",
    joinedDate: "Feb 10, 2024",
  },
];

const Admins = () => {
  return (
    <PageLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <PageHeader
            title="Admin Management"
            description="Manage system administrators and their roles"
          />
          <AdminModal mode="create" />
        </div>

        {/* Table Section */}
        <DataTable columns={adminColumns} data={admins} />
      </div>
    </PageLayout>
  );
};

export default Admins;
