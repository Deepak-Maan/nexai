import React from 'react'

const Preloader = () => {
    return (
        <div className='flex space-x-2 justify-center items-center  h-screen '>
            <h1 className='font-recharge font-bold text-[#02CDCF] text-[60px] pr-6 '>NEXAI</h1>
            <div class='flex gap-5'>
                {/* <span class='sr-only'>Loading...</span> */}
                <div class='h-8 w-8 bg-[#02CDCF] rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                <div class='h-8 w-8 bg-[#02CDCF] rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                <div class='h-8 w-8 bg-[#02CDCF] rounded-full animate-bounce'></div>
            </div>
        </div>
    )
}
export default Preloader