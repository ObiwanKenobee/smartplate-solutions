import { DollarSign, Users, Clock, AlertTriangle, CreditCard, TrendingUp } from "lucide-react";
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
      
      <DashboardCard title="Today's Sales" icon={<DollarSign className="h-4 w-4" />}>
        <div className="text-2xl font-bold">$3,458.25</div>
        <p className="text-xs text-muted-foreground">
          +15% from yesterday
        </p>
      </DashboardCard>
      
      <DashboardCard title="Active Orders" icon={<Clock className="h-4 w-4" />}>
        <div className="text-2xl font-bold">8</div>
        <p className="text-xs text-muted-foreground">
          3 pending, 5 in progress
        </p>
      </DashboardCard>

      <DashboardCard title="Payment Status" icon={<CreditCard className="h-4 w-4" />}>
        <div className="text-2xl font-bold">98%</div>
        <p className="text-xs text-muted-foreground">
          Successful transactions
        </p>
      </DashboardCard>
    </div>
  );
};