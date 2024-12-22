import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const recentOrders = [
  { id: 1, table: "T5", status: "In Progress", amount: 45.50, items: 3 },
  { id: 2, table: "T2", status: "Ready", amount: 32.75, items: 2 },
  { id: 3, table: "Takeout", status: "New", amount: 28.90, items: 2 },
];

export const OrdersOverview = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
        <CardDescription>Overview of latest restaurant orders</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px]">
          {recentOrders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between p-4 border-b last:border-0"
            >
              <div className="space-y-1">
                <p className="text-sm font-medium">Table {order.table}</p>
                <p className="text-sm text-muted-foreground">{order.items} items</p>
              </div>
              <div className="flex items-center gap-4">
                <Badge
                  variant={
                    order.status === "New"
                      ? "default"
                      : order.status === "In Progress"
                      ? "secondary"
                      : "success"
                  }
                >
                  {order.status}
                </Badge>
                <span className="text-sm font-medium">${order.amount}</span>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};