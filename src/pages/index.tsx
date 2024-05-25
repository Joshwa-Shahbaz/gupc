import ProgressBar from "@/components/UI/ProgressBar";
import MainPage from "@/container/MainPage";

export default function Home() {
  return (
    <>
      <MainPage />
      <ProgressBar name="JavaScript" level="95%" />
    </>
  );
}
