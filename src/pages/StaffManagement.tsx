import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

const StaffManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Staff Management</h2>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add Employee
        </Button>
      </div>
      <p className="text-muted-foreground">Coming soon: Employee management features</p>
    </div>
  );
};

export default StaffManagement;