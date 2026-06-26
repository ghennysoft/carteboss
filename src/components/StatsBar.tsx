export default function StatsBar() {
  return (
    <div className="bg-[#C49A35] py-0">
      <div className="max-w-[1000px] mx-auto py-7 px-[5%] grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="px-6 border-r border-[rgba(10,22,40,0.15)] last:border-r-0 sm:border-r-[rgba(10,22,40,0.15)] sm:[&:not(:last-child)]:border-r">
          <div className="font-['Playfair_Display',serif] text-4xl font-black text-[#0a1628] leading-none">100+</div>
          <div className="text-[13px] font-medium text-[rgba(10,22,40,0.6)] mt-1">Professionnels équipés</div>
        </div>
        <div className="px-6 border-r border-[rgba(10,22,40,0.15)] last:border-r-0 sm:border-r-[rgba(10,22,40,0.15)] sm:[&:not(:last-child)]:border-r">
          <div className="font-['Playfair_Display',serif] text-4xl font-black text-[#0a1628] leading-none">KIN</div>
          <div className="text-[13px] font-medium text-[rgba(10,22,40,0.6)] mt-1">Kinshasa — siège opérationnel</div>
        </div>
        <div className="px-6">
          <div className="font-['Playfair_Display',serif] text-4xl font-black text-[#0a1628] leading-none">2</div>
          <div className="text-[13px] font-medium text-[rgba(10,22,40,0.6)] mt-1">Gammes de cartes à vendre</div>
        </div>
      </div>
    </div>
  );
}