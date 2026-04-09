import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

export const Route = createFileRoute("/_authenticated/analytics")({
  component: AnalyticsPage,
});

const convData = [
  { day: "Mon", conversations: 42 },
  { day: "Tue", conversations: 58 },
  { day: "Wed", conversations: 35 },
  { day: "Thu", conversations: 72 },
  { day: "Fri", conversations: 64 },
  { day: "Sat", conversations: 28 },
  { day: "Sun", conversations: 19 },
];

const msgData = [
  { day: "Mon", messages: 186 },
  { day: "Tue", messages: 245 },
  { day: "Wed", messages: 152 },
  { day: "Thu", messages: 310 },
  { day: "Fri", messages: 278 },
  { day: "Sat", messages: 120 },
  { day: "Sun", messages: 85 },
];

const topQueries = [
  { query: "How do I get started?", count: 142 },
  { query: "What are your pricing plans?", count: 98 },
  { query: "How to contact support?", count: 76 },
  { query: "Can I customize the bot?", count: 64 },
  { query: "Where are the docs?", count: 51 },
];

function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground">Monitor your chatbot's performance and engagement.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">Conversations This Week</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={convData}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 8%)" />
                <XAxis dataKey="day" stroke="oklch(0.6 0.02 260)" fontSize={12} />
                <YAxis stroke="oklch(0.6 0.02 260)" fontSize={12} />
                <Tooltip contentStyle={{ background: "oklch(0.12 0.02 270)", border: "1px solid oklch(1 0 0 / 10%)", borderRadius: "8px", color: "oklch(0.95 0.01 250)" }} />
                <Bar dataKey="conversations" fill="oklch(0.62 0.22 264)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">Messages Per Day</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={msgData}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 8%)" />
                <XAxis dataKey="day" stroke="oklch(0.6 0.02 260)" fontSize={12} />
                <YAxis stroke="oklch(0.6 0.02 260)" fontSize={12} />
                <Tooltip contentStyle={{ background: "oklch(0.12 0.02 270)", border: "1px solid oklch(1 0 0 / 10%)", borderRadius: "8px", color: "oklch(0.95 0.01 250)" }} />
                <Line type="monotone" dataKey="messages" stroke="oklch(0.55 0.24 300)" strokeWidth={2} dot={{ fill: "oklch(0.55 0.24 300)" }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-foreground">Top Queries</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {topQueries.map((q, i) => (
              <div key={i} className="flex items-center justify-between border-b border-border pb-3 last:border-0">
                <span className="text-sm text-foreground">{q.query}</span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">{q.count}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
