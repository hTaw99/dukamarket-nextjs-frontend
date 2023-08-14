import SimilarProducts from "../../components/singleProduct/similarProducts";
import ProductDetail from "../../components/singleProduct/productDetails";
import ProductDescription from "../../components/singleProduct/ProductDescription";
// import Error from "./Error";
import SingleProductSkeleton from "@/app/components/singleProduct/Skeleton";
import getQueryClient from "@/app/getQueryClient";
import { dehydrate } from "@tanstack/query-core";
import { Hydrate, useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import { getAllReviews } from "@/apis/reviews";
import { getProducts } from "@/apis/products";
import { axiosPrivate } from "@/apis/AppClient";

// ####################################

export const generateMetadata = async ({ params }) => {
  const { productId } = params;

  const res = await fetch(`${process.env.SERVER}/api/products/${productId}`);
  const { product } = await res.json();

  return {
    title: `Dukamarket - ${product.name}`,
    description: `${product.description}`,
  };
};

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.SERVER}/api/products?limit=50`);
  const { products } = await res.json();

  return products.map((p) => ({
    productId: p._id,
  }));
};

export const revalidate = 15;

// ####################################

const Product = async ({ params }) => {
  const { productId } = params;

  // const res = await fetch(`http://localhost:5000/api/products/${productId}`);
  // const { product } = await res.json();

  const productQueryClient = getQueryClient();
  const { product } = await productQueryClient.fetchQuery(
    ["get-single-product", productId],
    async () => {
      const { data } = await axiosPrivate({
        url: `/products/${productId}`,
        method: "GET",
      });
      return data;
    }
  );
  const productDehydratedState = dehydrate(productQueryClient);

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["reviews", productId], () =>
    getAllReviews(productId)
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className="container min-h-screen">
      <div className="grid grid-cols-1 xl:grid-cols-[5fr_2fr] w-full gap-4  mb-8">
        {/* Product */}
        {/* {isLoading ? (
          <SingleProductSkeleton />
        ) : ( */}
        <div className="bg-white p-8 rounded-md">
          <Hydrate state={productDehydratedState}>
            <ProductDetail _id={productId} />
          </Hydrate>
        </div>
        {/* )} */}
        {/* ---------Similar Products ----------------- */}

        <div className="bg-white p-8 rounded-md">
          {/* <Suspense fallback={<h1>Loding similar</h1>}> */}
          {/* <Hydrate state={productDehydratedState}> */}
          <SimilarProducts productId={product?._id} />
          {/* </Hydrate> */}
          {/* </Suspense> */}
        </div>
      </div>

      <div className="bg-white p-8 rounded-md">
        <Hydrate state={dehydratedState}>
          <ProductDescription {...product} />
        </Hydrate>
      </div>
    </div>
  );
};

export default Product;
