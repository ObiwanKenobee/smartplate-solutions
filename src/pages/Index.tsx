import { StatsDisplay } from "@/components/StatsDisplay";
import { InventoryTable } from "@/components/InventoryTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary">Restaurant Dashboard</h1>
          <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleTimeString()}</p>
        </div>
        
        <StatsDisplay />
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Inventory Overview</h2>
          <InventoryTable />
        </div>
      </div>
    </div>
  );
};

export default Index;