import { Bell, Moon, Sun, Menu, LogOutIcon, Search, MapPin, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "@/theme/theme-provider";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { useSelector } from "react-redux";
// import { useGetAdminProfileQuery } from "@/redux/feature/auth/authApi";
import { getInitials } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

const FALLBACK_ADMIN = {
  name: "Admin User",
  role: "Super Admin",
  email: "admin@gmail.com",
  profile_image: "https://i.pravatar.cc/150?img=54",
};

const Header = ({ onMenuClick }: { onMenuClick: () => void }) => {
  const { setTheme, theme } = useTheme();
  // const storedAdmin = useSelector((state) => state.auth.admin);
  const admin = FALLBACK_ADMIN;
  // const { isLoading } = useGetAdminProfileQuery();
  const isLoading = false;

  const handleLogout = () => {
    window.location.href = "auth/login";
  };

  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 h-20 bg-card">
      <div className="h-full flex items-center justify-between px-6">
        {/* Left side: Branch Selector & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenuClick}
          >
            <Menu />
          </Button>

          <div className="hidden md:block">
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
          </div>
        </div>

        {/* Right side: Search, Notifications, Profile */}
        <div className="flex items-center gap-6">
          {/* Search Bar */}
          <div className="relative hidden md:block w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search orders, customers..."
              className="pl-10 bg-background"
            />
          </div>

          <div className="flex items-center gap-4">
            {/* Notification icon */}
            <Button variant="ghost" size="icon-sm" className="rounded-full" asChild>
              <Link to="/notifications" className="relative">
                <Bell />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full border-2 border-background"></span>
              </Link>
            </Button>

            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="icon-sm"
              className="rounded-full"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </Button>

            {/* Profile dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity pl-2">
                  {isLoading ? (
                    <>
                      <Skeleton className="h-11 w-11 rounded-xl" />
                      <div className="hidden lg:flex flex-col gap-1">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-3 w-16" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={admin?.profile_image} alt={admin?.name} className="object-cover" />
                          <AvatarFallback>
                            {getInitials(admin?.name)}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="hidden lg:flex items-center gap-3">
                        <div className="flex flex-col text-left">
                          <span className="text-sm font-bold text-foreground leading-none mb-1">
                            {admin?.name}
                          </span>
                          <span className="text-[11px] font-medium text-muted-foreground">
                            {admin?.role}
                          </span>
                        </div>
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </>
                  )}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel className="flex flex-col">
                  <span className="text-sm font-bold text-foreground">{admin?.name}</span>
                  <span className="text-xs font-medium text-muted-foreground mt-0.5">{admin?.email}</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link to="/settings/profile" className="flex items-center w-full">
                      Profile Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} className="text-red-500 focus:text-red-500">
                    <LogOutIcon className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
