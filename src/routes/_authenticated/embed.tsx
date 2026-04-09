import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { Copy, Check } from "lucide-react";

export const Route = createFileRoute("/_authenticated/embed")({
  component: EmbedPage,
});

function EmbedPage() {
  const { user } = useAuth();
  const [copied, setCopied] = useState<"script" | "iframe" | null>(null);
  const botId = user?.id || "your-bot-id";

  const scriptSnippet = `<script src="https://nocta-chat-bot.vercel.app/bot.js" data-bot-id="${botId}"></script>`;
  const iframeSnippet = `<iframe src="https://nocta-chat-bot.vercel.app/bot?userId=${botId}" width="400" height="600" frameborder="0"></iframe>`;

  const copy = (text: string, type: "script" | "iframe") => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Embed Codes</h1>
        <p className="text-muted-foreground">Add your chatbot to any website with a single snippet.</p>
      </div>

      <Card className="border-border bg-card">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-foreground">Script Tag (Recommended)</CardTitle>
          <Button size="sm" variant="ghost" onClick={() => copy(scriptSnippet, "script")}>
            {copied === "script" ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
            {copied === "script" ? "Copied!" : "Copy"}
          </Button>
        </CardHeader>
        <CardContent>
          <pre className="overflow-x-auto rounded-lg bg-secondary p-4 text-sm text-muted-foreground">
            {scriptSnippet}
          </pre>
          <p className="mt-3 text-xs text-muted-foreground">Paste before the closing &lt;/body&gt; tag. Shows a chat bubble.</p>
        </CardContent>
      </Card>

      <Card className="border-border bg-card">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-foreground">iFrame Embed</CardTitle>
          <Button size="sm" variant="ghost" onClick={() => copy(iframeSnippet, "iframe")}>
            {copied === "iframe" ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
            {copied === "iframe" ? "Copied!" : "Copy"}
          </Button>
        </CardHeader>
        <CardContent>
          <pre className="overflow-x-auto rounded-lg bg-secondary p-4 text-sm text-muted-foreground">
            {iframeSnippet}
          </pre>
          <p className="mt-3 text-xs text-muted-foreground">Embed inline anywhere on your page.</p>
        </CardContent>
      </Card>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-foreground">Your Bot ID</CardTitle>
        </CardHeader>
        <CardContent>
          <code className="rounded bg-secondary px-3 py-2 text-sm text-primary">{botId}</code>
          <p className="mt-3 text-xs text-muted-foreground">This ID uniquely identifies your bot. Keep it safe.</p>
        </CardContent>
      </Card>
    </div>
  );
}
