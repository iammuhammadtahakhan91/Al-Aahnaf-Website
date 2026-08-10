import { motion } from "motion/react";

const statusItems = [
  { name: "Slow computers", label: "Detected → resolved" },
  { name: "Printer jams", label: "Detected → resolved" },
  { name: "Network downtime", label: "Detected → resolved" },
  { name: "Outdated hardware", label: "Detected → resolved" },
];

export function Hero() {
  return (
    <section className="py-[76px] md:py-[88px] border-b border-paper-line">
      <div className="max-w-[1180px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-[56px] items-center">
        <div>
          <span className="font-mono text-[12px] tracking-[0.14em] uppercase text-slate">
            For small & medium-sized businesses
          </span>
          <h1 className="text-[34px] md:text-[clamp(34px,4.4vw,52px)] leading-[1.08] mt-[18px] mb-[22px] text-ink">
            Is your business losing time to IT problems that never <em className="not-italic text-amber-dark">fully</em> go away?
          </h1>
          <p className="text-[18px] text-slate max-w-[46ch] mb-[32px]">
            Slow computers. Printers that jam at the worst moment. Systems that go down without warning. We fix it — and keep it fixed.
          </p>
          <div className="flex gap-[14px] flex-wrap">
            <a 
              className="font-mono text-[13.5px] tracking-wide px-6 py-[14px] rounded-[3px] no-underline inline-flex items-center gap-2 transition-all bg-amber text-ink font-medium hover:bg-amber-dark hover:-translate-y-[1px]" 
              href="#book"
            >
              Book a free 15-minute consult
            </a>
            <a 
              className="font-mono text-[13.5px] tracking-wide px-6 py-[14px] rounded-[3px] no-underline inline-flex items-center gap-2 transition-all bg-transparent text-ink border border-ink hover:bg-ink hover:text-paper" 
              href="#services"
            >
              See how we help
            </a>
          </div>
        </div>

        <div className="bg-ink rounded-[6px] p-[22px] md:pb-[26px] shadow-[0_30px_60px_-30px_rgba(18,32,58,0.5)]">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
            <span className="font-mono text-[12px] tracking-[0.14em] uppercase text-slate-light">System status</span>
            <div className="flex gap-[6px]">
              <span className="w-2 h-2 rounded-full bg-white/18"></span>
              <span className="w-2 h-2 rounded-full bg-white/18"></span>
              <span className="w-2 h-2 rounded-full bg-white/18"></span>
            </div>
          </div>

          <div className="space-y-0">
            {statusItems.map((item, i) => (
              <div key={i} className="flex items-center gap-[14px] py-[14px] px-1 border-b border-white/0.07 last:border-b-0">
                <motion.div 
                  className="w-[11px] h-[11px] rounded-full flex-none"
                  animate={{ 
                    backgroundColor: ["#C4573F", "#3F8F6F", "#C4573F"],
                    boxShadow: [
                      "0 0 0 4px rgba(196,87,63,0.18)", 
                      "0 0 0 4px rgba(63,143,111,0.18)",
                      "0 0 0 4px rgba(196,87,63,0.18)"
                    ]
                  }}
                  transition={{ 
                    duration: 5.2, 
                    repeat: Infinity, 
                    delay: i * 0.9,
                    ease: "easeInOut"
                  }}
                />
                <div className="flex-1 min-w-0">
                  <div className="font-display text-[14.5px] text-paper font-medium">{item.name}</div>
                  <div className="font-mono text-[11px] tracking-[0.08em] text-slate-light uppercase">{item.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[18px] pt-4 border-t border-white/10 font-mono text-[11.5px] text-slate-light flex justify-between">
            <span>Monitored by Al-Aahnaf</span>
            <span><b className="text-green font-medium">All systems operational</b></span>
          </div>
        </div>
      </div>
    </section>
  );
}
