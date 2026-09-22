import { CalendarDays, Clock, MapPin, Stethoscope, Mic, Users, Utensils, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const agenda = [
  {
    icon: Mic,
    title: "Keynote address",
    description: "An opening keynote to set the stage for the evening.",
  },
  {
    icon: Users,
    title: "Expert panel discussions",
    description: "Leading professionals discuss advancements in patient care and healthcare technology.",
  },
  {
    icon: Utensils,
    title: "Networking dinner",
    description: "Connect with peers over dinner to close out the evening.",
  },
]

export default function Page() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-28">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            <Stethoscope className="size-4" aria-hidden="true" />
            For doctors &amp; medical professionals
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">Doctor Conference 2026</h1>
          <p className="mt-3 text-sm font-medium text-muted-foreground">Now on GitHub</p>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Join leading medical professionals to discuss the latest advancements in patient care and healthcare
            technology.
          </p>

          <dl className="mx-auto mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10">
            <div className="flex items-center gap-3">
              <CalendarDays className="size-5 text-primary" aria-hidden="true" />
              <div className="text-left">
                <dt className="sr-only">Date</dt>
                <dd className="font-medium">15 September 2026</dd>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="size-5 text-primary" aria-hidden="true" />
              <div className="text-left">
                <dt className="sr-only">Time</dt>
                <dd className="font-medium">6:00 PM</dd>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="size-5 text-primary" aria-hidden="true" />
              <div className="text-left">
                <dt className="sr-only">Venue</dt>
                <dd className="font-medium">Buddha Heritage, Patna</dd>
              </div>
            </div>
          </dl>

          <div className="mt-10">
            <Button asChild size="lg">
              <a href="#rsvp">RSVP now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">What happens</h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-center text-muted-foreground">
            The evening includes a keynote address, expert panel discussions, and a networking dinner.
          </p>

          <ul className="mt-12 grid gap-6 sm:grid-cols-3">
            {agenda.map((item) => (
              <li key={item.title} className="rounded-xl border border-border bg-card p-6 text-card-foreground">
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-secondary text-primary">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-medium">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RSVP */}
      <section id="rsvp" className="scroll-mt-8">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <div className="rounded-2xl border border-border bg-secondary p-8 text-center sm:p-12">
            <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Mail className="size-6" aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">How to sign up</h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-secondary-foreground">
              Please RSVP by emailing your details to{" "}
              <a href="mailto:raushan.smile@gmail.com" className="font-semibold text-foreground underline">
                raushan.smile@gmail.com
              </a>
              . RSVPs must be received by{" "}
              <span className="font-semibold text-foreground">September 10, 2026</span>.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <a href="mailto:raushan.smile@gmail.com?subject=RSVP%20-%20Doctor%20Conference%20(15%20Sep%202026)&body=Please%20include%20your%20details%20below%3A%0A%0AName%3A%0AProfession%2FSpecialty%3A%0AContact%20number%3A%0A">
                  RSVP by email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-8 text-center text-sm text-muted-foreground">
          Doctor Conference · 15 September 2026 · 6:00 PM
        </div>
      </footer>
    </main>
  )
}
