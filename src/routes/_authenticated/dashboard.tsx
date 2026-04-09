import { createFileRoute } from "@tanstack/react-router";
import { useAuth } from "@/hooks/use-auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Users, Activity } from "lucide-react";

export const Route = createFileRoute("/_authenticated/dashboard")({
  component: DashboardPage,
});

const stats = [
  { label: "Total Conversations", value: "1,284", icon: MessageSquare, change: "+12%" },
  { label: "Active Users", value: "342", icon: Users, change: "+8%" },
  { label: "Messages Today", value: "89", icon: Activity, change: "+24%" },
];

function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">
          Welcome back{user?.user_metadata?.full_name ? `, ${user.user_metadata.full_name}` : ""}
        </h1>
        <p className="text-muted-foreground">Here's an overview of your chatbot performance.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {stats.map((s) => (
          <Card key={s.label} className="border-border bg-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{s.label}</CardTitle>
              <s.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{s.value}</div>
              <p className="mt-1 text-xs text-primary">{s.change} from last week</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-foreground">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { text: "New conversation started", time: "2 minutes ago" },
              { text: "Bot configuration updated", time: "1 hour ago" },
              { text: "New user engaged", time: "3 hours ago" },
              { text: "Weekly report generated", time: "1 day ago" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between border-b border-border pb-3 last:border-0">
                <span className="text-sm text-foreground">{item.text}</span>
                <span className="text-xs text-muted-foreground">{item.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
