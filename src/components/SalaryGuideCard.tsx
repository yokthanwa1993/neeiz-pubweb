import { DollarSign } from 'lucide-react';

const SalaryGuideCard = () => (
  <article className="md:aspect-square flex flex-col group hover:border-theme/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gray-800 border border-gray-700 rounded-3xl p-6 sm:p-8 justify-between">
    <div className="flex items-center justify-between">
      <span className="text-base sm:text-lg font-medium text-gray-400">Salary Guide</span>
      <div className="flex items-center gap-2 text-theme">
        <DollarSign className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="text-sm sm:text-md font-medium">ฐานข้อมูลล่าสุด</span>
      </div>
    </div>
    <div className="mt-4">
      <p className="text-base sm:text-lg text-gray-400 mb-2">วางแผนอนาคต</p>
      <span className="text-3xl sm:text-4xl text-white font-semibold">สำรวจฐานเงินเดือน</span>
      <p className="text-sm sm:text-md text-gray-500 mt-2">เปรียบเทียบเงินเดือนในสายอาชีพต่างๆ</p>
    </div>
  </article>
);

export default SalaryGuideCard;