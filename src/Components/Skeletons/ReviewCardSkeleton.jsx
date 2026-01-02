const ReviewCardSkeleton = () => {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 space-y-4 animate-pulse">
      
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-neutral-700 rounded-full"></div>

        <div className="flex-1 space-y-2">
          <div className="h-4 w-32 bg-neutral-700 rounded"></div>
          <div className="h-3 w-24 bg-neutral-700 rounded"></div>
        </div>

        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-neutral-700 rounded"
            ></div>
          ))}
        </div>
      </div>

      {/* Review Lines */}
      <div className="space-y-2">
        <div className="h-4 w-full bg-neutral-700 rounded"></div>
        <div className="h-4 w-11/12 bg-neutral-700 rounded"></div>
        <div className="h-4 w-4/5 bg-neutral-700 rounded"></div>
      </div>

      {/* Footer */}
      <div className="h-4 w-20 bg-neutral-700 rounded"></div>
    </div>
  );
};

export default ReviewCardSkeleton;
