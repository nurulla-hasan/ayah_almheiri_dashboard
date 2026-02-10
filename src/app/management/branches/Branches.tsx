import PageLayout from "@/components/common/page-layout";
import PageHeader from "@/components/ui/custom/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Users, User, Edit } from "lucide-react";
import { BranchModal, type Branch } from "@/components/management/branches/branch-modal";
import { BranchViewModal } from "@/components/management/branches/branch-view-modal";

const branches: Branch[] = [
  {
    id: "1",
    name: "Main Branch",
    address: "123 Main Street, Downtown",
    phone: "+1 234 567 8901",
    manager: "John Smith",
    staffCount: 12,
    workingHours: "8:00 AM - 10:00 PM",
    status: "Active",
    todayOrders: 87,
    todayRevenue: "2340.50AED",
  },
  {
    id: "2",
    name: "North Branch",
    address: "456 North Ave, North District",
    phone: "+1 234 567 8902",
    manager: "Sarah Johnson",
    staffCount: 8,
    workingHours: "9:00 AM - 9:00 PM",
    status: "Active",
    todayOrders: 64,
    todayRevenue: "1825.00AED",
  },
  {
    id: "3",
    name: "South Branch",
    address: "789 South Blvd, South Side",
    phone: "+1 234 567 8903",
    manager: "Mike Williams",
    staffCount: 10,
    workingHours: "8:00 AM - 10:00 PM",
    status: "Active",
    todayOrders: 52,
    todayRevenue: "1456.75AED",
  },
  {
    id: "4",
    name: "West Branch",
    address: "321 West Road, West End",
    phone: "+1 234 567 8904",
    manager: "Emma Davis",
    staffCount: 6,
    workingHours: "Closed for Renovation",
    status: "Temporarily Closed",
    todayOrders: 0,
    todayRevenue: "0.00AED",
  },
];

const Branches = () => {
  return (
    <PageLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <PageHeader
            title="Branch Management"
            description="Manage all your branch locations"
          />
          <BranchModal mode="create" />
        </div>

        {/* Global Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-muted-foreground">Total Branches</p>
                <p className="text-3xl font-bold">4</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-muted-foreground">Active Branches</p>
                <p className="text-3xl font-bold text-green-600">3</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-muted-foreground">Total Staff</p>
                <p className="text-3xl font-bold text-primary/60">36</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-muted-foreground">Today's Revenue</p>
                <p className="text-3xl font-bold text-green-600">5622.25AED</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Branch Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {branches.map((branch) => (
            <Card key={branch.id} className="overflow-hidden">
              <CardContent>
                <div className="flex flex-col gap-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-bold text-lg">{branch.name}</h3>
                        <p className="text-sm text-muted-foreground">{branch.address}</p>
                      </div>
                    </div>
                    <Badge variant={branch.status === "Active" ? "success" : "warning"}>
                      {branch.status}
                    </Badge>
                  </div>

                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>{branch.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{branch.workingHours}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{branch.staffCount} Staff Members</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>Manager: {branch.manager}</span>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-muted/30 flex flex-col gap-1">
                      <p className="text-xs font-medium text-muted-foreground">Today's Orders</p>
                      <p className="text-xl font-bold text-primary/60">{branch.todayOrders}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-green-50/50 dark:bg-green-900/50 flex flex-col gap-1">
                      <p className="text-xs font-medium text-muted-foreground">Today's Revenue</p>
                      <p className="text-xl font-bold text-green-600">{branch.todayRevenue}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <BranchModal 
                      mode="edit" 
                      branch={branch}
                      trigger={
                        <Button className="flex-1">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Branch
                        </Button>
                      }
                    />
                    <BranchViewModal branch={branch} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Branches;
