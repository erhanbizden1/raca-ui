import Image from "next/image";
import CallApiFromStrapi from "../../components/CallApiFromStrapi";
import DefaultCard from "../../components/DefaultCard";
import BreadCrumb from "../../components/BreadCrumb";
import SliderContent from "../../components/SliderContent";
import Link from "next/link";
export default function Accommondation({ accommondation }) {

    return (
        <div>
            <style jsx global>{`
  body {
    background: #000C1F;
  }
`}</style>
            <BreadCrumb color="white" staticText="Accommondation" />
            <div className="overflow-hidden">
                <SliderContent sliderContent={accommondation} color="white" />
            </div>
            <section className=" text-black bg-white py-[148px]">
                <div className="container">
                    <h1 className="font-merriweather text-[36px] lg:text-[48px] text-center leading-[54px]">{accommondation.contentTitle}</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                        {
                            accommondation?.defaultCard.map((cardItem) => {
                                if (!cardItem.bigCard) {
                                    return (
                                        <div className="max-w-[504px] relative mt-[32px] lg:mt-0 m-auto lg:m-0 ">
                                            <div className="border border-border absolute left-0 top-0 w-full h-full scale-[0.97] "></div>
                                            <Image
                                                src={cardItem?.cardImage.data.attributes.url}
                                                alt={`Card Image`}
                                                width={504}
                                                height={346}
                                                className="max-h-[300px]"
                                                objectFit="cover"
                                                layout="responsive"
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
                                                                    className="group-hover:-translate-x-[150px] translate-x-0 transition ease-in-out"
                                                                />
                                                            </button>

                                                    }
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
                <div className="container">
                    <div className="grid grid-cols-1 gap-[20px] lg:gap-[24px] ">
                        {
                            accommondation?.defaultCard.map((defaultCardBig) => {
                                if (defaultCardBig.bigCard) {
                                    return (
                                        <div key={defaultCardBig.id} className="grid grid-col-2 lg:grid-cols-7 w-full relative">
                                            <div className="border border-border absolute left-0 top-0 w-full h-full scale-[1]"></div>
                                            <div className="col-span-1 lg:col-span-4 py-[15px] lg:py-[36px] px-[15px] md:px-[36px] order-1 ">
                                                <div className="flex flex-col justify-between h-full">
                                                    <div>
                                                        <h2 className="text-black text-[28px] font-bold mb-2">{defaultCardBig.title}</h2>
                                                        <p className="text-[#3D4655] max-w-[300px] m-0">Give yourself the advantage. There has never been a better time to join!</p>
                                                    </div>
                                                    {
                                                        defaultCardBig.seeDetailsActive ?
                                                            <Link href={defaultCardBig.buttonSlug}>
                                                                <div className="flex items-center  mt-[36px]">
                                                                    <button className="group lg:px-[73px] mr-[20px] border-[2px] xl:hover:border-transparent border-[#3D4655] py-[15px]  items-center relative discoverButton w-full lg:w-max justify-center mt-[10px] lg:mt-0 xl:hover:bg-black text-white flex viewDetails">
                                                                        <span className="mr-[12px] text-lg transition ease-in-out text-[#3D4655] group-hover:text-white">{defaultCardBig?.buttonText}</span>
                                                                        <Image
                                                                            src="/rightArrow.svg"
                                                                            alt={"arrow"}
                                                                            width={19}
                                                                            height={13}
                                                                            className="group-hover:-translate-x-[140px] translate-x-0 transition ease-in-out"
                                                                        />
                                                                    </button>
                                                                    <span className="lg:text-lg underline text-sm">SEE DETAILS</span>
                                                                </div>
                                                            </Link> :
                                                            <Link href={defaultCardBig.buttonSlug}>
                                                                <button className="group lg:px-[73px] mr-[20px] border-[2px] xl:hover:border-transparent border-[#3D4655] py-[15px]  items-center relative discoverButton w-full lg:w-max justify-center mt-[10px] lg:mt-0 xl:hover:bg-black text-white flex viewDetails">
                                                                    <span className="mr-[12px] text-lg transition ease-in-out text-[#3D4655] group-hover:text-white">{defaultCardBig?.buttonText}</span>
                                                                    <Image
                                                                        src="/rightArrow.svg"
                                                                        alt={"arrow"}
                                                                        width={19}
                                                                        height={13}
                                                                        className="group-hover:-translate-x-[140px] translate-x-0 transition ease-in-out"
                                                                    />
                                                                </button>
                                                            </Link>
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-span-1 lg:col-span-3 p-[8px] lg:order-1">
                                                <Image
                                                    src={defaultCardBig?.cardImage?.data?.attributes?.url}
                                                    alt={`Thumbnail`}
                                                    width={491}
                                                    height={100}
                                                    layout="responsive"
                                                />
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
        populate: ['slider.thumbnail', 'defaultCard.cardImage']
    };
    const accommondation = await CallApiFromStrapi.getData('accommodation', pagePopulate);

    return {
        props: {
            accommondation: accommondation?.data?.attributes
        }
    };
}