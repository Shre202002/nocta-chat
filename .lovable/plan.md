

## Nocta ChatBot SaaS — Landing Page & Dashboard

### Design System
- **Theme**: Dark base (`#0a0a0f`) with vibrant blue/purple accent gradients (inspired by x.ai's dark aesthetic)
- **Accents**: Electric blue (`#3B82F6`) → purple (`#8B5CF6`) gradients for CTAs and highlights
- **Typography**: Clean, modern — large hero headings, subtle muted text for descriptions
- **Cards**: Dark glass-morphism style with subtle borders (`border-white/10`)

---

### 1. Landing Page (`/`)
- **Navbar**: Logo "Nocta" + nav links (Features, Pricing, Docs) + Login/Sign Up buttons
- **Hero Section**: Large headline "AI-Powered Chatbot for Your Website", animated gradient text, CTA buttons "Get Started Free" and "See Demo", subtle grid/glow background effect
- **Features Section**: 3-column grid — Easy Setup, Custom Branding, Analytics — with icons and descriptions
- **How It Works**: 3-step process (Sign Up → Configure → Embed) with numbered cards
- **Pricing Section**: Two plan cards (Free Trial / Pro) with feature comparison
- **Footer**: Links, copyright, social icons

### 2. Auth Pages
- **Login** (`/login`): Dark centered card, email + password fields, "Continue with Google" option, link to signup
- **Signup** (`/signup`): Similar card with name, email, password fields
- Uses Supabase auth (email/password + Google)

### 3. Dashboard (`/_authenticated/dashboard`) — Vercel-Style
- **Sidebar Navigation**: Collapsible sidebar with sections:
  - Overview (home icon)
  - Bot Configuration (settings icon)
  - Embed Codes (code icon)
  - Analytics (chart icon)
  - Account (user icon)
- **Top bar**: Breadcrumb, user avatar dropdown, plan badge (Free/Pro)
- **Overview Page**: Welcome card, quick stats (total conversations, active users, messages today) in metric cards, recent activity list
- **Bot Configuration Page**: Form with bot name, welcome message, theme color picker, avatar upload, toggle for auto-responses
- **Embed Codes Page**: Script tag and iframe snippets with one-click copy, live preview link, Bot ID display
- **Analytics Page**: Charts showing conversations over time, messages per day, top queries — using Recharts
- **Account Page**: Email display, plan info, upgrade CTA, logout button

### 4. Database (Supabase)
- `profiles` table (user metadata, plan type reference)
- `user_roles` table (role-based access)
- `bots` table (bot config: name, welcome message, theme settings per user)
- `conversations` table (analytics tracking)
- RLS policies ensuring users only access their own data

### 5. Route Structure
```
src/routes/
  index.tsx              → Landing page
  login.tsx              → Login
  signup.tsx             → Signup
  _authenticated.tsx     → Auth guard layout
  _authenticated/
    dashboard.tsx        → Overview
    configure.tsx        → Bot configuration
    embed.tsx            → Embed codes
    analytics.tsx        → Usage analytics
    account.tsx          → Account settings
```

