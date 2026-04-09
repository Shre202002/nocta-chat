import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <Bot className="h-7 w-7 text-primary" />
          <span className="text-lg font-bold text-foreground">Nocta</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-muted-foreground transition hover:text-foreground">Features</a>
          <a href="#pricing" className="text-sm text-muted-foreground transition hover:text-foreground">Pricing</a>
          <a href="#how-it-works" className="text-sm text-muted-foreground transition hover:text-foreground">How It Works</a>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button size="sm" className="gradient-btn border-0 text-primary-foreground hover:opacity-90" asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
