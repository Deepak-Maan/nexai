import React from 'react'
import CommonButton from './CommonButton'

const Nav = () => {
    return (
        <div>
            <div className="mx-auto px-3 max-w-[1140px]">
                <nav className='py-[38px] flex items-center justify-between '>
                    <div></div>
                    <ul className='flex gap-5 justify-center'>
                        <li><a href="" className=' font-base font-normal font-poppins leading-6 text-white'>Home</a></li>
                        <li><a href="" className=' font-base font-normal font-poppins leading-6 text-white'>Marketplace</a></li>
                        <li><a href="" className=' font-base font-normal font-poppins leading-6 text-white'>About</a></li>
                        <li><a href="" className=' font-base font-normal font-poppins leading-6 text-white'>NexChat</a></li>
                        <li><a href="" className=' font-base font-normal font-poppins leading-6 text-white'>Tokens</a></li>
                    </ul>
                    <CommonButton text='Sign Up' />
                </nav>
            </div>
        </div>
    )
}

export default Nav
