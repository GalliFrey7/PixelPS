import Particle from "@/components/Particle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center h-screen relative bg-cover bg-[url('/assets/main.png')]">
      <div className="absolute right-0 top-0 h-full w-[80%] z-[2]">
        <Particle />
      </div>
      <div className="absolute right-10 md:right-5 bottom-0 z-[10]">
        <Image
          src="/assets/L1.png"
          alt="L"
          width={560}
          height={560}
          className="w-[300px] h-[300px] z-[1] md:h-[560px] md:w-[560px]"
        />
      </div>
      

      <div className="flex flex-col gap-3 z-[10] pl-40 pt-20">
        <h1 className="text-[50px] text-white max-w-[500px]">
        Welcome to{" "}
          <span className="text-red-500">PPS</span>
        </h1>
        <p className="text-[18px] text-white mb-10 md:pb-2 max-w-[400px]">
        where creativity intersects with innovation! We specialize in crafting seamless, 
        impactful websites tailored specifically to your needs. Explore our portfolio and services to realize your digital vision today!
        </p>
        <div className="relative w-[100px] h-[100px] md:w-[160px] md:h-[160px] mt-5">
          <Image
            src="/assets/earth.png"
            alt="projects"
            width={160}
            height={160}
            className="slow-spin"
          />
        </div>
      </div>
    </main>
  );
}
