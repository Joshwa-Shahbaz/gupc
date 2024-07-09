import CustomCarousel from "@/components/UI/CustomCarousel";
import AboutUs from "@/container/AboutUs";
import HeroComp from "@/container/Hero";
import Services from "@/container/Servicers";
import { aboutUsData } from "@/site-data/main-page/AboutUs";
import { serviceData } from "@/site-data/Service";

export default function Home() {
  return (
    <>
      <HeroComp />
      <AboutUs data={aboutUsData} />
      <Services data={serviceData} />
      {/* <CustomCarousel /> */}
    </>
  );
}
