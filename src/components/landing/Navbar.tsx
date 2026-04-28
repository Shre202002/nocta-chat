import { Link } from "@tanstack/react-router";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-sm bg-foreground" />
          <span className="text-sm font-medium tracking-tight text-foreground">Nocta</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-xs text-muted-foreground transition hover:text-foreground">Product</a>
          <a href="#how-it-works" className="text-xs text-muted-foreground transition hover:text-foreground">Company</a>
          <a href="#pricing" className="text-xs text-muted-foreground transition hover:text-foreground">Pricing</a>
          <Link to="/login" className="text-xs text-muted-foreground transition hover:text-foreground">Sign in</Link>
        </div>

        <Link
          to="/signup"
          className="rounded-full bg-foreground px-4 py-1.5 text-xs font-medium text-background transition hover:opacity-80"
        >
          Try Nocta
        </Link>
      </div>
    </nav>
  );
}
