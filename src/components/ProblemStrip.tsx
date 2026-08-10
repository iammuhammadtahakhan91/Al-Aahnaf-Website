import { Clock, Printer, Activity } from "lucide-react";

const problems = [
  {
    icon: <Clock className="w-5 h-5" />,
    title: "A slow computer costs you every single day.",
    text: "Five minutes waiting here, ten minutes waiting there — it never feels urgent enough to fix, until it's cost you a full workday this month."
  },
  {
    icon: <Printer className="w-5 h-5" />,
    title: "Printers always jam at the worst possible moment.",
    text: "Right before a client meeting, right at month-end invoicing — never when it's convenient."
  },
  {
    icon: <Activity className="w-5 h-5" />,
    title: "Systems go down with no warning at all.",
    text: "And without a plan in place, \"we'll figure it out\" turns into a full afternoon of lost productivity."
  }
];

export function ProblemStrip() {
  return (
    <section className="py-16 border-b border-paper-line">
      <div className="max-w-[1180px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12">
        <h2 className="text-[24px] md:text-[clamp(24px,2.6vw,30px)] leading-tight text-ink">
          The problems are small on their own. Together, they add up to hours you don't get back.
        </h2>
        <div className="grid gap-[22px]">
          {problems.map((item, i) => (
            <div key={i} className="flex gap-4 pb-[22px] border-b border-paper-line last:border-b-0 last:pb-0">
              <div className="flex-none mt-[3px] text-rust">
                {item.icon}
              </div>
              <p className="text-slate text-[15.5px]">
                <strong className="text-ink font-display font-semibold block mb-[3px] text-[16px]">
                  {item.title}
                </strong>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
