// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode } from "swiper";
import Link from "next/link";
import CardItem from "../CardItem";
import NewArrivalWrapper from "../Wrappers/NewArrivalWrapper";

const NewArrival = async () => {
  // const queries = {
  //   sort: "-createdAt",
  //   limit: 5,
  // };
  // const data = await getProducts({
  //   queryKey: ["get-products", { queries }],
  // });

  // #################################
  const res = await fetch(
    `${process.env.SERVER}/api/products?sort=-createdAt&limit=5`
  );
  const { products } = await res.json();
  // #################################

  return (
    <NewArrivalWrapper>
      <div className=" p-6 md:p-10">
        <h1 className="text-2xl font-semibold mb-2">
          Week Deals <br />
          Limited, Just Now!
        </h1>
        <h2 className="text-8xl lg:text-9xl mb-6">50%</h2>
        <Link
          href={"/products"}
          className="font-semibold py-2 px-4 text-sm md:text-base md:py-4 md:px-8 rounded-md text-red-500 bg-white "
        >
          See More
        </Link>
      </div>

      <div className="w-full bg-gray-200">
        <div
          // spaceBetween={1}
          // breakpoints={{
          //   0: {
          //     slidesPerView: 4,
          //   },
          //   465: {
          //     slidesPerView: 2,
          //   },
          //   768: {
          //     slidesPerView: 3,
          //   },
          //   1280: {
          //     slidesPerView: 4,
          //   },

          //   1535: {
          //     slidesPerView: 5,
          //   },
          // }}
          // modules={[FreeMode]}
          className="rounded-lg gap-[1px]   lg:grid lg:grid-cols-5 sm:grid sm:grid-cols-2 bg-gray-200"
          // className="w-full"
        >
          {/* {isLoading
            ? [...Array(5)].map((_, idx) => <ProductCardSkeleton key={idx} />)
            : data?.pages
                .flatMap((page) => page.products)
                .map((p) => (
                  // <SwiperSlide key={p._id}>
                  <CardItem {...p} />
                  // </SwiperSlide>
                ))} */}
          {products?.map((p) => (
            // <SwiperSlide key={p._id}>
            <CardItem key={p._id} {...p} />
            // </SwiperSlide>
          ))}
        </div>
      </div>
    </NewArrivalWrapper>
  );
};

export default NewArrival;
