import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-paper/92 backdrop-blur-md border-b border-paper-line">
      <div className="flex items-center justify-between px-8 py-[16px] max-w-[1180px] mx-auto">
        <a className="no-underline transition-opacity hover:opacity-90" href="#top" aria-label="Al-Aahnaf IT Consulting Homepage">
          <Logo size="md" />
        </a>
        <a 
          className="font-mono text-[13px] tracking-wide bg-ink text-paper px-5 py-[11px] rounded-[3px] no-underline whitespace-nowrap transition-colors hover:bg-ink-muted" 
          href="#book"
        >
          Book a free consult
        </a>
      </div>
    </header>
  );
}
