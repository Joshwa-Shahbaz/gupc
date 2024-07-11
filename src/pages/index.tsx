import Banner from "@/components/UI/Banner";
import AboutUs from "@/container/AboutUs";
import Campaign from "@/container/Campaign";
import HeroComp from "@/container/Hero";
import Services from "@/container/Servicers";
import Team from "@/container/Team";
import { BannerData1, BannerData2 } from "@/site-data/Banner";
import { CampaignData } from "@/site-data/Campaign";
import { aboutUsData } from "@/site-data/main-page/AboutUs";
import { TeamData } from "@/site-data/Team";

export default function Home() {
  return (
    <>
      <HeroComp />
      <AboutUs data={aboutUsData} />
      <Services />
      <Banner data={BannerData1} />
      {/* <Banner data={BannerData2} /> */}
      <Campaign data={CampaignData} />
      <Team data={TeamData} />
    </>
  );
}
