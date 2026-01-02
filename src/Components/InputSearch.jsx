"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const InputSearch = () => {
    const router = useRouter();
    const params = useSearchParams();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const value = form.search.value;
        
        const newParams = new URLSearchParams(params.toString())
        newParams.set('search', value);
        router.push(`?${newParams.toString()}`)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                name='search'
                className='px-1 py-3 border-2 rounded w-xl' 
                type="text" placeholder='Enter Food Name' />
                <button className='px-4 py-3 bg-amber-400 rounded'>Search</button>
            </form>
        </div>
    );
};

export default InputSearch;