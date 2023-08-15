import Category from "./components/Category";
import Hero from "./components/Hero";
import NewArrival from "./components/NewArrival";

export const dynamic = "force-dynamic";
export default async function Home() {
  // #################################
  const res = await fetch(`${process.env.LOCAL}/api/categories`);
  const categories = await res.json();
  // #################################

  return (
    <div className="container min-h-screen">
      <Hero />
      <NewArrival />
      {categories?.map((cat) => (
        <Category key={cat._id} {...cat} />
      ))}
    </div>
  );
}
