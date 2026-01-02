import React from 'react';

const FoodCardSkeleton = () => {
    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl animate-pulse">
            {/* Image */}
            <div className="h-48 bg-neutral-800 rounded-t-xl"></div>

            {/* Content */}
            <div className="p-4 space-y-3">
                <div className="h-3 w-20 bg-neutral-700 rounded"></div>

                <div className="h-4 w-3/4 bg-neutral-700 rounded"></div>

                <div className="h-5 w-24 bg-neutral-700 rounded"></div>

                <div className="flex gap-3 pt-3">
                    <div className="h-9 flex-1 bg-neutral-700 rounded-lg"></div>
                    <div className="h-9 flex-1 bg-neutral-700 rounded-lg"></div>
                </div>
            </div>
        </div>
    );
};

export default FoodCardSkeleton;
