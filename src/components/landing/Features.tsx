import { motion } from "framer-motion";
import { Zap, Palette, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Easy Setup",
    description: "Copy a single script tag, paste it into your site, and your chatbot is live. No coding required.",
  },
  {
    icon: Palette,
    title: "Custom Branding",
    description: "Match your brand with custom colors, avatars, and welcome messages. Make it truly yours.",
  },
  {
    icon: BarChart3,
    title: "Powerful Analytics",
    description: "Track conversations, monitor engagement, and discover top queries to improve your support.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Everything you need to <span className="gradient-text">engage users</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Nocta gives you all the tools to deploy, customize, and monitor your chatbot.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="group rounded-2xl border border-border bg-card p-8 transition hover:border-primary/30 hover:glow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="mb-4 inline-flex rounded-xl gradient-btn p-3">
                <f.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-muted-foreground">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
