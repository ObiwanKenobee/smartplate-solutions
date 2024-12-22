import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

const lowStockItems = [
  { id: 1, name: "Chicken Breast", quantity: 5, threshold: 10 },
  { id: 2, name: "Olive Oil", quantity: 2, threshold: 5 },
];

export const InventoryAlerts = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-yellow-500" />
          <CardTitle>Low Stock Alerts</CardTitle>
        </div>
        <CardDescription>Items requiring immediate attention</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {lowStockItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-2 bg-yellow-50 rounded-lg"
            >
              <span className="font-medium">{item.name}</span>
              <span className="text-sm text-yellow-600">
                {item.quantity}/{item.threshold} units left
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};