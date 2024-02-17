import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const BlockChain = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    return (
        <div className='overflow-x-clip'>
            <div className='mx-auto px-3 max-w-[1200px] pt-[160px]'>
                <h2 className='text-[40px] text-[#02CDCF] font-recharge font-bold leading-[50px] text-center'>Blockchain & AI technology</h2>
                <p className='font-normal text-base leading-[25px] font-poppins mx-auto text-center max-w-[997px] text-[#B4B5B5] pt-4'>Nexai is an advanced home assistant that will revolutionize the way we interact with our smart devices at home. Powered by sophisticated artificial intelligence, it leverages blockchain technology to offer a secure and efficient user experience.</p>
                <h3 className=' text-white font-recharge font-bold text-xl mx-auto pt-[96px] text-center max-w-[684px]'>By building the software on blockchain, Nexai provides the following advantages</h3>
                <Slider {...settings} className='pt-[60px] blockchain'>
                    <div className='flex'>
                        <div className='bg-[url(./assets/images/png/Polygon-bg.png)] bg-no-repeat bg-Bgsize100 pt-[70px] pb-[145px] px-[77px] flex flex-col justify-center items-center'>
                            <div className='w-[58px] h-[58px] pt-[2px] shadow-m  bg-black rounded-full'>
                                <p className='font-recharge font-bold text-[32px] leading-[51px] text-center text-white'>1</p>
                            </div>
                            <p className='font-recharge font-bold text-[20px] leading-[32px] text-center text-white max-w-[212px] pt-[30px]'>Security and Privacy</p>
                        </div>
                    </div>
                    <div className='flex lg:mt-[111px]'>
                        <div className='bg-[url(./assets/images/png/Polygon-bg.png)] bg-no-repeat bg-Bgsize100 pt-[70px] pb-[145px] px-[77px] flex flex-col justify-center items-center'>
                            <div className='w-[58px] h-[58px] pt-[2px] shadow-m bg-black rounded-full'>
                                <p className='font-recharge font-bold text-[32px] leading-[51px] text-center text-white'>2</p>
                            </div>
                            <p className='font-recharge font-bold text-[20px] leading-[32px] text-center text-white max-w-[212px] pt-[30px]'>Security and Privacy</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='bg-[url(./assets/images/png/Polygon-bg.png)] bg-no-repeat bg-Bgsize100 pt-[70px] pb-[145px] px-[77px] flex flex-col justify-center items-center'>
                            <div className='w-[58px] h-[58px] pt-[2px] shadow-m bg-black rounded-full'>
                                <p className='font-recharge font-bold text-[32px] leading-[51px] text-center text-white'>3</p>
                            </div>
                            <p className='font-recharge font-bold text-[20px] leading-[32px] text-center text-white max-w-[212px] pt-[30px]'>Security and Privacy</p>
                        </div>
                    </div>
                    <div className='flex lg:mt-[111px]'>
                        <div className='bg-[url(./assets/images/png/Polygon-bg.png)] bg-no-repeat bg-Bgsize100 pt-[70px] pb-[145px] px-[77px] flex flex-col justify-center items-center'>
                            <div className='w-[58px] h-[58px] pt-[2px] shadow-m bg-black rounded-full'>
                                <p className='font-recharge font-bold text-[32px] leading-[51px] text-center text-white'>4</p>
                            </div>
                            <p className='font-recharge font-bold text-[20px] leading-[32px] text-center text-white max-w-[212px] pt-[30px]'>Security and Privacy</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default BlockChain
