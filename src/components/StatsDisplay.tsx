import { DollarSign, Users, Clock, AlertTriangle } from "lucide-react";
import { DashboardCard } from "./DashboardCard";

export const StatsDisplay = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <DashboardCard title="Staff on Shift" icon={<Users className="h-4 w-4" />}>
        <div className="text-2xl font-bold">12</div>
        <p className="text-xs text-muted-foreground">
          3 servers, 4 kitchen, 5 support
        </p>
      </DashboardCard>
      
      <DashboardCard title="Labor Costs Today" icon={<DollarSign className="h-4 w-4" />}>
        <div className="text-2xl font-bold">$1,458.25</div>
        <p className="text-xs text-muted-foreground">
          Within daily budget
        </p>
      </DashboardCard>
      
      <DashboardCard title="Upcoming Shifts" icon={<Clock className="h-4 w-4" />}>
        <div className="text-2xl font-bold">8</div>
        <p className="text-xs text-muted-foreground">
          Next shift starts in 2h
        </p>
      </DashboardCard>

      <DashboardCard title="Schedule Conflicts" icon={<AlertTriangle className="h-4 w-4" />}>
        <div className="text-2xl font-bold">2</div>
        <p className="text-xs text-muted-foreground">
          Requires attention
        </p>
      </DashboardCard>
    </div>
  );
};