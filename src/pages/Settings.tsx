import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Settings as SettingsIcon, CreditCard, Package2, Store } from "lucide-react";

const settingsSchema = z.object({
  restaurantName: z.string().min(2, {
    message: "Restaurant name must be at least 2 characters.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

const Settings = () => {
  const form = useForm<z.infer<typeof settingsSchema>>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      restaurantName: "",
      address: "",
      phone: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof settingsSchema>) {
    console.log(values);
    // TODO: Implement settings update logic
  }

  return (
    <div className="space-y-6">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your restaurant settings and preferences
        </p>
      </div>

      <div className="grid gap-6">
        {/* General Settings */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <SettingsIcon className="h-5 w-5" />
            <h3 className="text-lg font-medium">General Settings</h3>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="restaurantName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Restaurant Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter restaurant name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter restaurant address" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter phone number" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter email address" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit">Save Changes</Button>
            </form>
          </Form>
        </div>

        {/* Order Processing */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Store className="h-5 w-5" />
            <h3 className="text-lg font-medium">Order Processing</h3>
          </div>
          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">
              Configure order processing settings, including table management and delivery options.
              Coming soon.
            </p>
          </div>
        </div>

        {/* Inventory Management */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Package2 className="h-5 w-5" />
            <h3 className="text-lg font-medium">Inventory Management</h3>
          </div>
          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">
              Set up inventory tracking preferences and low stock alerts.
              Coming soon.
            </p>
          </div>
        </div>

        {/* Payment Settings */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            <h3 className="text-lg font-medium">Payment Settings</h3>
          </div>
          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">
              Configure payment methods and processing options.
              Coming soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;