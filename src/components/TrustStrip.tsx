import { Check } from "lucide-react";

const trustPoints = [
  {
    title: "No long contracts",
    sub: "Support when you need it, nothing you're locked into."
  },
  {
    title: "No confusing fees",
    sub: "You'll always know what you're paying for."
  },
  {
    title: "An extension of your team",
    sub: "We work the way you already work."
  }
];

export function TrustStrip() {
  return (
    <section className="bg-ink py-[52px]">
      <div className="max-w-[1180px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {trustPoints.map((point, i) => (
          <div key={i} className="flex items-start gap-[14px]">
            <Check className="flex-none w-5 h-5 text-amber mt-[2px]" />
            <p className="font-display text-paper text-[16px] font-medium leading-normal">
              {point.title}
              <span className="block font-body font-normal text-slate-light text-[14px] mt-[3px]">
                {point.sub}
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
