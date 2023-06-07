import Image from "next/image";
import BreadCrumb from "../../components/BreadCrumb";
import CallApiFromStrapi from "../../components/CallApiFromStrapi";
import DefaultCard from "../../components/DefaultCard";

export default function DiningAndBars({ homeData }) {

    return (
        <div>
            <style jsx global>{`
                body {
                    background: #F2E9D9;
                }
                `}
            </style>
            <BreadCrumb color="#000C1F" staticText="Dining and Bars"/>
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
                        <Image src={`http://localhost:1337${homeData?.thumbnail?.data[0]?.attributes?.url}`} width={13} layout="responsive" height={13} alt=""></Image>
                    </div>
                </div>
            </div>
            <section className=" text-black bg-white py-[124px]">
                <div className="container">
                    <h1 className="font-merriweather text-[36px] lg:text-[48px] text-center leading-[54px]">{homeData.contentTitle}</h1>
                    <div className="flex-none lg:flex gap-[24px] justify-center">
                        {
                            homeData?.defaultCard.map((cardItem) => {
                                return (
                                    <DefaultCard key={cardItem.id} cardItem={cardItem} />
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
        populate: ['thumbnail', 'defaultCard.cardImage']
    };
    const homeJson = await CallApiFromStrapi.getData('dining-and-bar', pagePopulate);

    return {
        props: {
            homeData: homeJson?.data?.attributes
        }
    };
}