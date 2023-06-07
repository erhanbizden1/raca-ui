import Image from "next/image";
import CallApiFromStrapi from "../../components/CallApiFromStrapi";
import DefaultCard from "../../components/DefaultCard";
import BreadCrumb from "../../components/BreadCrumb";
export default function Accommondation({ homeData }) {

    return (
        <>
            <style jsx global>{`
  body {
    background: #000C1F;
  }
`}</style>
            <BreadCrumb color="#EBECED" staticText="Accommondation" />
            <div className="container mb-[100px]">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:my-[130px] items-start">
                    <div className="order-last xl:order-first">
                        <h1 className={`text-[36px] md:text-[64px] font-bold md:leading-[80px] lg:pl-0 lg:text-[88px] text-[#EBECED] font-merriweather leading-[54px] lg:leading-[111px]`}>{homeData.title}</h1>
                        <div>
                            <div className="text-[#C2C5C9] font-[500] text-lg" dangerouslySetInnerHTML={{ __html: homeData.description }} ></div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="border border-border absolute left-0 top-0 w-full h-full scale-[1.03] scale-y-[1.05]"></div>
                        <Image src={`http://localhost:1337${homeData?.thumbnail.data.attributes.url}`} width={13} layout="responsive" height={13} alt=""></Image>
                    </div>
                </div>
            </div>
            <section className=" text-black bg-white py-[148px]">
                <div className="container">
                    <h1 className="font-merriweather text-[36px] lg:text-[48px] text-center leading-[54px]">{homeData.contentTitle}</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center">
                        {
                            homeData?.defaultCard.map((cardItem) => {
                                if (!cardItem.bigCard) {
                                    return (
                                        <DefaultCard key={cardItem.id} seeDetailsActive={cardItem.seeDetailsActive} cardItem={cardItem} />
                                    )
                                }
                            })
                        }
                    </div>
                </div>
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-[20px] lg:gap-[24px] ">
                        {
                            homeData?.defaultCard.map((defaultCardBig) => {
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
                                                            <div className="flex items-center  mt-[36px]">
                                                                <button className="group lg:px-[73px] mr-[20px] border-[2px] xl:hover:border-transparent border-[#3D4655] py-[15px]  items-center relative discoverButton w-full lg:w-max justify-center mt-[10px] lg:mt-0 xl:hover:bg-black text-white flex viewDetails">
                                                                    <span className="mr-[12px] text-lg transition ease-in-out text-[#3D4655] group-hover:text-white">{defaultCardBig?.buttonText}</span>
                                                                    <Image
                                                                        src="/rightArrow.svg"
                                                                        alt={"arrow"}
                                                                        width={19}
                                                                        height={13}
                                                                        className="translate-x-0 transition ease-in-out"
                                                                    />
                                                                </button>
                                                                <span className="lg:text-lg underline text-sm">SEE DETAILS</span>
                                                            </div> :
                                                            <button className="group lg:px-[73px] mr-[20px] border-[2px] xl:hover:border-transparent border-[#3D4655] py-[15px]  items-center relative discoverButton w-full lg:w-max justify-center mt-[10px] lg:mt-0 xl:hover:bg-black text-white flex viewDetails">
                                                                <span className="mr-[12px] text-lg transition ease-in-out text-[#3D4655] group-hover:text-white">{defaultCardBig?.buttonText}</span>
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
                                            <div className="col-span-1 lg:col-span-3 p-[8px] lg:order-1">
                                                <Image
                                                    src={`http://localhost:1337${defaultCardBig?.cardImage?.data?.attributes?.url}`}
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

        </>
    )
}
export async function getServerSideProps() {
    const pagePopulate = {
        populate: ['thumbnail', 'defaultCard.cardImage']
    };
    const homeJson = await CallApiFromStrapi.getData('accommodation', pagePopulate);

    return {
        props: {
            homeData: homeJson?.data?.attributes
        }
    };
}