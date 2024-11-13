import Image from "next/image";
import Banner from "./components/home/banner";
import Somos from "./components/home/somos";

export default function Home() {
  return (
    <div className="mt-20 items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
      <Banner/>
      <Somos/>
    </div>
  );
}
