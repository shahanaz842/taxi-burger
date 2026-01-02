import React from 'react';
import ReviewPage from './ReviewPage';

export const metadata = {
  title: "All Reviews",
  description: "Fast food around the world",
};

const AllReviews = () => {
    return (
        <div>
            <ReviewPage></ReviewPage>
        </div>
    );
};

export default AllReviews;