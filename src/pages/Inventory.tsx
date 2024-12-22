import { InventoryTable } from "@/components/InventoryTable";
import { Button } from "@/components/ui/button";
import { PackagePlus } from "lucide-react";

const Inventory = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Inventory Management</h2>
        <Button>
          <PackagePlus className="mr-2 h-4 w-4" />
          Add Item
        </Button>
      </div>
      <InventoryTable />
    </div>
  );
};

export default Inventory;