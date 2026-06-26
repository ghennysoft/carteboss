export default function AgentQuote() {
  return (
    <section className="py-20 px-[5%] bg-[#F7F9FC]">
      <div className="max-w-[860px] mx-auto text-center">
        <p className="font-['Playfair_Display',serif] text-[clamp(20px,2.5vw,28px)] font-normal italic text-[#0a1628] leading-[1.6] mb-7">
          <span className="text-[#C49A35]">&quot;</span>
          Depuis que je suis agent BOSS, chaque rencontre professionnelle est une opportunité. Je présente la carte, les gens sont impressionnés, et la vente se fait naturellement.
          <span className="text-[#C49A35]">&quot;</span>
        </p>
        <div className="flex items-center justify-center gap-3.5">
          <div className="w-11 h-11 rounded-full bg-[#0a1628] flex items-center justify-center font-['Playfair_Display',serif] text-base font-bold text-[#E8BC5A]">
            D
          </div>
          <div>
            <div className="text-sm font-semibold text-[#0a1628]">David N.</div>
            <div className="text-[12px] text-[#5a6e8a]">Agent BOSS — Kinshasa</div>
          </div>
        </div>
      </div>
    </section>
  );
}