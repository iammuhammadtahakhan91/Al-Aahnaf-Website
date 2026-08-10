export function CTA() {
  return (
    <section className="py-[92px] text-center border-b border-paper-line" id="book">
      <div className="max-w-[1180px] mx-auto px-8">
        <span className="font-mono text-[12px] tracking-[0.14em] uppercase text-slate inline-flex justify-center">
          Free 15-minute consultation
        </span>
        <h2 className="text-[28px] md:text-[clamp(28px,4vw,42px)] max-w-[18ch] mx-auto mt-4 mb-[14px] text-ink leading-[1.15]">
          Want to see how much smoother your IT could run?
        </h2>
        <p className="text-slate text-[16.5px] max-w-[48ch] mx-auto mb-[34px]">
          Tell us what's slowing you down. We'll take a look and show you exactly where the time is going — no pressure, no sales pitch.
        </p>
        <div className="flex gap-[14px] flex-wrap justify-center">
          <a 
            className="font-mono text-[13.5px] tracking-wide px-6 py-[14px] rounded-[3px] no-underline inline-flex items-center gap-2 transition-all bg-amber text-ink font-medium hover:bg-amber-dark hover:-translate-y-[1px]" 
            href="mailto:muhammadtaha.alaahnaf@outlook.com?subject=Free%2015-minute%20IT%20consultation"
          >
            Book your free consultation
          </a>
          <a 
            className="font-mono text-[13.5px] tracking-wide px-6 py-[14px] rounded-[3px] no-underline inline-flex items-center gap-2 transition-all bg-transparent text-ink border border-ink hover:bg-ink hover:text-paper" 
            href="mailto:muhammadtaha.alaahnaf@outlook.com"
          >
            Email us instead
          </a>
        </div>
        <p className="mt-[18px] font-mono text-[12.5px] text-slate-light">
          Replace Al-Aahnaf IT Consulting with your booking link or preferred contact email.
        </p>
      </div>
    </section>
  );
}
