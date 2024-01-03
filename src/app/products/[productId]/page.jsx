import SimilarProducts from "../../components/singleProduct/similarProducts";
import ProductDetail from "../../components/singleProduct/productDetails";
import SwitchTabs from "../../components/singleProduct/SwitchTabs";
import getQueryClient from "@/app/utils/getQueryClient";
import { dehydrate } from "@tanstack/react-query";
import { HydrationBoundary } from "@tanstack/react-query";
import { getAllReviews } from "@/apis/reviews";
import { axiosPrivate } from "@/apis/AppClient";
import Reviews from "@/app/components/Reviews";
import { Suspense } from "react";

// ####################################

export const generateMetadata = async ({ params }) => {
  const { productId } = params;

  const res = await fetch(`${process.env.SERVER}/api/products/${productId}`);
  const { product } = await res.json();

  return {
    title: `Dukamarket - ${product?.name}`,
    description: `${product?.description}`,
  };
};

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.SERVER}/api/products?limit=50`);
  const { products } = await res.json();

  return products.map((p) => ({
    productId: p._id,
  }));
};

// export const revalidate = 10;

// ####################################

const Product = async ({ params }) => {
  const { productId } = params;

  const resProduct = await fetch(
    `${process.env.SERVER}/api/products/${productId}`,
    {
      next: { tags: ["singleProduct"] },
    }
  );
  const { product } = await resProduct.json();

  //  const resReviews = await fetch(
  //   `${process.env.SERVER}/api/reviews?product=${productId}`,
  //   { next: { tags: ["reviews"] } }
  // );
  // const { reviews } = await resReviews.json();

  // ################################
  // const productQueryClient = getQueryClient();
  // const { product } = await productQueryClient.fetchQuery({
  //   queryKey: ["get-single-product", productId],
  //   queryFn: async () => {
  //     const { data } = await axiosPrivate({
  //       url: `/products/${productId}`,
  //       method: "GET",
  //     });
  //     return data;
  //   },
  // });
  // const productDehydratedState = dehydrate(productQueryClient);

  // const queryClient = getQueryClient();
  // await queryClient.prefetchQuery({
  //   queryKey: ["reviews", productId],
  //   queryFn: () => getAllReviews(productId),
  // });
  // const dehydratedState = dehydrate(queryClient);
  // ################################

  return (
    <div className="container min-h-screen">
      <div className="grid grid-cols-1 xl:grid-cols-[5fr_2fr] w-full gap-4  mb-8">
        <div className="bg-white p-8 rounded-md">
          <ProductDetail productId={productId} {...product} />
        </div>

        <div className="bg-white p-8 rounded-md">
          <SimilarProducts productId={productId} />
        </div>
      </div>

      <div className="bg-white p-8 rounded-md">
        <SwitchTabs>
            <Reviews productId={productId} />
        </SwitchTabs>
      </div>
    </div>
  );
};

export default Product;
