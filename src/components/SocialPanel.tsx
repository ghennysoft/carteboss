import Link from "next/link";

const socialItems = [
  {
    name: "Instagram",
    handle: "@boss.sarl.official",
    url: "https://www.instagram.com/boss.sarl.official/",
    logo: "📷",
    logoClass: "bg-[linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)] text-white",
  },
  {
    name: "TikTok",
    handle: "@boss.sarl.official",
    url: "https://www.tiktok.com/@boss.sarl.officia",
    logo: "♫",
    logoClass: "bg-black text-white text-base",
  },
  {
    name: "LinkedIn",
    handle: "BOSS.SARL",
    url: "https://www.linkedin.com/company/boss-sarl",
    logo: "in",
    logoClass: "bg-[#0077b5] text-white text-xs tracking-[-0.5px]",
  },
];

export default function SocialPanel() {
  return (
    <div className="bg-[#0a1628] rounded-[18px] p-[28px_30px] border border-[rgba(196,154,53,0.15)]">
      <h4 className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[rgba(255,255,255,0.4)] mb-[18px]">
        Réseaux sociaux
      </h4>
      <div className="flex flex-col gap-3.5">
        {socialItems.map((item) => (
          <Link
            key={item.name}
            href={item.url}
            target="_blank"
            className="flex items-center gap-3.5 px-4 py-3 rounded-[10px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] hover:bg-[rgba(196,154,53,0.08)] hover:border-[rgba(196,154,53,0.2)] transition-all duration-200 no-underline"
          >
            <div className={`w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0 text-sm font-bold ${item.logoClass}`}>
              {item.logo}
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-white">{item.handle}</div>
              <div className="text-[12px] text-[rgba(255,255,255,0.4)]">{item.name}</div>
            </div>
            <span className="text-[rgba(255,255,255,0.3)] text-sm">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}