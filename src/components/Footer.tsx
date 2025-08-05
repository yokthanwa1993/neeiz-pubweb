const Footer = () => (
  <footer className="md:px-12 bg-gray-900/50 border border-gray-800 rounded-[40px] sm:rounded-[50px] mt-8 p-6 sm:p-8 shadow-2xl backdrop-blur-lg">
    <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-300">
      <div className="md:col-span-2">
        <h4 className="text-xl sm:text-2xl font-semibold mb-4 tracking-tight text-white">เริ่มต้นเส้นทางอาชีพของคุณกับ NEEIZ</h4>
        <p className="text-base sm:text-lg font-light max-w-md text-gray-400">เราพร้อมเป็นส่วนหนึ่งในการเดินทางสู่ความสำเร็จของคุณ</p>
        <p className="mt-8 text-sm sm:text-md text-gray-500">© 2024 NEEIZ Thailand. All rights reserved.</p>
      </div>
      <div>
        <h5 className="text-lg font-semibold mb-4 tracking-tight text-white">สำหรับผู้หางาน</h5>
        <ul className="space-y-3 text-base sm:text-lg font-light text-gray-400">
          <li><a href="#" className="hover:text-theme transition-colors duration-200">ค้นหางาน</a></li>
          <li><a href="#" className="hover:text-theme transition-colors duration-200">บทความแนะนำ</a></li>
          <li><a href="#" className="hover:text-theme transition-colors duration-200">สำรวจเงินเดือน</a></li>
        </ul>
      </div>
      <div>
        <h5 className="text-lg font-semibold mb-4 tracking-tight text-white">สำหรับบริษัท</h5>
        <ul className="space-y-3 text-base sm:text-lg font-light text-gray-400">
          <li><a href="#" className="hover:text-theme transition-colors duration-200">ลงประกาศงาน</a></li>
          <li><a href="#" className="hover:text-theme transition-colors duration-200">ค้นหาผู้สมัคร</a></li>
          <li><a href="#" className="hover:text-theme transition-colors duration-200">ติดต่อฝ่ายขาย</a></li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;