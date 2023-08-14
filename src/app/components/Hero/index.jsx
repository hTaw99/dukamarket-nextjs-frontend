import mobile from "@/assets/mobile.jpg";
import mobile2 from "@/assets/img-11.jpg";
import mobile3 from "@/assets/img-9.jpg";
import Link from "next/link";
import Image from "next/image";
import HeroWrapper from "../Wrappers/HeroWrapper";
const Hero = () => {
  return (
    <HeroWrapper>
      <div className="h-52 md:h-full md:col-span-2 lg:row-span-2 lg:col-auto  relative rounded-md overflow-hidden bg-red-500">
        <div className="absolute top-1/2 -translate-y-1/2 p-6 md:px-12 text-white">
          <h2 className="uppercase py-1 px-4 bg-yellow-300 mb-4 text-black font-semibold inline-block text-xs rounded-sm">
            trending items
          </h2>
          <h1 className=" text-lg md:text-3xl font-semibold capitalize leading-normal mb-1">
            mega sale <br />
            brilliant shopping day
          </h1>
          <p className="text-sm sm:text-lg mb-4 md:mb-8">
            Discount 50% OFF This Week
          </p>
          <Link
            href={"/products"}
            className="font-semibold text-sm md:text-base md:py-4 md:px-8 py-2 px-4  rounded-md bg-red-500 "
          >
            Discover Now
          </Link>
        </div>
        <Image
          className="object-cover  w-full h-full "
          priority={true}
          src={mobile}
          alt=""
        />
      </div>

      <div className="relative h-52 text-white overflow-hidden rounded-md">
        <div className=" absolute top-1/2 -translate-y-1/2 p-6 md:px-12 lg:px-6 text-white">
          <h2 className="uppercase py-1 px-4 bg-white mb-4 text-black font-semibold inline-block text-xs rounded-sm">
            week deals
          </h2>
          <h1 className=" text-lg">DEALS up to 20%</h1>
          <p className="text-sm sm:text-lg mb-4">Discount 50% OFF This Week</p>
        </div>
        <Image
          src={mobile2}
          priority={true}
          className="h-full w-full object-cover origin-right object-right"
          alt=""
        />
        {/* <div>
          <h2 className="uppercase mb-4 py-1 px-4 bg-white text-[#F0567A] font-semibold inline-block text-xs sm:text-sm rounded-sm">
            mobile
          </h2>
          <p className=" text-lg">DEALS 20% OFF from $690.99</p>
        </div>
        <div>
          <Image width={200} src={tablets} alt="tablets" />
        </div> */}
      </div>

      <div className="relative h-52 text-white overflow-hidden rounded-md">
        <div className=" absolute top-1/2 -translate-y-1/2 p-6 md:px-12 lg:px-6 text-white">
          <h2 className="uppercase py-1 px-4 bg-white mb-4 text-black font-semibold inline-block text-xs rounded-sm">
            week deals
          </h2>
          <h1 className=" text-lg">DEALS up to 20%</h1>
          <p className="text-sm sm:text-lg mb-4">Discount 50% OFF This Week</p>
        </div>
        <Image
          src={mobile3}
          priority={true}
          className="h-full w-full object-cover origin-right object-right"
          alt=""
        />
        {/* <div>
          <h2 className="uppercase mb-4 py-1 px-4 bg-white text-[#F0567A] font-semibold inline-block text-xs sm:text-sm rounded-sm">
            mobile
          </h2>
          <p className=" text-lg">DEALS 20% OFF from $690.99</p>
        </div>
        <div>
          <Image width={200} src={tablets} alt="tablets" />
        </div> */}
      </div>

      {/* <div className="bg-[#965EE3] text-white p-6 md:px-12 lg:px-6  rounded-md flex justify-between items-center">
        <div>
          <h2 className="uppercase mb-4 py-1 px-4 bg-white text-[#965EE3] font-semibold inline-block text-xs sm:text-sm rounded-sm">
            week deals
          </h2>
          <p className="text-lg">DEALS 20% OFF from $690.99</p>
        </div>
        <div>
          <img width={200} src={tablets} alt="tablets" />
        </div>
      </div> */}
    </HeroWrapper>
  );
};

export default Hero;
