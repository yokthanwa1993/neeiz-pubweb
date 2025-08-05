import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const ResumeBuilderCard = () => (
  <article className="flex flex-col overflow-hidden group relative transition-all duration-300 hover:shadow-lg hover:-translate-y-2 text-white bg-gray-800/80 bg-cover border border-gray-700 rounded-3xl justify-between p-6 sm:p-8 min-h-[360px] md:aspect-square">
    <div>
      <div className="flex items-center justify-between mb-6">
        <span className="text-base sm:text-lg font-medium text-theme">Resume Builder</span>
        <button className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur hover:bg-white/20 transition-all duration-200">
          <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
      <h3 className="text-3xl sm:text-4xl font-semibold mb-3">สร้างเรซูเม่<br />อย่างมืออาชีพ</h3>
      <p className="text-base sm:text-lg text-gray-400 mb-6">โดดเด่นกว่าใครด้วยเรซูเม่ที่น่าประทับใจ</p>
    </div>
    <div className="space-y-3 sm:space-y-4 text-base sm:text-lg">
      <div className="flex items-center gap-3">
        <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-theme" />
        <span>เทมเพลตสวยงาม</span>
      </div>
      <div className="flex items-center gap-3">
        <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-theme" />
        <span>AI ช่วยเขียน</span>
      </div>
      <div className="flex items-center gap-3">
        <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-theme" />
        <span>ดาวน์โหลดเป็น PDF</span>
      </div>
    </div>
  </article>
);

export default ResumeBuilderCard;