import TopRatedDoctors from "@/components/TopRatedDoctors/TopRatedDoctors";
import HeroSection from "@/components/ui/HomePage/HeroSection/HeroSection";
import Specialist from "@/components/ui/HomePage/Specialist/Specialist";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
    </>
  );
};

export default Home;
