const ListLoading = () => {
  return (
    <div className="overflow-x-auto animate-pulse">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-[#2499EF] text-white">
          <tr>
            <th className="px-4 py-2 border">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </th>
            <th className="px-4 py-2 border">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </th>
            <th className="px-4 py-2 border">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </td>
            <td className="px-4 py-2 border">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </td>
            <td className="px-4 py-2 border">
              <div className="inline-block h-6 bg-gray-200 rounded w-20 mr-2"></div>
              <div className="inline-block h-6 bg-gray-200 rounded w-20"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListLoading;
