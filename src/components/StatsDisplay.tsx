import { DollarSign, Users, Package } from "lucide-react";
import { DashboardCard } from "./DashboardCard";

export const StatsDisplay = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <DashboardCard title="Daily Revenue" icon={<DollarSign className="h-4 w-4" />}>
        <div className="text-2xl font-bold">$2,450.25</div>
        <p className="text-xs text-muted-foreground">+20.1% from last week</p>
      </DashboardCard>
      
      <DashboardCard title="Active Staff" icon={<Users className="h-4 w-4" />}>
        <div className="text-2xl font-bold">12</div>
        <p className="text-xs text-muted-foreground">3 on break</p>
      </DashboardCard>
      
      <DashboardCard title="Low Stock Items" icon={<Package className="h-4 w-4" />}>
        <div className="text-2xl font-bold">8</div>
        <p className="text-xs text-muted-foreground">Items need reordering</p>
      </DashboardCard>
    </div>
  );
};