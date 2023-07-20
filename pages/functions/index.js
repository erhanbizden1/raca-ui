import Image from "next/image";
import Link from "next/link";
import BreadCrumb from "../../components/BreadCrumb";
import CallApiFromStrapi from "../../components/CallApiFromStrapi";
import SliderContent from "../../components/SliderContent";

export default function Funcitons({ funcitons }) {
    return (
        <div className="overflow-hidden">
            <style jsx global>{`
  body {
    background: #000C1F;
  }
`}</style>
            <BreadCrumb color="white" staticText="Functions" />
            <SliderContent sliderContent={funcitons} color="white" />
            <section className=" text-black bg-white py-[124px]">
            <div className="container">
                    <div className="grid grid-cols-1 gap-[20px] lg:gap-[24px] ">
                        {
                            funcitons?.defaultCard.map((bigCardItem) => {
                                if (bigCardItem.bigCard) {
                                    return (
                                        <div key={bigCardItem.id} className="grid grid-col-2 lg:grid-cols-7 w-full relative ">
                                            <div className="border border-border absolute left-0 top-0 w-full h-full scale-[1]"></div>
                                            <div className="col-span-1 lg:col-span-4 py-[15px] lg:py-[36px] px-[15px] md:px-[36px] order-1 ">
                                                <div className="flex flex-col justify-between h-full">
                                                    <div>
                                                        <h2 className="text-black text-[28px] font-bold mb-2">{bigCardItem.title}</h2>
                                                        <p className="text-[#3D4655] max-w-[300px] m-0 descriptionBox" dangerouslySetInnerHTML={{ __html: bigCardItem.desc }}></p>
                                                    </div>
                                                            <Link href={bigCardItem.buttonSlug}>
                                                                <button className="group lg:px-[73px] mr-[20px] border-[2px] xl:hover:border-transparent border-[#3D4655] py-[15px]  items-center relative discoverButton w-full lg:w-max justify-center mt-[10px] lg:mt-0 xl:hover:bg-black text-white flex viewDetails">
                                                                    <span className="mr-[12px] text-lg transition ease-in-out text-[#3D4655] group-hover:text-white">{bigCardItem?.buttonText}</span>
                                                                    <Image
                                                                        src="/rightArrow.svg"
                                                                        alt={"arrow"}
                                                                        width={19}
                                                                        height={13}
                                                                        className="group-hover:-translate-x-[140px] translate-x-0 transition ease-in-out"
                                                                    />
                                                                </button>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-span-1 lg:col-span-3 p-[8px] lg:order-1">
                                                <Image
                                                    src={bigCardItem?.cardImage?.data?.attributes?.url}
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
                <div className="grid grid-cols-1 lg:grid-cols-3  gap-[24px] items-start justify-center container">
                    {
                        funcitons?.defaultCard.map((cardItem) => {
                            if(!cardItem.bigCard){
                            return (
                                <div key={cardItem.id} className="max-w-[504px] relative mt-[32px] lg:mt-0 m-auto lg:m-0 border border-border p-[24px]">
                                    <div className="relative min-h-[295px]">
                                        <Image
                                            src={cardItem?.cardImage.data.attributes.url}
                                            alt={`Card Image`}
                                            className="w-full"
                                            objectFit="cover"
                                            layout="fill"
                                        />
                                    </div>
                                    <div className=" pt-[24px] flex flex-col justify-between">
                                        <div>
                                            <div className="text-black font-bold text-[28px]">{cardItem.title}</div>
                                            <div className="mt-[20px] text-grey lg:pr-[105px] descriptionBox" dangerouslySetInnerHTML={{ __html: cardItem.desc }} ></div>
                                        </div>
                                        <Link href={cardItem?.buttonSlug}>
                                            <button className="group lg:px-[73px] border-[2px] border-black py-[15px] mt-[36px] flex items-center relative discoverButton w-full lg:min-w-[268px] justify-center xl:hover:bg-black xl:hover:text-white ">
                                                <span className="mr-[12px] text-lg transition ease-in-out">{cardItem.buttonText}</span>
                                                <Image
                                                    src="/rightArrow.svg"
                                                    alt={"arrow"}
                                                    width={19}
                                                    height={13}
                                                    className="group-hover:-translate-x-[100px] translate-x-0 transition ease-in-out"
                                                />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        }
                        })
                    }
                </div>
            </section>
        </div>
    )
}
export async function getServerSideProps() {
    const pagePopulate = {
        populate: ['slider.thumbnail', 'defaultCard.cardImage']
    };
    const funcitons = await CallApiFromStrapi.getData('function', pagePopulate);

    return {
        props: {
            funcitons: funcitons?.data?.attributes
        }
    };
}