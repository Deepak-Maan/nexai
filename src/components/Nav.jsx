import React, { useState } from 'react'
import CommonButton from './CommonButton'

const Nav = () => {
    const [show, setshow] = useState(false);
    if (show === true) {
        document.body.classList.add("max-lg:overflow-hidden");
    } else {
        document.body.classList.remove("max-lg:overflow-hidden");
    }
    const Movement = () => {
        setshow(false);
    };
    return (
        <div>
            <div className="mx-auto px-3 max-w-[1140px]">
                <nav className=" pt-4 md:pt-[40px]">
                    <div className=" px-3">
                        <div className=" flex relative items-center lg:justify-center">
                            <div className="flex justify-center gap-[136px] py-8 items-center">
                                <ul className={`${show ? "left-0" : "left-[-100%]"}  z-40 min-h-screen fixed flex items-center justify-center lg:min-h-fit lg:static w-full lg:w-auto top-0 bg-[#041717] lg:bg-[unset]  max-lg:w-[100%] max-lg:flex-col flex-row max-lg:min-h-screen gap-5  right-0 ps-0 duration-[400ms] transition-all ease-linear`}>
                                    <li> <a onClick={Movement} href="#home" className=" font-normal text-base font-poppins text-white  duration-300 relative after:absolute after:bg-[#fff] after:w-0 after:h-[3px] after:bottom-[-2px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%] leading-[23.50%] ">Home</a></li>
                                    <li><a onClick={Movement} href="#market" className=" font-normal text-base font-poppins text-white  inline leading-[23.50%] duration-300 relative after:absolute after:bg-[#fff] after:w-0 after:h-[3px] after:bottom-[-2px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300  hover:after:w-[100%] ">Marketplace</a></li>
                                    <li><a onClick={Movement} href="#about" className="  font-normal text-base font-poppins text-white  inline leading-[23.50%] duration-300 relative after:absolute after:bg-[#fff] after:w-0 after:h-[3px] after:bottom-[-2px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300  hover:after:w-[100%] " >About</a></li>
                                    <li> <a onClick={Movement} href="#chat" className="  font-normal text-base font-poppins text-white  inline leading-[23.50%] duration-300 relative after:absolute after:bg-[#fff] after:w-0 after:h-[3px] after:bottom-[-2px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300  hover:after:w-[100%] ">NextChat</a></li>
                                    <li><a onClick={Movement} href="#token" className="  font-normal text-base font-poppins text-white  inline leading-[23.50%] duration-300 relative after:absolute after:bg-[#fff] after:w-0 after:h-[3px] after:bottom-[-2px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300  hover:after:w-[100%]">Tokens</a></li>
                                </ul>
                            </div>
                            <div className=" absolute right-[3%] sm:right-[10%] max-[470px]:block">
                                <div className="flex items-center gap-2">
                                    <div className=" text-nowrap py- ">
                                        <CommonButton text="Sign up" />
                                    </div>
                                </div>
                            </div>

                            <div onClick={() => setshow(!show)} className='lg:hidden mr-[17px] w-[27px] h-[21px] z-50 relative flex justify-between flex-col'>
                                <span className={`${show ? 'rotate-[50deg] translate-y-[15px]' : ""} bg-white h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}></span>
                                <span className={`${show ? 'hidden' : ""} bg-white h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}></span>
                                <span className={`${show ? 'rotate-[-50deg] translate-y-[-50%]' : ""} bg-white h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}></span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav
