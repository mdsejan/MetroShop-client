const ProductSkelenton = () => {
  return (
    <div className="relative p-3 flex w-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-gray-200 animate-pulse">
      <div className="relative flex h-40 lg:h-60 w-full overflow-hidden rounded-t-lg bg-gray-400">
        <span className="absolute top-2 left-2 rounded-full bg-black px-2 text-xs font-medium text-white"></span>
      </div>
      <div className="px-4 py-3">
        <h5 className="h-4 bg-gray-400 rounded w-3/4"></h5>
        <div className="h-4 bg-gray-400 rounded w-full mt-2"></div>
        <div className="h-4 bg-gray-400 rounded w-1/2 mt-2"></div>
        <div className="mt-1 mb-3 flex items-center justify-between">
          <div className="h-5 bg-gray-400 rounded w-1/4"></div>
        </div>
        <div className="h-10 bg-gray-400 rounded mt-4"></div>
      </div>
    </div>
  );
};

export default ProductSkelenton;
