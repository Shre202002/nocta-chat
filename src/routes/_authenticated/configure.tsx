import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/configure")({
  component: ConfigurePage,
});

function ConfigurePage() {
  const [botName, setBotName] = useState("My Chatbot");
  const [welcomeMsg, setWelcomeMsg] = useState("Hi! How can I help you today?");
  const [themeColor, setThemeColor] = useState("#3B82F6");
  const [autoRespond, setAutoRespond] = useState(true);

  const handleSave = () => {
    toast.success("Bot configuration saved!");
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Bot Configuration</h1>
        <p className="text-muted-foreground">Customize your chatbot's appearance and behavior.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">General Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="botName">Bot Name</Label>
              <Input id="botName" value={botName} onChange={e => setBotName(e.target.value)} className="bg-secondary border-border" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="welcome">Welcome Message</Label>
              <Textarea id="welcome" value={welcomeMsg} onChange={e => setWelcomeMsg(e.target.value)} className="bg-secondary border-border" rows={3} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="autoRespond">Auto Responses</Label>
              <Switch id="autoRespond" checked={autoRespond} onCheckedChange={setAutoRespond} />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">Appearance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="color">Theme Color</Label>
              <div className="flex items-center gap-3">
                <input type="color" id="color" value={themeColor} onChange={e => setThemeColor(e.target.value)} className="h-10 w-14 cursor-pointer rounded-md border border-border bg-transparent" />
                <Input value={themeColor} onChange={e => setThemeColor(e.target.value)} className="bg-secondary border-border" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Avatar</Label>
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-border text-muted-foreground text-xs">
                Upload
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Button className="gradient-btn border-0 text-primary-foreground hover:opacity-90" onClick={handleSave}>
        Save Configuration
      </Button>
    </div>
  );
}
