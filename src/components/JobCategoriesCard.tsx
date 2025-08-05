const JobCategoriesCard = () => (
  <article className="h-full flex flex-wrap content-start gap-2 sm:gap-3 hover:border-gray-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gray-800 border border-gray-700 rounded-3xl p-6 sm:p-8">
    <div className="w-full flex items-center justify-between mb-4">
      <span className="text-base sm:text-lg font-medium text-gray-400">หมวดหมู่งานยอดนิยม</span>
    </div>
    <span className="rounded-full bg-gray-700 border border-gray-600 px-4 py-2 text-sm sm:text-lg font-medium text-gray-300 hover:border-theme hover:bg-theme-transparent hover:text-theme transition-all duration-200 hover:scale-105 cursor-pointer">เทคโนโลยี</span>
    <span className="rounded-full bg-gray-700 border border-gray-600 px-4 py-2 text-sm sm:text-lg font-medium text-gray-300 hover:border-theme hover:bg-theme-transparent hover:text-theme transition-all duration-200 hover:scale-105 cursor-pointer">การตลาด</span>
    <span className="rounded-full bg-gray-700 border border-gray-600 px-4 py-2 text-sm sm:text-lg font-medium text-gray-300 hover:border-theme hover:bg-theme-transparent hover:text-theme transition-all duration-200 hover:scale-105 cursor-pointer">ดีไซน์</span>
    <span className="rounded-full bg-gray-700 border border-gray-600 px-4 py-2 text-sm sm:text-lg font-medium text-gray-300 hover:border-theme hover:bg-theme-transparent hover:text-theme transition-all duration-200 hover:scale-105 cursor-pointer">งานขาย</span>
    <span className="rounded-full bg-gray-700 border border-gray-600 px-4 py-2 text-sm sm:text-lg font-medium text-gray-300 hover:border-theme hover:bg-theme-transparent hover:text-theme transition-all duration-200 hover:scale-105 cursor-pointer">ธุรการ</span>
    <span className="rounded-full bg-gray-700 border border-gray-600 px-4 py-2 text-sm sm:text-lg font-medium text-gray-300 hover:border-theme hover:bg-theme-transparent hover:text-theme transition-all duration-200 hover:scale-105 cursor-pointer">Remote</span>
  </article>
);

export default JobCategoriesCard;