import Banner from "@/components/UI/Banner";
import TestBanner from "@/components/UI/TestBanner";
import AboutUs from "@/container/AboutUs";
import Accordian from "@/container/Accodian";
import Campaign from "@/container/Campaign";
import Form from "@/container/Form";
import HeroComp from "@/container/Hero";
import Services from "@/container/Servicers";
import Team from "@/container/Team";
import { BannerData2 } from "@/site-data/Banner";
import { CampaignData } from "@/site-data/Campaign";
import { aboutUsData } from "@/site-data/main-page/AboutUs";
import { TeamData } from "@/site-data/Team";

export default function Home() {
  return (
    <>
      <HeroComp />
      <AboutUs data={aboutUsData} />
      <Banner data={BannerData2} />
      <Services />
      {/* <Campaign data={CampaignData} /> */}
      {/* <TestBanner /> */}
      <Team data={TeamData} />
      <Accordian />
      {/* <Form /> */}
    </>
  );
}
