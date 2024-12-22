import { Link, Outlet } from "react-router-dom";
import { Users, Calendar, Package, DollarSign, Settings } from "lucide-react";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className="hidden md:flex h-screen w-64 flex-col fixed left-0 border-r bg-card">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-primary">SmartPlate</h1>
          </div>
          <nav className="flex-1 space-y-1 p-4">
            <NavLink to="/" icon={<DollarSign className="h-4 w-4" />} label="Dashboard" />
            <NavLink to="/staff" icon={<Users className="h-4 w-4" />} label="Staff Management" />
            <NavLink to="/schedule" icon={<Calendar className="h-4 w-4" />} label="Scheduling" />
            <NavLink to="/inventory" icon={<Package className="h-4 w-4" />} label="Inventory" />
            <NavLink to="/settings" icon={<Settings className="h-4 w-4" />} label="Settings" />
          </nav>
        </aside>

        {/* Mobile Header */}
        <div className="md:hidden w-full border-b bg-card p-4">
          <h1 className="text-xl font-bold text-primary">SmartPlate</h1>
        </div>

        {/* Main Content */}
        <main className="flex-1 md:ml-64 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const NavLink = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};