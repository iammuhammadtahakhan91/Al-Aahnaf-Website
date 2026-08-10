import { Monitor, Printer, Package } from "lucide-react";

const services = [
  {
    icon: <Monitor className="w-[22px] h-[22px]" />,
    title: "System Support",
    description: "Fast, reliable troubleshooting for your computers, networks, and servers — so small issues get resolved before they turn into downtime.",
    tag: "Hardware & networks"
  },
  {
    icon: <Printer className="w-[22px] h-[22px]" />,
    title: "Printer Support & Repair",
    description: "Installation, maintenance, and repair to keep your office printing without interruption — no more crossing your fingers before a print run.",
    tag: "Install & maintain"
  },
  {
    icon: <Package className="w-[22px] h-[22px]" />,
    title: "IT Procurement",
    description: "The right hardware at the right price, sourced and delivered for you — so you're not overpaying, or guessing, on what your business needs.",
    tag: "Sourced for you"
  }
];

export function Services() {
  return (
    <section className="py-20" id="services">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="max-w-[56ch] mb-[44px]">
          <span className="font-mono text-[12px] tracking-[0.14em] uppercase text-slate">What we do</span>
          <h2 className="text-[26px] md:text-[clamp(26px,3vw,34px)] mt-3 text-ink">
            Three ways we keep your business running
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="bg-paper-secondary border border-paper-line rounded-[6px] p-[28px_26px_30px] flex flex-col gap-4 transition-all hover:border-amber-dark hover:-translate-y-[3px]">
              <div className="w-[42px] h-[42px] rounded-[6px] bg-ink flex items-center justify-center text-amber">
                {service.icon}
              </div>
              <h3 className="text-[19px] text-ink font-display font-semibold">{service.title}</h3>
              <p className="text-slate text-[15px]">{service.description}</p>
              <span className="mt-auto font-mono text-[11px] tracking-[0.1em] uppercase text-amber-dark">
                {service.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
