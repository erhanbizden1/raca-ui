import Image from "next/image";
import CallApiFromStrapi from "../../components/CallApiFromStrapi";
import DefaultCard from "../../components/DefaultCard";

export default function Home({ homeData }) {
    return (
        <>
            <style jsx global>{`
  body {
    background: #F2E9D9;
  }
`}</style>
        
            <div className="container mb-[100px]">
                <div className="grid grid-cols-1 xl:grid-cols-2  gap-10 lg:my-[130px] items-start">
                    <div className="order-last xl:order-first">
                        <h1 className={`text-[36px] md:text-[64px] mb-[28px]  md:leading-[80px] lg:pl-0 lg:text-[88px] text-[#000C1F] font-merriweather leading-[54px] lg:leading-[111px]`}>{homeData.title}</h1>
                        <div>
                            <div className="!text-[#3D4655] font-[500] text-lg" dangerouslySetInnerHTML={{ __html: homeData.description }} ></div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="border border-border absolute left-0 top-0 w-full h-full scale-[1.03] scale-y-[1.05]"></div>
                        <Image src={`http://localhost:1337${homeData?.thumbnail?.data?.attributes?.url}`} width={13} layout="responsive" height={13} alt=""></Image>
                    </div>
                </div>
            </div>
            <section className=" text-black bg-white py-[124px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-start container gap-x-6 gap-y-8 justify-center">
                    {
                        homeData?.defaultCard.map((cardItem) => {
                            return (
                                <div key={cardItem.id} className="relative lg:mt-0 m-auto lg:m-0 border border-border p-[15px] md:p-[5px] md:pb-[24px] xl:p-[24px]">
                                    <Image
                                        src={`http://localhost:1337${cardItem?.cardImage.data.attributes.url}`}
                                        alt={`Card Image`}
                                        width={504}
                                        className="w-full"
                                        height={346}
                                        objectFit="contain"
                                        layout="responsive"
                                    />
                                    <div className=" pt-[24px] flex flex-col justify-between px-0 md:px-[19px] xl:px-0">
                                        <div>
                                            <div className="text-black font-bold text-[28px]">{cardItem.title}</div>
                                            <div className="mt-[20px] text-grey lg:pr-[105px]" dangerouslySetInnerHTML={{ __html: cardItem.desc }} ></div>
                                        </div>
                                        <button className="lg:px-[73px] border-[2px] border-black py-[15px] mt-[36px] flex items-center relative discoverButton w-full lg:min-w-[268px] justify-center xl:hover:bg-black xl:hover:text-white">
                                            <span className="mr-[12px] text-lg transition ease-in-out">{cardItem.buttonText}</span>
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
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}
export async function getServerSideProps() {
    const pagePopulate = {
        populate: ['thumbnail', 'defaultCard.cardImage']
    };
    const homeJson = await CallApiFromStrapi.getData('facilitie', pagePopulate);

    return {
        props: {
            homeData: homeJson?.data?.attributes
        }
    };
}