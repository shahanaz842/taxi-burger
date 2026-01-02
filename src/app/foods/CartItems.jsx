"use client";
import { CartContext } from '@/Context/CartProvider';
import React, { use } from 'react';

const CartItems = () => {
    const {cart} = use(CartContext)
    return (
        <div>
            {cart.length} Items Added
        </div>
    );
};

export default CartItems;