import ProgressBar from "@/components/UI/ProgressBar";
import AboutMe from "@/container/About";
import Gallery from "@/container/Gallery";
import MainPage from "@/container/MainPage";

export default function Home() {
  return (
    <>
      <MainPage />
      <AboutMe />
      <Gallery />
      {/* <ProgressBar /> */}
    </>
  );
}
