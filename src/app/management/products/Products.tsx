import PageLayout from "@/components/common/page-layout";
import { DataTable } from "@/components/ui/custom/data-table";
import PageHeader from "@/components/ui/custom/page-header";
import {
  productsColumns,
  type Product,
} from "@/components/management/products/products-columns";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const products: Product[] = [
  {
    id: "1",
    name: "Iced Matcha Latte",
    category: "Matcha",
    description: "Premium matcha with milk over ice",
    price: "AED 6.50",
    availability: true,
  },
  {
    id: "2",
    name: "Iced Matcha Latte",
    category: "Matcha",
    description: "Premium matcha with milk over ice",
    price: "AED 6.50",
    availability: true,
  },
  {
    id: "3",
    name: "Iced Matcha Latte",
    category: "Matcha",
    description: "Premium matcha with milk over ice",
    price: "AED 6.50",
    availability: true,
  },
  {
    id: "4",
    name: "Iced Matcha Latte",
    category: "Matcha",
    description: "Premium matcha with milk over ice",
    price: "AED 6.50",
    availability: true,
  },
  {
    id: "5",
    name: "Iced Matcha Latte",
    category: "Matcha",
    description: "Premium matcha with milk over ice",
    price: "AED 6.50",
    availability: false,
  },
  {
    id: "6",
    name: "Iced Matcha Latte",
    category: "Matcha",
    description: "Premium matcha with milk over ice",
    price: "AED 6.50",
    availability: true,
  },
  {
    id: "7",
    name: "Iced Matcha Latte",
    category: "Matcha",
    description: "Premium matcha with milk over ice",
    price: "AED 6.50",
    availability: true,
  },
  {
    id: "8",
    name: "Iced Matcha Latte",
    category: "Matcha",
    description: "Premium matcha with milk over ice",
    price: "AED 6.50",
    availability: true,
  },
];

const meta = {
  total: products.length,
  page: 1,
  limit: 10,
  totalPages: 1,
};

const Products = () => {
  return (
    <PageLayout>
      <div className="flex flex-col gap-6">
        {/* Header with Branch Selector */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <PageHeader
            title="Menu / Products"
            description="Manage your menu items and pricing"
          />
          <div className="flex items-center gap-2 shrink-0">
            <Select defaultValue="main">
              <SelectTrigger>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <SelectValue placeholder="Select Branch" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="main">Main Branch</SelectItem>
                <SelectItem value="branch-1">Branch 1</SelectItem>
                <SelectItem value="branch-2">Branch 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-4 bg-muted/50 border-none flex flex-col gap-2">
            <p className="text-sm font-medium text-muted-foreground">
              Total Items
            </p>
            <p className="text-3xl font-bold text-foreground">10</p>
          </Card>
          <Card className="p-4 bg-muted/50 border-none flex flex-col gap-2">
            <p className="text-sm font-medium text-muted-foreground">
              Available
            </p>
            <p className="text-3xl font-bold text-green-600">9</p>
          </Card>
          <Card className="p-4 bg-muted/50 border-none flex flex-col gap-2">
            <p className="text-sm font-medium text-muted-foreground">
              Unavailable
            </p>
            <p className="text-3xl font-bold text-red-600">1</p>
          </Card>
          <Card className="p-4 bg-muted/50 border-none flex flex-col gap-2">
            <p className="text-sm font-medium text-muted-foreground">
              Categories
            </p>
            <p className="text-3xl font-bold text-foreground">5</p>
          </Card>
        </div>

        {/* Category Tabs */}
        <div className="w-full overflow-x-auto">
          <Tabs defaultValue="all">
            <ScrollArea className="w-87 sm:w-full">
              <TabsList>
                <TabsTrigger
                  value="all"
                >
                  All Items
                </TabsTrigger>
                <TabsTrigger
                  value="matcha"
                >
                  Matcha
                </TabsTrigger>
                <TabsTrigger
                  value="hot-coffee"
                >
                  Hot Coffee
                </TabsTrigger>
                <TabsTrigger
                  value="cold-coffee"
                >
                  Cold Coffee
                </TabsTrigger>
                <TabsTrigger
                  value="manual-brew"
                >
                  Manual Brew
                </TabsTrigger>
                <TabsTrigger
                  value="drinks"
                >
                  Hot & Cold Drinks
                </TabsTrigger>
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </Tabs>
        </div>

        {/* Products Table */}
        <DataTable columns={productsColumns} data={products} meta={meta} />
      </div>
    </PageLayout>
  );
};

export default Products;
