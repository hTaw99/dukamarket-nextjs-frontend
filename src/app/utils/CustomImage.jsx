"use client";

import Image from "next/image";

const CustomImage = ({ alt = "", ...props }) => {
  return (
    <Image
      src={props.src}
      alt={alt}
      width={props.width}
      height={props.height}
      className={`${props.className} opacity-0 duration-300 transition-all`}
      onLoadingComplete={(img) => img?.classList?.remove("opacity-0")}
      placeholder={props.placeholder}
    />
  );
};

export default CustomImage;
