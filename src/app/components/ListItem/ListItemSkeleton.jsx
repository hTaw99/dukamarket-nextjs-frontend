const ListItemSkeleton = () => {
  return (
    <div className="animate-pulse grid grid-cols-[2fr_4fr]  gap-4 p-4  border bg-white rounded-md">
      <div className=" bg-gray-200 rounded"></div>
      <div className="flex flex-col gap-4">
        <div className=" bg-gray-200 rounded w-full h-6"></div>
        <div className=" bg-gray-200 rounded w-2/3 h-4"></div>
        <div className=" flex gap-4 mt-auto">
          <div className="bg-gray-200 rounded w-full h-8"></div>
          <div className="bg-gray-200 rounded w-full h-8"></div>
        </div>
      </div>
    </div>
  );
};

export default ListItemSkeleton;
