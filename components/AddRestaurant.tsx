"use client"
import { createRestaurant } from '@/actions/createRestaurant';
import { useState } from 'react';

export const AddRestaurant = () => {
    const [name, setName] = useState('');    
    const handleSubmit = async (e) => {
        e.preventDefault();
        createRestaurant(name);
    };
    return (
        <div>
            <h1>Add a restaurant</h1>
            <form className="post-form" onSubmit={handleSubmit}>                
                <label className='flex col'>
                    Name
                    <input
                        className='input'
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}