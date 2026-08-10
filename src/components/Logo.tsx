interface LogoProps {
  className?: string;
  variant?: "full" | "icon";
  size?: "sm" | "md" | "lg";
}

export function LogoIcon({ className = "w-9 h-[40px]" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 112" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer Hexagon */}
      <path 
        d="M50 4 L92 28 L92 84 L50 108 L8 84 L8 28 Z" 
        fill="#12203A" 
        stroke="#243A63" 
        strokeWidth="3"
        strokeLinejoin="round"
      />
      
      {/* Connection Lines */}
      <line x1="50" y1="56" x2="50" y2="26" stroke="#EDEFEA" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="50" y1="56" x2="24" y2="72" stroke="#EDEFEA" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="50" y1="56" x2="76" y2="72" stroke="#EDEFEA" strokeWidth="4.5" strokeLinecap="round" />

      {/* Nodes */}
      <circle cx="50" cy="56" r="8.5" fill="#EDEFEA" />
      <circle cx="50" cy="26" r="5.5" fill="#C9CDC0" />
      <circle cx="24" cy="72" r="5.5" fill="#C9CDC0" />
      <circle cx="76" cy="72" r="5.5" fill="#C9CDC0" />
    </svg>
  );
}

export function Logo({ className = "", variant = "full", size = "md" }: LogoProps) {
  const iconSizes = {
    sm: "h-7 w-auto",
    md: "h-9 w-auto",
    lg: "h-11 w-auto"
  };

  const titleSizes = {
    sm: "text-[15px]",
    md: "text-[18px]",
    lg: "text-[22px]"
  };

  const subSizes = {
    sm: "text-[9px] tracking-[0.2em]",
    md: "text-[10.5px] tracking-[0.24em]",
    lg: "text-[12px] tracking-[0.28em]"
  };

  if (variant === "icon") {
    return <LogoIcon className={iconSizes[size]} />;
  }

  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      <LogoIcon className={`${iconSizes[size]} flex-none`} />
      <div className="flex flex-col justify-center">
        <span className={`font-display font-bold text-ink tracking-[0.06em] leading-none ${titleSizes[size]}`}>
          AL-AAHNAF
        </span>
        <div className="h-[1px] bg-paper-line my-[4px] w-full" />
        <span className={`font-mono text-slate uppercase leading-none ${subSizes[size]}`}>
          IT Consulting
        </span>
      </div>
    </div>
  );
}
