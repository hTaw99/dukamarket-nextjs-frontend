import mobile from "@/assets/mobile.jpg";
import mobile2 from "@/assets/img-11.jpg";
import mobile3 from "@/assets/img-9.jpg";
import Link from "next/link";
import HeroWrapper from "@/app/components/Wrappers/HeroWrapper";
import CustomImage from "@/app/utils/CustomImage";
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
        <CustomImage
          className="object-cover  w-full h-full "
          priority={true}
          placeholder="blur"
          src={mobile}
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
        <CustomImage
          src={mobile2}
          placeholder="blur"
          priority={true}
          className="h-full w-full object-cover origin-right object-right "
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
        <CustomImage
          src={mobile3}
          placeholder="blur"
          priority={true}
          className="h-full w-full object-cover origin-right object-right "
        />
      </div>
    </HeroWrapper>
  );
};

export default Hero;
