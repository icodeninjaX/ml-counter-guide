export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="bg-gray-800 bg-opacity-70 rounded-xl overflow-hidden shadow-lg border border-gray-700 p-6"
        >
          {/* Hero name skeleton */}
          <div className="h-8 bg-gray-700 rounded shimmer mb-4"></div>

          {/* Role and difficulty badges skeleton */}
          <div className="flex gap-2 mb-4">
            <div className="h-6 w-20 bg-gray-700 rounded-full shimmer"></div>
            <div className="h-6 w-16 bg-gray-700 rounded-full shimmer"></div>
          </div>

          {/* Buttons skeleton */}
          <div className="flex justify-between mt-4">
            <div className="h-10 flex-grow mr-2 bg-gray-700 rounded-lg shimmer"></div>
            <div className="h-10 w-10 bg-gray-700 rounded-lg shimmer"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
