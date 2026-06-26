interface InfoCardProps {
  iconType: "phone" | "email" | "location";
  title: string;
  value: string;
  href?: string;
  subtitle?: string;
}

export default function InfoCard({ iconType, title, value, href, subtitle }: InfoCardProps) {
  const getIcon = () => {
    switch (iconType) {
      case "phone":
        return (
          <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-[#185FA5] fill-none stroke-[1.7]">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 7.18 2 2 0 015 5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.91 12a16 16 0 006.29 6.29l.38-.38a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
        );
      case "email":
        return (
          <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-[#185FA5] fill-none stroke-[1.7]">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        );
      case "location":
        return (
          <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-[#C49A35] fill-none stroke-[1.7]">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        );
    }
  };

  const iconBgClass = iconType === "location" ? "bg-[rgba(196,154,53,0.1)]" : "bg-[#E6F1FB]";

  return (
    <div className="bg-white border border-[rgba(24,95,165,0.15)] rounded-[18px] p-[28px_30px] flex items-start gap-[18px] hover:shadow-[0_12px_40px_rgba(24,95,165,0.09)] hover:-translate-y-[2px] transition-all duration-200">
      <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center ${iconBgClass}`}>
        {getIcon()}
      </div>
      <div className="info-text">
        <h4 className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[#2a3f6a] mb-1.5">{title}</h4>
        {href ? (
          <a href={href} className="text-[16px] font-medium text-[#0a1628] no-underline block leading-[1.5] hover:text-[#185FA5] transition-colors">
            {value}
          </a>
        ) : (
          <span className="text-[16px] font-medium text-[#0a1628] block leading-[1.5]">{value}</span>
        )}
        {subtitle && <span className="text-[13px] text-[#5a6e8a] font-normal mt-0.5 block">{subtitle}</span>}
      </div>
    </div>
  );
}