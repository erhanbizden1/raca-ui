import Image from "next/image";
import CallApiFromStrapi from "../../components/CallApiFromStrapi";
import DefaultCard from "../../components/DefaultCard";

export default function Home({ homeData }) {

    return (
        <div>
            <style jsx global>{`
                body {
                    background: #00193D;
                }
                `}
            </style>
            <div className="container mb-[100px]">
                <div className="grid grid-cols-1 xl:grid-cols-2  gap-10 lg:my-[130px] ">
                    <div className="order-last xl:order-first">
                        <h1 className={`text-[36px] md:text-[64px]  md:leading-[80px] lg:pl-0 lg:text-[88px] text-white font-bold font-merriweather mb-[48px] leading-[54px] lg:leading-[111px]`}>{homeData.title}</h1>
                        <div>
                            <div className="!text-[white] font-[500] text-lg" dangerouslySetInnerHTML={{ __html: homeData.description }} ></div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="border border-border absolute left-0 top-0 w-full h-full scale-[1.03] scale-y-[1.05]"></div>
                        <Image src={`http://localhost:1337${homeData?.thumbnail.data[0].attributes.url}`} width={13} layout="responsive" height={13} alt=""></Image>
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
    const homeJson = await CallApiFromStrapi.getData('reciprocal-club', pagePopulate);

    return {
        props: {
            homeData: homeJson?.data?.attributes
        }
    };
}