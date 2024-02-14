import React from 'react'

const CommonButton = (props) => {
    return (
        <div>
            <button className="bg-[#02CDCF] text-[#0B0A0A] font-recharge font-bold text-lg leading-[21px] rounded-xl py-[18px] px-8">{props.text}</button>
        </div>
    )
}

export default CommonButton
