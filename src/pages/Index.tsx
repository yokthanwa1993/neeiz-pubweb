import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCard from "@/components/HeroCard";
import ResumeBuilderCard from "@/components/ResumeBuilderCard";
import FeaturedJobCard from "@/components/FeaturedJobCard";
import LeadingCompaniesCard from "@/components/LeadingCompaniesCard";
import SalaryGuideCard from "@/components/SalaryGuideCard";
import JobCategoriesCard from "@/components/JobCategoriesCard";

const Index = () => {
  return (
    <div className="min-h-full antialiased text-gray-200">
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10 opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=3540&auto=format&fit=crop')" }}></div>
      
      <Header />

      <main className="max-w-screen-2xl lg:px-8 mx-auto px-4 pb-24">
        <section className="p-4 md:p-8 bg-gray-900/50 border border-gray-800 rounded-[40px] sm:rounded-[50px] shadow-2xl backdrop-blur-lg">
          <div className="grid auto-rows-auto gap-4 md:gap-6 md:grid-cols-3">
            <HeroCard />
            <ResumeBuilderCard />
            <FeaturedJobCard />
            <LeadingCompaniesCard />
            <SalaryGuideCard />
            <JobCategoriesCard />
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Index;