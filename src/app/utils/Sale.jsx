const Sale = ({ priceAfterDiscount, price }) => {
  return (
    <>
      {priceAfterDiscount && (
        <div className=" absolute z-10 text-sm px-3 text-white rounded-md bg-green-600">
          <p>-{(((price - priceAfterDiscount) / price) * 100).toFixed()}%</p>
        </div>
      )}
    </>
  );
};

export default Sale;
