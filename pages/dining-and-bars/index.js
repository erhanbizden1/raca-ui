import Image from "next/image";
import Link from "next/link";
import BreadCrumb from "../../components/BreadCrumb";
import CallApiFromStrapi from "../../components/CallApiFromStrapi";
import DefaultCard from "../../components/DefaultCard";
import SliderContent from "../../components/SliderContent";

export default function DiningAndBars({ homeData }) {

    return (
        <div>
            <style jsx global>{`
                body {
                    background: #F2E9D9;
                }
                `}
            </style>
            <BreadCrumb color="#000C1F" staticText="Dining and Bars" />
            <SliderContent sliderContent={homeData} />
            <section className=" text-black bg-white py-[124px]">
                <div className="container">
                    <h1 className="font-merriweather text-[36px] lg:text-[48px] text-center leading-[54px]">{homeData.contentTitle}</h1>
                    <div className="flex-none lg:flex gap-[24px] justify-center">
                        {
                            homeData?.defaultCard.map((cardItem) => {
                                return (
                                    <div className="max-w-[504px] relative mt-[32px] lg:mt-0 m-auto lg:m-0 " key={cardItem.id}>
                                        <div className="border border-border absolute left-0 top-0 w-full h-full scale-[0.97] "></div>
                                        <Image
                                            src={`http://pure-hamlet-08520-67aeef587ee8.herokuapp.com${cardItem?.cardImage.data.attributes.url}`}
                                            alt={`Card Image`}
                                            width={504}
                                            height={346}
                                        />
                                        <div className="px-[34px] pt-[24px] pb-[36px] flex flex-col justify-between ">
                                            <div>
                                                <div className="text-black font-bold text-[28px]">{cardItem.title}</div>
                                                <div className="mt-[20px] text-grey lg:pr-[105px] descriptionBox" dangerouslySetInnerHTML={{ __html: cardItem.desc }} ></div>
                                            </div>
                                            <Link href={cardItem.buttonSlug ? cardItem.buttonSlug : ""}>
                                                {
                                                    cardItem.seeDetailsActive ?

                                                        <div className="flex items-center  mt-[36px]">
                                                            <button className=" group lg:px-[20px] border-[2px] mr-[24px] border-black py-[15px] flex items-center relative discoverButton w-full lg:w-max justify-center xl:hover:bg-black xl:hover:text-white">
                                                                <span className="mr-[12px] text-lg transition ease-in-out">{cardItem.buttonText}</span>
                                                                <Image
                                                                    src="/rightArrow.svg"
                                                                    alt={"arrow"}
                                                                    width={19}
                                                                    height={13}
                                                                    className="group-hover:-translate-x-[140px] translate-x-0 transition ease-in-out"
                                                                />
                                                            </button>
                                                            <span className="lg:text-lg underline text-sm">SEE DETAILS</span>
                                                        </div> :
                                                        <button className="group xl:min-w-[280px] mt-[36px] lg:px-[20px] border-[2px] mr-[24px] border-black py-[15px] flex items-center relative discoverButton w-full lg:w-max justify-center xl:hover:bg-black xl:hover:text-white">
                                                            <span className="mr-[12px] text-lg transition ease-in-out">{cardItem.buttonText}</span>
                                                            <Image
                                                                src="/rightArrow.svg"
                                                                alt={"arrow"}
                                                                width={19}
                                                                height={13}
                                                                className="group-hover:-translate-x-[130px] translate-x-0 transition ease-in-out"
                                                            />
                                                        </button>

                                                }
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
export async function getServerSideProps() {
    const pagePopulate = {
        populate: ['slider.thumbnail', 'defaultCard.cardImage']
    };
    const homeJson = await CallApiFromStrapi.getData('dining-and-bar', pagePopulate);

    return {
        props: {
            homeData: homeJson?.data?.attributes
        }
    };
}