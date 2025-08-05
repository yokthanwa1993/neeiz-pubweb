import { ExternalLink } from 'lucide-react';

const FeaturedJobCard = () => (
  <article className="relative overflow-hidden group hover:border-theme/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gray-800 border border-gray-700 rounded-3xl min-h-[360px]">
    <div className="relative h-full flex flex-col p-6 sm:p-8 justify-between">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-theme-transparent text-theme px-4 py-2 text-sm sm:text-md font-medium border border-theme-transparent">ตำแหน่งงานแนะนำ</span>
        <button className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition-all duration-200">
          <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
      <div className="">
        <h3 className="text-3xl sm:text-4xl mb-2 tracking-tight text-white font-semibold">Senior Frontend Developer</h3>
        <p className="text-lg sm:text-xl text-gray-400 mb-2">Agoda • Bangkok</p>
        <p className="text-base sm:text-lg text-gray-400">สร้างสรรค์ประสบการณ์ผู้ใช้ที่น่าทึ่ง</p>
      </div>
    </div>
  </article>
);

export default FeaturedJobCard;