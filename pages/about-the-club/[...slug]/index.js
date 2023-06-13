import CallApiFromStrapi from "../../../components/CallApiFromStrapi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import BreadCrumb from "../../../components/BreadCrumb";
export default function ClubHistory({ aboutDetail }) {
    return (
        <>
            <div className="container mb-[100px]">
                <style jsx global>{`
  body {
    background: #EBECED;
  }
`}</style>
                <BreadCrumb />
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:my-[130px] ">
                    <div className="order-last xl:order-first">
                        <h1 className={`text-[36px] md:text-[64px]  md:leading-[80px] lg:pl-0 lg:text-[88px] text-[#000C1F] font-merriweather leading-[54px] lg:leading-[111px]`}>{aboutDetail.title}</h1>
                        <div>
                            <div className="!text-[#3D4655] font-[500] text-lg" dangerouslySetInnerHTML={{ __html: aboutDetail.description }} ></div>
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
                            aboutDetail.slider.map((sliderItem) => {
                                return (
                                    <SwiperSlide key={sliderItem.id} className="!flex items-center pl-[10px]">
                                        <div className="relative w-full">
                                            <div className="border border-border absolute left-0 top-0 w-full h-full scale-[1.03] scale-y-[1.05]"></div>
                                            <Image src={`http://localhost:1337${sliderItem.thumbnail.data.attributes.url}`} width={13} layout="responsive" height={13} alt=""></Image>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>

                </div>
            </div>

            {
                aboutDetail.pageDesc ?
                    <div className="bg-[white] py-[84px]">
                        <div className="container">
                            <span dangerouslySetInnerHTML={{ __html: aboutDetail.description }}></span>
                        </div>
                    </div>
                    :
                    ""
            }
        </>
    )
}
export async function getServerSideProps(context) {
    const pagePopulate = {
        populate: ['slider.thumbnail'],
        filters: {
            slug: {
                $eq: context?.query?.slug
            }
        }
    };
    const aboutDetail = await CallApiFromStrapi.getData('about-the-club-details', pagePopulate);

    return {
        props: {
            aboutDetail: aboutDetail?.data[0]?.attributes
        }
    };
}