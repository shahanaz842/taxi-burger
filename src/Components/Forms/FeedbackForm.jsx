"use client"

import { useRouter } from "next/navigation";

const FeedbackForm = () => {
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = e.target.message.value;
        const res = await fetch("http://localhost:3000/api/feedback/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message }),
        });
        const data = await res.json();
        if(data.insertedId){
            alert("Success");
            router.push("/feedback");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-5 text-center">
                <textarea
                    required
                    className="w-xl border border-dashed p-3"
                    name="message"
                    id="" cols="30"
                    rows="10"></textarea>
                <hr />
                <button className='btn rounded px-5 py-2 bg-amber-500 hover:bg-amber-600 cursor-pointer'>Add Feedback</button>
            </form>
        </div>
    );
};

export default FeedbackForm;