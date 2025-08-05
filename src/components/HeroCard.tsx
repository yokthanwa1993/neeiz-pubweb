import { Search } from 'lucide-react';

const HeroCard = () => (
  <article className="relative col-span-1 md:row-span-2 overflow-hidden md:col-span-2 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=3548&auto=format&fit=crop')] bg-cover rounded-3xl min-h-[500px] md:min-h-0">
    <div className="absolute inset-0 bg-black/50"></div>
    <div className="absolute inset-0 flex flex-col p-6 sm:p-8 md:p-12 justify-between">
      <div className="flex items-start justify-between">
        <h1 className="max-w-xl leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold tracking-tight">ค้นพบโอกาสใหม่<br />ที่ใช่สำหรับ<span className="text-theme">คุณ</span></h1>
        <div className="hidden sm:flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-2 text-base md:text-lg font-medium text-white">
          <div className="h-3 w-3 rounded-full bg-theme animate-pulse"></div>
          10,000+
        </div>
      </div>
      <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <input type="text" placeholder="ชื่องาน, บริษัท, คีย์เวิร์ด" className="col-span-1 md:col-span-2 w-full bg-white/10 border-none text-white placeholder-gray-400 rounded-lg p-3 sm:p-4 text-base sm:text-xl focus:ring-2 focus:ring-theme" />
          <button className="w-full bg-theme hover:bg-theme-dark transition-all duration-300 text-gray-900 text-lg sm:text-xl font-bold rounded-lg py-3 sm:py-4 px-6 shadow-lg hover:scale-105 flex items-center justify-center gap-2">
            <Search className="w-5 h-5 sm:w-6 sm:h-6" />
            ค้นหา
          </button>
        </div>
      </div>
    </div>
  </article>
);

export default HeroCard;