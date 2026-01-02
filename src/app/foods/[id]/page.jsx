import React from "react";

export async function generateMetadata({params}){
    const {id} = await params;
    const res = await fetch(
        `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    );

    const {details = {}} = await res.json();
    return {
        title: details.title,
    };
}

const getSingleFood = async (id) => {
    const res = await fetch(
        `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    );

    const data = await res.json();
    return data.details;
};

const page = async ({ params }) => {
    const { id } = await params;
    const food = await getSingleFood(id);

    if (!food) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                <h2 className="text-xl font-semibold">Food not found</h2>
            </div>
        );
    }

    const {
        title,
        foodImg,
        price,
        category,
        area,
        video,
    } = food;

    return (
        <div className="min-h-screen bg-black text-white px-4 py-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Image */}
                <div className="rounded-xl overflow-hidden border border-neutral-800">
                    <img
                        src={foodImg}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="space-y-4">
                    <span className="inline-block px-3 py-1 text-xs rounded-full bg-neutral-800 text-neutral-300">
                        {category}
                    </span>

                    <h1 className="text-3xl font-bold">{title}</h1>

                    <p className="text-neutral-400">
                        <span className="font-medium text-neutral-200">Cuisine:</span>{" "}
                        {area}
                    </p>

                    <p className="text-2xl font-bold text-amber-400">
                        ৳ {price}
                    </p>

                    {/* Actions */}
                    <div className="flex gap-4 pt-4">
                        <button className="px-6 py-3 bg-amber-500 text-black rounded-lg font-semibold hover:bg-amber-400 transition">
                            Add to Cart
                        </button>

                        {video && (
                            <a
                                href={video}
                                target="_blank"
                                className="px-6 py-3 border border-neutral-700 rounded-lg hover:bg-neutral-800 transition"
                            >
                                Watch Recipe
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
