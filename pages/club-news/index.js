import Image from "next/image";
import { useEffect, useState } from "react";
import CallApiFromStrapi from "../../components/CallApiFromStrapi";

export default function DiningAndBars({ homeData }) {
    const [cardItemLength, setCardItemLength] = useState(1);
    useEffect(() => {
        let cardItemLength = document.querySelectorAll('#cardItem').length;
        setCardItemLength(cardItemLength)
    }, [homeData])
    return (
        <div>
            <style jsx global>{`
                body {
                    background-color: #EBECED;
                }
                `}
            </style>
            <div className="container mb-[100px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:my-[20px] items-start">
                    <div>
                        <h1 className={`text-[36px] md:text-[64px] mb-[28px]  md:leading-[80px] lg:pl-0 lg:text-[88px] text-[#000C1F] font-merriweather leading-[54px] lg:leading-[111px]`}>{homeData.title}</h1>
                        <div>
                            <div className="!text-[#3D4655] font-[500] text-lg" dangerouslySetInnerHTML={{ __html: homeData.description }} ></div>
                        </div>
                    </div>
                </div>
            </div>
            <section className=" text-black py-[94px]" style={{ background: "white" }}>
                <div className="container lg:px-[150px]">
                    <h1 className="font-merriweather text-[36px] lg:text-[48px] text-center leading-[54px]">{homeData.contentTitle}</h1>
                    <div className="grid grid-cols-1 mb-[96px]">
                        {
                            homeData?.defaultCard.map((defaultCardBig) => {
                                if (defaultCardBig.bigCard) {
                                    return (
                                        <div key={defaultCardBig.id} className="w-full relative bg-[#C2C5C9] xl:bg-transparent">
                                            <div className="relative p-2 ">
                                                <Image
                                                    src={`http://localhost:1337${defaultCardBig?.cardImage?.data?.attributes?.url}`}
                                                    alt={`Thumbnail`}
                                                    className="w-full"
                                                    width={100}
                                                    height={554}
                                                    layout="responsive"
                                                />
                                            </div>
                                            <div className="xl:absolute p-6 xl:p-0 bottom-12 left-12">
                                                <div className="flex flex-col justify-between h-full">
                                                    <div>
                                                        <h2 className="text-black text-[28px] font-bold mb-2">{defaultCardBig.title}</h2>
                                                        <p className="text-[#3D4655] m-0 xl:max-w-[400px]">{defaultCardBig.desc}</p>
                                                    </div>
                                                    <button className="group md:px-[73px] xl:mr-[20px] border-[2px] xl:hover:border-transparent border-[#3D4655] py-[15px]  items-center relative discoverButton md:w-max justify-center mt-[10px] md:mt-[54px] xl:hover:bg-black text-white flex viewDetails">
                                                        <span className="mr-[12px] text-lg transition ease-in-out text-[#3D4655] group-hover:text-white">{defaultCardBig?.buttonText}</span>
                                                        <Image
                                                            src="/rightArrow.svg"
                                                            alt={"arrow"}
                                                            width={19}
                                                            height={13}
                                                            className="translate-x-0 transition ease-in-out"
                                                        />
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                    <span className="text-[#3D4655] text-sm">
                        You are viewing articles <span className="text-[#000C1F] font-medium">1</span> to <span className="text-[#000C1F] font-medium">{cardItemLength}</span> of <span className="text-[#000C1F] font-medium">{cardItemLength} results</span>
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-[24px] justify-center mt-[64px]">
                        {
                            homeData?.defaultCard.map((cardItem) => {
                                if (!cardItem.bigCard){
                                return (
                                    <div key={cardItem.id} className="max-w-[504px] relative lg:mt-0 m-auto lg:m-0 " id="cardItem">
                                        <div className="relative ">
                                            <div className="border border-border absolute left-0 top-0 w-full h-full scale-[0.96] "></div>
                                            <Image
                                                src={`http://localhost:1337${cardItem?.cardImage.data.attributes.url}`}
                                                alt={`Card Image`}
                                                width={372}
                                                height={247}
                                                className="max-h-[247px]"
                                                objectFit="cover"
                                                layout="responsive"
                                            />
                                        </div>
                                        <div className="px-[5px] pt-[24px] flex flex-col justify-between">
                                            <div>
                                                <div className="text-black font-bold text-[24px]">{cardItem.title}</div>
                                                <div className="mt-[20px] text-grey" dangerouslySetInnerHTML={{ __html: cardItem.desc }} ></div>
                                            </div>
                                            {
                                                cardItem.seeDetailsActive ?
                                                    <div className="flex items-center  mt-[36px]">
                                                        <button className="xl:min-w-[280px] mt- lg:px-[20px] border-[2px] mr-[24px] border-black py-[15px] flex items-center relative discoverButton w-full lg:w-max justify-center xl:hover:bg-black xl:hover:text-white">
                                                            <span className="mr-[12px] text-lg transition ease-in-out">{cardItem.buttonText}</span>
                                                            <Image
                                                                src="/rightArrow.svg"
                                                                alt={"arrow"}
                                                                width={19}
                                                                height={13}
                                                                className="translate-x-0 transition ease-in-out"
                                                            />
                                                        </button>
                                                        <span className="text-lg underline">SEE DETAILS</span>
                                                    </div> :
                                                    <button className="mt-[36px] lg:px-[20px] border-[2px] border-black py-[15px] flex items-center relative discoverButton !w-full lg:w-max justify-center xl:hover:bg-black xl:hover:text-white">
                                                        <span className="mr-[12px] text-lg transition ease-in-out">{cardItem.buttonText}</span>
                                                        <Image
                                                            src="/rightArrow.svg"
                                                            alt={"arrow"}
                                                            width={19}
                                                            height={13}
                                                            className="translate-x-0 transition ease-in-out"
                                                        />
                                                    </button>

                                            }
                                        </div>
                                    </div>
                                )
                            }
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
        populate: ['thumbnail', 'defaultCard.cardImage']
    };
    const homeJson = await CallApiFromStrapi.getData('club-new', pagePopulate);

    return {
        props: {
            homeData: homeJson?.data?.attributes
        }
    };
}