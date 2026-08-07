import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MapPin, Send, ExternalLink } from "lucide-react";
import { brandLinks, personalInfo } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    window.setTimeout(() => setSent(false), 5000);
  };

  const field =
    "w-full rounded-xl border-2 border-border bg-background/60 px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40 sm:text-sm";

  return (
    <section id="contact" className="relative px-5 py-16 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Exceptional"
          subtitle="Open to architectural advisory, AI systems work, commerce builds and growth partnerships."
        />

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="glass h-full p-6 sm:p-8">
              <h3 className="font-display text-2xl font-bold text-foreground">Direct Contact</h3>
              <a
                href={`mailto:${personalInfo.email}`}
                className="mt-5 flex items-center gap-3 rounded-2xl border-2 border-border bg-background/50 p-4 transition-colors hover:border-primary/60"
              >
                <span className="sketch flex h-10 w-10 shrink-0 items-center justify-center bg-primary">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted-foreground">Email</span>
                  <span className="block truncate text-sm font-medium text-foreground">
                    {personalInfo.email}
                  </span>
                </span>
              </a>
              <div className="mt-3 flex items-center gap-3 rounded-2xl border-2 border-border bg-background/50 p-4">
                <span className="sketch flex h-10 w-10 shrink-0 items-center justify-center bg-secondary">
                  <MapPin className="h-5 w-5 text-secondary-foreground" />
                </span>
                <span>
                  <span className="block text-xs text-muted-foreground">Location</span>
                  <span className="block text-sm font-medium text-foreground">
                    {personalInfo.location}
                  </span>
                </span>
              </div>

              <h4 className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Official Brands & Handles
              </h4>
              <div className="mt-4 space-y-2.5">
                {brandLinks.map((b) => (
                  <a
                    key={b.href}
                    href={b.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex min-h-14 items-center justify-between gap-3 rounded-2xl border-2 border-border bg-background/40 px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-primary/60"
                  >
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-medium text-foreground">
                        {b.label}
                      </span>
                      <span className="block truncate text-xs text-muted-foreground">
                        {b.description}
                      </span>
                    </span>
                    <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="glass h-full p-6 sm:p-8">
              <h3 className="font-display text-2xl font-bold text-foreground">Send a Message</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs text-muted-foreground">
                    Name
                  </label>
                  <input id="name" name="name" required placeholder="Your name" className={field} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className={field}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="subject" className="mb-2 block text-xs text-muted-foreground">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  placeholder="Project, advisory or collaboration"
                  className={field}
                />
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="mb-2 block text-xs text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me what you're building…"
                  className={`${field} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="sketch mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Send className="h-4 w-4" /> Send Message
              </button>

              {sent ? (
                <p className="mt-4 flex items-center gap-2 rounded-xl border-2 border-chart-4/50 bg-chart-4/10 px-4 py-3 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-chart-4" />
                  Thanks — your message is noted. I&apos;ll reply from {personalInfo.email}.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}