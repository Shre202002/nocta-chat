import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-[300px] w-[400px] rounded-full bg-primary-glow/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            Now in public beta
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          AI-Powered Chatbot{" "}
          <span className="gradient-text">for Your Website</span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Deploy an intelligent chatbot in minutes. Customize its look, train it on your content, and watch your customer engagement soar.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button size="lg" className="gradient-btn border-0 px-8 text-primary-foreground hover:opacity-90" asChild>
            <Link to="/signup">
              Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-border bg-transparent text-foreground hover:bg-secondary">
            See Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
