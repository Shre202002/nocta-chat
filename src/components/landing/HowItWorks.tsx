import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Sign Up", desc: "Create your free account in seconds." },
  { num: "02", title: "Configure", desc: "Set your bot's name, theme, and welcome message." },
  { num: "03", title: "Embed", desc: "Paste one script tag and go live instantly." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          className="text-center text-3xl font-bold sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          How it <span className="gradient-text">works</span>
        </motion.h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              className="relative rounded-2xl border border-border bg-card p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <span className="text-5xl font-extrabold gradient-text">{s.num}</span>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
