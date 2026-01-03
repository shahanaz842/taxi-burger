import FeedbackCard from '@/Components/Cards/FeedbackCard';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "feedbacks",
}

const getFeedback = async () => {
    const res = await fetch("http://localhost:3000/api/feedback/", {
        cache: "force-cache",
        next: { revalidate: 60 },
    });
    return await res.json();
}

const FeedbackPage = async () => {
    const feedback = await getFeedback();

    return (
        <div>
            <div>
                <h2 className='text-2xl font-bold'>{feedback.length} Feedbacks found</h2>
                <div className='my-5'>
                    <Link href={"/feedback/add"} className='btn rounded px-5 py-2 bg-amber-600 hover:bg-amber-500'>Add Feedback</Link>
                </div>
            </div>
            <div className='my-3 space-y-5'>
                {feedback.map(fd => <FeedbackCard key={fd._id} feedback={fd}></FeedbackCard>)}
            </div>
        </div>
    );
};

export default FeedbackPage;