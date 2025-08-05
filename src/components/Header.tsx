import { useState, useEffect, useRef } from 'react';
import { Briefcase, Menu } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-transparent px-4 pb-8 relative z-30">
      <div ref={menuRef}>
        <nav className="relative flex max-w-screen-2xl lg:px-8 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] border-white/10 border rounded-full mt-8 mx-auto p-3 sm:p-4 shadow-lg backdrop-blur-xl items-center justify-between">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Briefcase className="text-theme w-7 h-7 sm:w-8 sm:h-8" />
            <span className="text-2xl sm:text-3xl font-bold text-white tracking-tighter">NEEIZ</span>
          </div>
          <div className="hidden lg:flex items-center gap-12">
            <a href="#" className="hover:text-theme transition-colors duration-200 text-2xl lg:text-3xl font-medium text-white">ค้นหางาน</a>
            <a href="#" className="hover:text-theme transition-colors duration-200 text-2xl lg:text-3xl font-medium text-white">บริษัท</a>
            <a href="#" className="hover:text-theme transition-colors duration-200 text-2xl lg:text-3xl font-medium text-white">สร้างเรซูเม่</a>
            <a href="#" className="hover:text-theme transition-colors duration-200 text-2xl lg:text-3xl font-medium text-white">เกี่ยวกับเรา</a>
          </div>
          <a href="#" className="hidden lg:inline-block bg-theme hover:bg-theme-dark transition-all duration-300 text-gray-900 text-lg font-bold rounded-full py-4 px-8 shadow-lg hover:scale-105">
            ลงทะเบียน
          </a>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden rounded-lg p-2 hover:bg-white/10 transition-colors">
            <Menu className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </button>

          {isMobileMenuOpen && (
            <ul className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-[90%] z-50 flex flex-col gap-4 rounded-3xl bg-black p-6 lg:hidden">
              <li><a href="#" className="hover:text-theme transition-colors duration-200 text-2xl font-medium text-white text-center block p-2">ค้นหางาน</a></li>
              <li><a href="#" className="hover:text-theme transition-colors duration-200 text-2xl font-medium text-white text-center block p-2">บริษัท</a></li>
              <li><a href="#" className="hover:text-theme transition-colors duration-200 text-2xl font-medium text-white text-center block p-2">สร้างเรซูเม่</a></li>
              <li><a href="#" className="hover:text-theme transition-colors duration-200 text-2xl font-medium text-white text-center block p-2">เกี่ยวกับเรา</a></li>
              <li><hr className="border-gray-700 my-2" /></li>
              <li>
                <a href="#" className="w-full text-center block bg-theme hover:bg-theme-dark transition-all duration-300 text-gray-900 text-xl font-bold rounded-full py-3 px-8 shadow-lg">
                  ลงทะเบียน
                </a>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;