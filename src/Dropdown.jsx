import React, { useState } from 'react'
import { Icon } from '@iconify-icon/react';

const Dropdown = ({ items }) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleOnhover = () => {
        setIsOpen(true)
    }

    const handleOffhover = () => {
        setIsOpen(false)
    }

    const handleOnclick = () => {
        setIsOpen(false)
    }

    return (
        <div className='flex justify-center align-middle'>
            <div className='border' onMouseEnter={handleOnhover} onMouseLeave={handleOffhover}>
                <button className="bg-blue-500 text-white py-2 px-4 rounded text-5xl">Select <Icon className='text-5xl' icon="material-symbols:arrow-circle-down" /></button>
                {isOpen && (
                    <ul>
                        {items.map((item, index) => (
                            <li className='text-4xl py-4 text-center' key={index} onClick={handleOnclick}>{item}</li>
                        ))}
                    </ul>
                )}

            </div>
        </div>
    )
}

export default Dropdown