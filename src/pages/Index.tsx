import { StatsDisplay } from "@/components/StatsDisplay";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleTimeString()}</p>
      </div>
      
      <StatsDisplay />
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Quick Actions</h2>
        <p className="text-muted-foreground">Coming soon: Quick access to common tasks</p>
      </div>
    </div>
  );
};

export default Dashboard;