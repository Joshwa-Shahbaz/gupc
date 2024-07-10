import CustomCarousel from "@/components/UI/CustomCarousel";
import AboutUs from "@/container/AboutUs";
import Campaign from "@/container/Campaign";
import HeroComp from "@/container/Hero";
import Services from "@/container/Servicers";
import Team from "@/container/Team";
import { CampaignData } from "@/site-data/Campaign";
import { aboutUsData } from "@/site-data/main-page/AboutUs";
import { serviceData } from "@/site-data/Service";

export default function Home() {
  return (
    <>
      <HeroComp />
      <AboutUs data={aboutUsData} />
      <Services />
      <Campaign data={CampaignData} />
      <Team />
      {/* <CustomCarousel /> */}
    </>
  );
}
