"use client";
import Link from "next/link";

const error = ({ error }) => {
  return (
    <>
      <div className="bg-white h-screen flex rounded-md py-12 flex-col justify-start gap-8 items-center 2xl:w-[1570px] w-11/12 m-auto">
        {/* <video muted="muted" autoPlay="autoplay" loop="loop">
          <source src={errorVideo} type="video/mp4" />
        </video> */}
        <div className="text-center">
          <h1 className="text-neutral-800 text-2xl font-extrabold mb-4">{`Oops! Something went wrong :(`}</h1>
          <div className="text-gray-500">
            <p className="mb-2">the page you are looking for can't be found.</p>
            <p>Maybe the links below can be helpful.</p>
            <p>
              Go back to DukaMarket
              {/* <Link to="/" className="underline">
          homepage
        </Link> */}
            </p>
          </div>
        </div>

        <Link href="/" className="underline">
          Go to homepage
        </Link>
      </div>
    </>
  );
};

export default error;
