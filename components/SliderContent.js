import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import Link from "next/link";
export default function SliderContent({ sliderContent,color }) {
    return (
        <div className="container mb-[100px]">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:mt-[70px] lg:pb-[100px] ">
                <div className="order-last xl:order-first">
                    <h1 className={`text-[36px] md:text-[64px]  md:leading-[80px] lg:pl-0 lg:text-[88px] !text-[${color ? color : "#000C1F"}] font-merriweather leading-[54px] lg:leading-[111px]`}>{sliderContent.title}</h1>
                    <div>
                        <div className={`!text-[${color ? color : "#3D4655"}]  ${color ? "opacity-80":"opacity-100"} font-[500] text-lg`} dangerouslySetInnerHTML={{ __html: sliderContent.description }} ></div>
                    </div>
                    {
                        sliderContent?.buttonLink && sliderContent?.buttonText ?
                            <Link href={sliderContent.buttonLink}>
                                <button className="px-[73px] bg-blue xl:hover:bg-[#002966] transition-all ease-in-out border-[2px] border-black py-[15px] mt-[36px] relative min-w-[268px] text-white">
                                    <span className="text-lg transition ease-in-out">{sliderContent.buttonText}</span>
                                </button>
                            </Link>
                            : ""
                    }
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={1}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation, Pagination]}

                    className="mySwiper swiperCustom"
                >
                    {
                        sliderContent.slider.map((sliderItem) => {
                            return (
                                <SwiperSlide key={sliderItem.id} className="!flex items-start pl-[10px]"><div className="relative w-full">
                                    <div className="border border-border absolute left-0 top-0 w-full h-full scale-[1.03] scale-y-[1.05]"></div>
                                    <Image src={`http://localhost:1337${sliderItem.thumbnail.data.attributes.url}`} width={13} layout="responsive" height={13} alt=""></Image>

                                </div></SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </div>
        </div>
    )
}