import React from 'react'
import CommonButton from './CommonButton'

const Hero = () => {
    return (
        <div>
            <div className="mx-auto px-3 max-w-[1200px] pt-[104px]">
                <h1 className='font-bold text-white text-6xl leading-[75px] font-recharge max-w-[577px]'><span className='text-[#02CDCF]'>Nexai</span> is an advanced AI-powered home assistant</h1>
                <p className='text-base font-normal font-poppins leading-[25px] text-[#B2B3B3] pt-4 pb-[69px]'>Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla odio.</p>
                <div className='pb-[140px]'>
                    <CommonButton text='Know More' />
                </div>
            </div>
        </div>
    )
}

export default Hero
