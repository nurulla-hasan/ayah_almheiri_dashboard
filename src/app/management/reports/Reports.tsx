/* eslint-disable @typescript-eslint/no-explicit-any */
import PageLayout from "@/components/common/page-layout";
import PageHeader from "@/components/ui/custom/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, TrendingUp, ShoppingCart, DollarSign, Users } from "lucide-react";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, BarChart, Bar, Legend 
} from 'recharts';
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const salesTrendData = [
  { name: 'Feb 1', orders: 45, revenue: 2100 },
  { name: 'Feb 2', orders: 52, revenue: 2800 },
  { name: 'Feb 3', orders: 62, revenue: 3200 },
  { name: 'Feb 4', orders: 48, revenue: 2900 },
  { name: 'Feb 5', orders: 68, revenue: 3600 },
];

const categoryData = [
  { name: 'Hot Coffee', value: 33, color: '#a78bfa' },
  { name: 'Hot & Cold Coffee', value: 26, color: '#10b981' },
  { name: 'Drink', value: 20, color: '#f59e0b' },
  { name: 'Matcha', value: 13, color: '#8b5cf6' },
  { name: 'Cold Coffee', value: 8, color: '#ef4444' },
];

const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, name, color }: any) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius * 1.4;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill={color} 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
      className="text-[12px] font-medium"
    >
      {`${name} ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const branchPerformanceData = [
  { name: 'Main', orders: 5200, revenue: 5200 },
  { name: 'North', orders: 4100, revenue: 4100 },
  { name: 'South', orders: 3900, revenue: 3900 },
  { name: 'West', orders: 2400, revenue: 2400 },
];

const topProducts = [
  { rank: 1, name: "Classic Burger", unitsSold: 245, revenue: "3062.50AED", performance: 98 },
  { rank: 2, name: "Margherita Pizza", unitsSold: 189, revenue: "3402.00AED", performance: 76 },
  { rank: 3, name: "Pepperoni Pizza", unitsSold: 156, revenue: "3120.00AED", performance: 62 },
  { rank: 4, name: "Spaghetti Carbonara", unitsSold: 142, revenue: "2272.00AED", performance: 57 },
  { rank: 5, name: "Caesar Salad", unitsSold: 98, revenue: "1029.00AED", performance: 39 },
];

const Reports = () => {
  return (
    <PageLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <PageHeader
            title="Reports & Analytics"
            description="Track performance and business insights"
          />
          <Button className="bg-primary/80 hover:bg-primary">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent>
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                  <p className="text-2xl font-bold">15,700AED</p>
                  <div className="flex items-center gap-1 text-xs text-green-600 font-medium">
                    <TrendingUp className="h-3 w-3" />
                    <span>+12.5% vs last week</span>
                  </div>
                </div>
                <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                  <DollarSign className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium text-muted-foreground">Total Orders</p>
                  <p className="text-2xl font-bold">535</p>
                  <div className="flex items-center gap-1 text-xs text-green-600 font-medium">
                    <TrendingUp className="h-3 w-3" />
                    <span>+8.3% vs last week</span>
                  </div>
                </div>
                <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <ShoppingCart className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium text-muted-foreground">Avg Order Value</p>
                  <p className="text-2xl font-bold">29.35AED</p>
                  <div className="flex items-center gap-1 text-xs text-green-600 font-medium">
                    <TrendingUp className="h-3 w-3" />
                    <span>+3.7% vs last week</span>
                  </div>
                </div>
                <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                  <DollarSign className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium text-muted-foreground">New Customers</p>
                  <p className="text-2xl font-bold">87</p>
                  <div className="flex items-center gap-1 text-xs text-green-600 font-medium">
                    <TrendingUp className="h-3 w-3" />
                    <span>+15.2% vs last week</span>
                  </div>
                </div>
                <div className="h-10 w-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                  <Users className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-bold">Sales Trend (Last 5 Days)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-75 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesTrendData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                  <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                  <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36} />
                  <Line yAxisId="left" type="monotone" dataKey="orders" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Orders" />
                  <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Revenue ($)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sales by Category */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-bold">Sales by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-87.5 w-full flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={0}
                      outerRadius={100}
                      paddingAngle={0}
                      dataKey="value"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      stroke="none"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Branch Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-bold">Branch Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-75 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={branchPerformanceData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="orders" fill="#10b981" radius={[4, 4, 0, 0]} name="Orders" barSize={40} />
                    <Bar dataKey="revenue" fill="#8b5cf6" radius={[4, 4, 0, 0]} name="Revenue (AED)" barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Selling Products */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-bold">Top Selling Products</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead>RANK</TableHead>
                  <TableHead>PRODUCT</TableHead>
                  <TableHead>UNITS SOLD</TableHead>
                  <TableHead>REVENUE</TableHead>
                  <TableHead>PERFORMANCE</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topProducts.map((product) => (
                  <TableRow key={product.rank}>
                    <TableCell>
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center font-bold ${product.rank === 1 ? 'bg-yellow-100 text-yellow-600' : 'bg-muted text-muted-foreground'}`}>
                        {product.rank}
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell className="font-bold">{product.unitsSold}</TableCell>
                    <TableCell className="font-bold text-green-600">{product.revenue}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Progress value={product.performance} className="h-2 flex-1" />
                        <span className="text-sm text-muted-foreground w-8">{product.performance}%</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Reports;
