import Image from "next/image";
import CallApiFromStrapi from "../components/CallApiFromStrapi";
import DefaultCard from "../components/DefaultCard";
import CardOverlay from "../components/CardOverlay";
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";
import Head from "next/head";
import Script from "next/script";
export default function Home({ homeData }) {
  return (
    <>
      <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16473790889"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16473790889');
        `}
      </script>
        {
          homeData.title ? <title>{`Royal Automobile Club of Australia - ${homeData.title}`}</title> : ""
        }
        {
          homeData.metaDescription ? <meta
            name="description"
            content={`${homeData.metaDescription}`}
          /> : ""
        }
      </Head>
      <div className="container mb-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:my-[130px] items-center">
          <h1 className={`text-[38px] md:text-[64px]  md:leading-[80px] lg:pl-0 lg:text-[88px] text-blue font-merriweather leading-[54px] lg:leading-[111px] font-bold`}>{homeData.title}</h1>
          <div>
            <div className="text-[#000C1F]" dangerouslySetInnerHTML={{ __html: homeData.description }} ></div>
            <div className="flex md:flex-row flex-col items-center gap-x-[20px]">
            {
              homeData.buttonLink && homeData.buttonText ?
              <Link href={homeData.buttonLink}>
              <button className="px-[73px] bg-blue xl:hover:bg-[#002966] transition-all ease-in-out border-[2px] border-black py-[15px] mt-[36px] relative min-w-[268px] text-white">
                <span className="text-lg transition ease-in-out">{homeData.buttonText}</span>
              </button>
            </Link>
            :""
            }
            {
              homeData.buttonSecondText && homeData.buttonSecondLink ?
              <Link href={homeData?.buttonSecondLink}>
              <button className="px-[73px] bg-[#c90136] xl:hover:bg-[#e72458] transition-all ease-in-out border-[2px] border-[#c90136] py-[15px] mt-[36px] relative min-w-[268px] text-white">
                <span className="text-lg transition ease-in-out">{homeData?.buttonSecondText}</span>
              </button>
            </Link>
            :""
            }
            </div>
          </div>
        </div>
      </div>
      {
        homeData?.slider.length > 0 ?
          <Swiper
            slidesPerView={1}
            spaceBetween={1}
            navigation={false}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 12000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            {
              homeData?.slider?.map((sliderItem) => {
                return (
                  <SwiperSlide key={sliderItem.id}>
                    <Link href={sliderItem.link ? sliderItem.link : ""}>
                      <div className="relative w-full">
                        <Image
                          src={sliderItem?.thumbnail.data[0].attributes.url}
                          alt={sliderItem?.thumbnail.data[0].attributes.name}
                          width={511}
                          height={100}
                          layout="responsive"
                          objectFit="contain"
                        />
                      </div>
                    </Link>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
          :
          ""
      }
      <section className="container text-black">
        <h1 className="font-merriweather text-[36px] lg:text-[48px] text-center my-[84px] leading-[54px]">{homeData.contentTitle}</h1>
        <div className="flex-none lg:flex gap-[24px] items-start justify-center">
          {
            homeData?.defaultCard.map((cardItem) => {
              return (
                <DefaultCard key={cardItem.id} cardItem={cardItem} />
              )
            })
          }
        </div>
      </section>
      <section className="container my-[104px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[24px] xl:px-[72px]">
          <CardOverlay cardOverlay={homeData.overlayCard} />
        </div>
      </section>
    </>
  )
}
export async function getServerSideProps() {
  const pagePopulate = {
    populate: ['thumbnail', 'defaultCard.cardImage', 'overlayCard.cardImage', 'slider.thumbnail']
  };
  const homeJson = await CallApiFromStrapi.getData('home', pagePopulate);

  return {
    props: {
      homeData: homeJson?.data.attributes
    }
  };
}