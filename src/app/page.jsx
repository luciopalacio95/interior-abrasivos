import Banner from "./components/home/banner";
import Somos from "./components/home/somos";
import Productos from "./components/home/productos";

export default function Home() {
  return (
    <div className="mt-20 pt-2 items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
      <Banner/>
      <Productos/>
      <Somos/>
    </div>
  );
}
