import { ArrowUpRight } from 'lucide-react';

const LeadingCompaniesCard = () => (
  <article className="md:aspect-square flex flex-col group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-white bg-gray-800/80 border border-gray-700 rounded-3xl p-6 sm:p-8 justify-between">
    <div className="flex items-center justify-between">
      <span className="text-base sm:text-lg font-medium text-theme">บริษัทชั้นนำ</span>
      <button className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur hover:bg-white/30 transition-all duration-200">
        <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </div>
    <div className="mt-4">
      <p className="text-base sm:text-lg text-gray-300 mb-4">บริษัทเหล่านี้กำลังเปิดรับสมัคร</p>
      <div className="flex gap-2 sm:gap-4 items-center">
        <img src="https://placehold.co/60x60/FFFFFF/000000?text=A" className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-white border-2 border-gray-500" alt="Company A" />
        <img src="https://placehold.co/60x60/CCCCCC/000000?text=B" className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-white border-2 border-gray-500" alt="Company B" />
        <img src="https://placehold.co/60x60/999999/FFFFFF?text=C" className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-white border-2 border-gray-500" alt="Company C" />
        <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-gray-700 flex items-center justify-center text-base sm:text-lg font-bold text-gray-400">+20</div>
      </div>
    </div>
  </article>
);

export default LeadingCompaniesCard;