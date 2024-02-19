import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const More = () => {
    const slides = [
        { id: 0, title: "NexAi, Turn on light" },
        { id: 1, title: "NexAi, measure this table" },
        { id: 2, title: "NexAi, set alarm of 5:00 am" },
        { id: 3, title: "NexAi, measure this table" },
        { id: 4, title: "NexAi, Turn on music" },
        { id: 5, title: "NexAi, is the front door locked?" },
        { id: 6, title: "NexAi, Turn of AC." },
    ];
    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        arrows: false,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
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
        <div id="about" className=" mt-14  md:mt-24 lg:mt-[200px] overflow-hidden">
            <div className="px-3">
                <h2 className="font-recharge font-bold text-[25px] sm:text-[40px] leading-8 sm:leading-[50px] text-[#02CDCF] text-start sm:text-center">NexAi does all this. And more.</h2>
                <p className=" font-poppins font-normal text-sm sm:text-[16px] leading-[25px] text-[#B7B7B7] text-start sm:text-center max-w-[912px] mx-auto mt-4"> Nexai is an advanced home assistant that will revolutionize the way we interact with our smart devices at home. Powered by sophisticated artificial intelligence, it leverages blockchain technology to offer a secure and efficient user experience.</p>
            </div>
            <Slider data-aos="zoom-in" className=" pt-5 sm:pt-12 lg:pt-[90px] nexAI" {...settings} autoplaySpeed={0}>
                {slides.map((slideContent) => (
                    <div className={`w-full max-w-[500px] shadow-[0_4px_20px_0_#02CDCF29] duration-300 rounded-2xl my-[20px]`} key={slideContent.id}>
                        <div className="max-w-[254px] w-full mx-auto flex justify-center items-center min-h-[220px]">
                            <h3 className=" text-xl sm:text-2xl font-bold leading-9 text-center text-white font-recharge">{slideContent.title}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
            <Slider data-aos="zoom-in" className="nexAI" {...settings} slidesToShow={4.5} autoplaySpeed={0} rtl={true}>
                {slides.map((slideContent) => (
                    <div className={`w-full max-w-[500px] shadow-[0_4px_20px_0_#02CDCF29] duration-300 rounded-2xl my-[20px]`} key={slideContent.id}>
                        <div className="max-w-[254px] w-full mx-auto flex justify-center items-center min-h-[220px]">
                            <h3 className=" text-xl sm:text-2xl font-bold leading-9 text-center text-white font-recharge">{slideContent.title}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
            <Slider data-aos="zoom-out" className="nexAI" {...settings} slidesToShow={4.1} autoplaySpeed={0}>
                {slides.map((slideContent) => (
                    <div className={`w-full max-w-[500px] shadow-[0_4px_20px_0_#02CDCF29] duration-300 rounded-2xl my-[20px]`} key={slideContent.id}>
                        <div className="max-w-[254px] w-full mx-auto flex justify-center items-center min-h-[220px]">
                            <h3 className=" text-xl sm:text-2xl font-bold leading-9 text-center text-white font-recharge">{slideContent.title}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};
export default More