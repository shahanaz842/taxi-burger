import Link from 'next/link';
import React from 'react';
import CartButton from '../Buttons/CartButton';
import style from "@/app/foods/foods.module.css";
import Image from 'next/image';

const FoodCard = ({ food }) => {
  const { title, foodImg, price, category, id } = food;

  return (
    <div className={`bg-neutral-900 border border-neutral-800 rounded-xl hover:border-neutral-700 transition ${style.bgGrey}`}>
      {/* Image */}
      <div className="h-48 w-full overflow-hidden rounded-t-xl">
        {/* <img
          src={foodImg}
          alt={title}
          className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
        /> */}
        <Image
          width={300}
          height={150}
          src={foodImg}
          alt={title}
          className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"></Image>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <span className="text-xs uppercase tracking-wide text-neutral-400">
          {category}
        </span>

        <h3 className="text-lg font-semibold text-white line-clamp-1">
          {title}
        </h3>

        <p className="text-lg font-bold text-amber-400">
          ৳ {price}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 pt-3">
          <CartButton food={food}></CartButton>

          <Link href={`/foods/${id}`}
            className="flex-1 border border-neutral-700 text-neutral-200 py-2 rounded-lg text-sm font-medium hover:bg-neutral-800 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

