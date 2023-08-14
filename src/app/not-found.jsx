import notFoundImage from "@/assets/notFound.png";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="w-1/4">
        <Image src={notFoundImage} alt="" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl text-gray-800 font-semibold mb-2">
          Page Not found
        </h1>
        <p className="text-gray-500 mb-6">
          the page you are looking for can't be found.
        </p>
        <Link
          className="px-4 py-2 rounded-md bg-red-500 text-white capitalize"
          href="/"
        >
          go to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
