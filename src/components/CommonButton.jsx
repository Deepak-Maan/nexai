import React from 'react'

const CommonButton = (props) => {
    return (
        <div>
            <button className="bg-[#02CDCF] hover:text-white duration-300 hover:shadow-[7px_0px_51px_8px_rgba(2,205,207,0.76)]  text-[#0B0A0A] font-recharge font-bold text-lg leading-[21px] rounded-xl py-[18px] px-8">{props.text}</button>
        </div>
    )
}

export default CommonButton
