import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AuroraBackground } from "./AuroraBackground";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
      <AuroraBackground />
      <div className="absolute inset-0 grid-bg opacity-60" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
          Announcing Nocta 1.0
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl font-medium leading-[0.95] tracking-[-0.04em] text-foreground sm:text-7xl lg:text-[8rem]"
        >
          Understand
          <br />
          the universe.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-8 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          Nocta is an AI chatbot platform built to deploy intelligent agents on any website in seconds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            to="/signup"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-80"
          >
            Build with Nocta
          </Link>
          <a
            href="#features"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
          >
            Learn more
          </a>
        </motion.div>
      </div>

      {/* bottom marquee-style strip like x.ai */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-10 left-0 right-0 flex items-center justify-center gap-12 text-[11px] uppercase tracking-[0.2em] text-muted-foreground/50"
      >
        <span>Reasoning</span>
        <span className="hidden sm:inline">·</span>
        <span className="hidden sm:inline">Embed</span>
        <span className="hidden md:inline">·</span>
        <span className="hidden md:inline">Analytics</span>
        <span className="hidden md:inline">·</span>
        <span className="hidden md:inline">Realtime</span>
      </motion.div>
    </section>
  );
}
