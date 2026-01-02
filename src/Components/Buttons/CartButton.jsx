"use client"
import { CartContext } from '@/Context/CartProvider';
import React, { use, useState } from 'react';

const CartButton = ({food}) => {
    const [inCart, setInCart] = useState(false);
    const {addToCart} = use(CartContext);
    const handleAdd2Cart = () => {
        addToCart(true);
        setInCart(true);
    }

    return (
        <button
            onClick={handleAdd2Cart}
            disabled={inCart}
            className="flex-1 bg-amber-500 text-black py-2 rounded-lg text-sm font-semibold hover:bg-amber-400 transition disabled:bg-gray-100 disabled:text-gray-500"
        >
            {inCart ? "Added" : "Add to Cart"}
        </button>
    );
};

export default CartButton;