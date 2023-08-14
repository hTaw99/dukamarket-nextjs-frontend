import React from "react";

const Description = ({ data }) => {
  return <div>{data?.product?.description}</div>;
};

export default Description;
