import { Button } from "@/components/ui/button";
import { CalendarPlus } from "lucide-react";

const Scheduling = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Staff Scheduling</h2>
        <Button>
          <CalendarPlus className="mr-2 h-4 w-4" />
          Create Schedule
        </Button>
      </div>
      <p className="text-muted-foreground">Coming soon: Staff scheduling features</p>
    </div>
  );
};

export default Scheduling;