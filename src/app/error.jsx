"use client";

const error = ({ error }) => {
  return (
    <div>
      <h1 className="font-semibold">Something went wrong</h1>
      <p>{error}</p>
    </div>
  );
};

export default error;
