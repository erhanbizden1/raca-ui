import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
export default function SliderContent({ sliderContent, color }) {
    return (
        <>
            <Head>
                {
                    sliderContent.title ? <title>{`Royal Automobile Club of Australia - ${sliderContent.title}`}</title> : ""
                }
                {
                    sliderContent.metaDescription ? <meta
                        name="description"
                        content={`${sliderContent.metaDescription}`}
                    /> : ""
                }
            </Head>
            <div className="container mb-[100px]">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:mt-[70px] lg:pb-[100px] ">
                    <div className="order-last xl:order-first">
                        <h1 className={`text-[36px] md:text-[64px]  md:leading-[80px] lg:pl-0 lg:text-[88px] font-merriweather leading-[54px] lg:leading-[111px]`} style={{ color: color ? color : "#000C1F" }}>{sliderContent.title}</h1>
                        <div>
                            <div className={` font-[500] text-lg`} dangerouslySetInnerHTML={{ __html: sliderContent.description }} style={{ color: color ? color : "#000C1F", opacity: color ? "opacity-80" : "opacity-100" }}></div>
                        </div>
                        <div className="flex md:flex-row flex-col items-center gap-x-[20px]">
                        {
                            sliderContent?.buttonLink && sliderContent?.buttonText ?
                                <Link href={sliderContent.buttonLink}>
                                    <button className="bg-blue xl:hover:bg-[#002966] transition-all ease-in-out border-[2px] border-black py-[15px] mt-[36px] relative min-w-[268px] text-white">
                                        <span className="text-lg transition ease-in-out">{sliderContent.buttonText}</span>
                                    </button>
                                </Link>
                                : ""
                        }
                        {
                            sliderContent?.buttonSecondText && sliderContent?.buttonSecondLink ?
                                <Link href={sliderContent.buttonSecondLink}>
                                    <button className=" bg-blue xl:hover:bg-[#002966] transition-all ease-in-out border-[2px] border-black py-[15px] mt-[36px] relative min-w-[268px] text-white">
                                        <span className="text-lg transition ease-in-out">{sliderContent.buttonSecondText}</span>
                                    </button>
                                </Link>
                                : ""
                        }
                        </div>
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
                                        {
                                            sliderItem.thumbnail.data ?
                                                <>
                                                    <div className="border border-border absolute left-0 top-0 w-full h-full scale-[1.03] scale-y-[1.05]"></div>
                                                    <Image src={sliderItem.thumbnail.data[0].attributes.url} width={13} layout="responsive" height={13} alt=""></Image>
                                                </>
                                                :
                                                ""
                                        }


                                    </div></SwiperSlide>
                                )
                            })
                        }

                    </Swiper>
                </div>
            </div>
        </>
    )
}