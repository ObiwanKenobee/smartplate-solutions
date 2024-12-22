import { StatsDisplay } from "@/components/StatsDisplay";
import { OrdersOverview } from "@/components/OrdersOverview";
import { InventoryAlerts } from "@/components/InventoryAlerts";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleTimeString()}
        </p>
      </div>

      <StatsDisplay />

      <div className="grid gap-6 md:grid-cols-2">
        <OrdersOverview />
        <InventoryAlerts />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Quick Actions</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <ActionCard
            title="New Order"
            description="Create a new customer order"
            icon="🍽️"
          />
          <ActionCard
            title="Update Inventory"
            description="Manage stock levels"
            icon="📦"
          />
          <ActionCard
            title="View Reports"
            description="Access sales analytics"
            icon="📊"
          />
        </div>
      </div>
    </div>
  );
};

const ActionCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => (
  <div className="p-4 border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
    <div className="text-2xl mb-2">{icon}</div>
    <h3 className="font-medium">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

export default Dashboard;