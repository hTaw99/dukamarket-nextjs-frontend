import SimilarProducts from "../../components/singleProduct/similarProducts";
import ProductDetail from "../../components/singleProduct/productDetails";
import ProductDescription from "../../components/singleProduct/ProductDescription";
import getQueryClient from "@/app/utils/getQueryClient";
import { dehydrate } from "@tanstack/react-query";
import { HydrationBoundary } from "@tanstack/react-query";
import { getAllReviews } from "@/apis/reviews";
import { axiosPrivate } from "@/apis/AppClient";
import Reviews from "@/app/components/Reviews";
import Description from "@/app/components/Description";

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

// export const revalidate = 15;

// ####################################

const Product = async ({ params }) => {
  const { productId } = params;

  // const res = await fetch(`http://localhost:5000/api/products/${productId}`);
  // const { product } = await res.json();

  const productQueryClient = getQueryClient();
  const { product } = await productQueryClient.fetchQuery({
    queryKey: ["get-single-product", productId],
    queryFn: async () => {
      const { data } = await axiosPrivate({
        url: `/products/${productId}`,
        method: "GET",
      });
      return data;
    },
  });
  const productDehydratedState = dehydrate(productQueryClient);

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["reviews", productId],
    queryFn: () => getAllReviews(productId),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className="container min-h-screen">
      <div className="grid grid-cols-1 xl:grid-cols-[5fr_2fr] w-full gap-4  mb-8">
        {/* Product */}
        {/* {isPending ? (
          <SingleProductSkeleton />
        ) : ( */}
        <div className="bg-white p-8 rounded-md">
          <HydrationBoundary state={productDehydratedState}>
            <ProductDetail _id={productId} />
          </HydrationBoundary>
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
        {/* <HydrationBoundary state={dehydratedState}> */}
        <ProductDescription>
          <Reviews {...product} />
          {/* <Description /> */}
        </ProductDescription>
        {/* </HydrationBoundary> */}
      </div>
    </div>
  );
};

export default Product;
