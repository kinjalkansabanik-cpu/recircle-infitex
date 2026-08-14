import { useEffect, useState } from 'react';
import {
  Recycle,
  MapPin,
  Factory,
  Layers,
  Mail,
  Phone,
  ArrowUpRight,
  ArrowRight,
} from 'lucide-react';

const HERO_IMAGE =
  'https://images.pexels.com/photos/236748/pexels-photo-236748.jpeg?auto=compress&cs=tinysrgb&w=1600';

const metrics = [
  {
    icon: Factory,
    value: '1,200',
    unit: 'tons / month',
    label: 'Output Capacity',
  },
  {
    icon: MapPin,
    value: 'Sachin GIDC',
    unit: 'Surat, Gujarat',
    label: 'Facility Location',
  },
  {
    icon: Layers,
    value: 'Polyester',
    unit: 'textile waste',
    label: 'Recovery Focus',
  },
];

function useReveal() {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShown(true), 80);
    return () => clearTimeout(t);
  }, []);
  return shown;
}

function App() {
  const shown = useReveal();

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* ── Top bar ── */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/70 border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center w-9 h-9 rounded-lg bg-gradient-brand text-white shadow-sm shadow-brand-blue/30">
              <Recycle className="w-5 h-5" strokeWidth={2.2} />
            </span>
            <span className="font-display font-semibold text-[15px] tracking-tight text-brand-blue">
              ReCircle InfiTex
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[12px] font-medium text-black/60">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green" />
            </span>
            Website Coming Soon
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28">
        {/* ambient gradient backdrop */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-32 w-[36rem] h-[36rem] rounded-full bg-brand-blue/10 blur-3xl" />
          <div className="absolute top-40 -right-40 w-[34rem] h-[34rem] rounded-full bg-brand-green/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          {/* copy */}
          <div
            className={`lg:col-span-7 transition-all duration-1000 ${
              shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue/[0.04] px-3.5 py-1.5 text-[12px] font-semibold text-brand-blue">
              <Recycle className="w-3.5 h-3.5" strokeWidth={2.4} />
              A Joint Venture
            </div>

            <h1 className="mt-6 font-display font-bold tracking-tightest text-[clamp(2.6rem,7vw,5.25rem)] leading-[0.98] text-black">
              Building India&apos;s{' '}
              <span className="text-gradient-brand">Largest Textile</span>{' '}
              Recovery Facility
            </h1>

            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-black/65">
              A joint venture between ReCircle and Alliance InfiTex, focused on
              industrial-scale textile recovery and circularity.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-[14px] font-semibold text-white shadow-lg shadow-brand-blue/25 transition-transform duration-300 hover:scale-[1.03] active:scale-95"
              >
                Get in touch
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-[14px] font-medium text-black/70">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                Website launching soon
              </span>
            </div>
          </div>

          {/* visual */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 delay-200 ${
              shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-brand opacity-20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-black/10 shadow-2xl shadow-brand-blue/20">
                <img
                  src={HERO_IMAGE}
                  alt="Industrial textile rolls in a recovery facility"
                  className="h-[300px] sm:h-[380px] lg:h-[440px] w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/70 via-brand-blue/10 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <p className="text-white/80 text-[11px] font-semibold uppercase tracking-[0.18em]">
                    Surat TRF
                  </p>
                  <p className="mt-1 text-white font-display font-semibold text-lg tracking-tight">
                    Textile-to-Textile Circularity
                  </p>
                </div>
              </div>

              {/* floating badge */}
              <div className="absolute -top-5 -left-5 hidden sm:flex animate-float-slow items-center gap-2.5 rounded-2xl bg-white/90 backdrop-blur border border-black/5 px-4 py-3 shadow-xl shadow-brand-blue/10">
                <span className="grid place-items-center w-9 h-9 rounded-xl bg-brand-green/15 text-brand-green">
                  <Recycle className="w-5 h-5" strokeWidth={2.3} />
                </span>
                <div className="leading-tight">
                  <p className="text-[11px] font-medium text-black/50">Circularity</p>
                  <p className="text-[13px] font-bold text-black">At industrial scale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Project snapshot ── */}
      <section className="py-16 lg:py-20 bg-gradient-brand-soft border-y border-black/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-green">
                Project Snapshot
              </p>
              <h2 className="mt-2 font-display font-semibold text-3xl lg:text-4xl tracking-tight text-brand-blue">
                Surat Textile Recovery Facility
              </h2>
            </div>
            <p className="max-w-md text-[14px] leading-relaxed text-black/55">
              India&apos;s next-generation textile recovery infrastructure,
              designed to accelerate textile-to-textile circularity.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className={`group relative rounded-2xl bg-white border border-black/8 p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-blue/10 ${
                  shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${300 + i * 120}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="grid place-items-center w-11 h-11 rounded-xl bg-brand-blue/[0.06] text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
                    <m.icon className="w-5 h-5" strokeWidth={2.1} />
                  </span>
                  <span className="text-[12px] font-bold text-black/20">
                    0{i + 1}
                  </span>
                </div>
                <p className="mt-5 font-display font-bold text-2xl tracking-tight text-black">
                  {m.value}
                </p>
                <p className="text-[13px] font-medium text-brand-green">
                  {m.unit}
                </p>
                <p className="mt-1 text-[13px] text-black/50">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partnership ── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-green">
            The Partnership
          </p>
          <h2 className="mt-3 font-display font-semibold text-3xl lg:text-5xl tracking-tight text-black">
            ReCircle <span className="text-brand-blue">×</span> Alliance InfiTex
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-[16px] leading-relaxed text-black/60">
            Combining expertise in resource recovery, textile manufacturing,
            recycling, and circularity to build a scalable textile recovery
            ecosystem.
          </p>

          <div className="mt-12 flex items-center justify-center gap-4 sm:gap-8">
            <PartnerCard name="ReCircle" tag="Resource Recovery" />
            <div className="grid place-items-center w-12 h-12 rounded-full bg-gradient-brand text-white font-display font-bold text-lg shadow-lg shadow-brand-blue/25">
              ×
            </div>
            <PartnerCard name="Alliance InfiTex" tag="Textile Manufacturing" />
          </div>
        </div>
      </section>

      {/* ── Coming soon / contact ── */}
      <section
        id="contact"
        className="relative py-20 lg:py-28 overflow-hidden bg-brand-blue"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-32 -right-24 w-[40rem] h-[40rem] rounded-full bg-brand-green/20 blur-3xl" />
          <div className="absolute -top-24 -left-24 w-[30rem] h-[30rem] rounded-full bg-brand-green/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold text-white/90 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-80 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green" />
            </span>
            Coming Soon
          </div>

          <h2 className="mt-6 font-display font-bold text-4xl lg:text-6xl tracking-tightest leading-[1] text-white">
            Something Circular Is{' '}
            <span className="text-brand-green">Coming to Surat.</span>
          </h2>
          <p className="mt-5 text-[16px] text-white/70">
            ReCircle InfiTex Private Limited — website launching soon.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <a
              href="mailto:info@recircle.in"
              className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-4 text-left backdrop-blur transition-all duration-300 hover:bg-white/[0.12] hover:-translate-y-0.5"
            >
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-brand-green text-white">
                <Mail className="w-5 h-5" strokeWidth={2.1} />
              </span>
              <span className="flex-1">
                <span className="block text-[11px] font-medium uppercase tracking-wider text-white/50">
                  Email
                </span>
                <span className="block text-[15px] font-semibold text-white">
                  info@recircle.in
                </span>
              </span>
              <ArrowUpRight className="w-4 h-4 text-white/40 transition-all duration-300 group-hover:text-brand-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="tel:+919004240004"
              className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-4 text-left backdrop-blur transition-all duration-300 hover:bg-white/[0.12] hover:-translate-y-0.5"
            >
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-brand-green text-white">
                <Phone className="w-5 h-5" strokeWidth={2.1} />
              </span>
              <span className="flex-1">
                <span className="block text-[11px] font-medium uppercase tracking-wider text-white/50">
                  Phone
                </span>
                <span className="block text-[15px] font-semibold text-white">
                  +91 9004240004
                </span>
              </span>
              <ArrowUpRight className="w-4 h-4 text-white/40 transition-all duration-300 group-hover:text-brand-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <p className="mt-10 text-[13px] text-white/45">
            Interested in learning more? Reach out — we&apos;d love to connect.
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-black text-white/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center w-8 h-8 rounded-lg bg-gradient-brand text-white">
              <Recycle className="w-4 h-4" strokeWidth={2.4} />
            </span>
            <span className="text-[13px] font-semibold text-white">
              ReCircle InfiTex Private Limited
            </span>
          </div>
          <p className="text-[12px]">
            © {new Date().getFullYear()} ReCircle InfiTex Pvt. Ltd. · Surat,
            Gujarat, India
          </p>
        </div>
      </footer>
    </div>
  );
}

function PartnerCard({ name, tag }: { name: string; tag: string }) {
  return (
    <div className="flex-1 max-w-[16rem] rounded-2xl border border-black/10 bg-white px-6 py-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-blue/10">
      <p className="font-display font-bold text-xl tracking-tight text-brand-blue">
        {name}
      </p>
      <p className="mt-1.5 text-[12px] font-medium text-black/50">{tag}</p>
    </div>
  );
}

export default App;
