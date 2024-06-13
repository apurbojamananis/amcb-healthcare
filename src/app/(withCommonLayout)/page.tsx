import TopRatedDoctors from "@/components/ui/HomePage/TopRatedDoctors/TopRatedDoctors";
import HeroSection from "@/components/ui/HomePage/HeroSection/HeroSection";
import Specialist from "@/components/ui/HomePage/Specialist/Specialist";
import WhyUs from "@/components/ui/HomePage/WhyUs/WhyUs";
import HowItWorks from "@/components/ui/HomePage/HowItWorks/HowItWorks";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
      <WhyUs />
      <HowItWorks />
    </>
  );
};

export default Home;
