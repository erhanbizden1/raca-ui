import Image from "next/image";
import BreadCrumb from "../../components/BreadCrumb";
import CallApiFromStrapi from "../../components/CallApiFromStrapi";

export default function Functions({ homeData }) {
    return (
        <>
            <style jsx global>{`
  body {
    background: #000C1F;
  }
`}</style>
        <BreadCrumb color="#EBECED" staticText="The Club"/>
            <div className="container mb-[100px]">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:my-[130px] items-start">
                    <div className="order-last xl:order-first">
                        <h1 className={`text-[36px] md:text-[64px] mb-[28px]  md:leading-[80px] font-bold lg:pl-0 lg:text-[88px] text-[#EBECED] font-merriweather leading-[54px] lg:leading-[111px]`}>{homeData.title}</h1>
                        <div>
                            <div className="text-[#C2C5C9] font-[500] text-lg" dangerouslySetInnerHTML={{ __html: homeData.description }} ></div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="border border-border absolute left-0 top-0 w-full h-full scale-[1.03] scale-y-[1.05]"></div>
                        <Image src={`http://localhost:1337${homeData?.thumbnail?.data?.attributes?.url}`} width={13} layout="responsive" height={13} alt=""></Image>
                    </div>
                </div>
            </div>
            <section className=" text-black bg-white py-[48px] lg:py-[124px]">
                <div className="lg:px-[138px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-[24px] items-start justify-center container">
                    {
                        homeData?.overlayCard.map((overlayItem) => {
                            return (
                                <div key={overlayItem.id}>
                  <div className="relative overlayItemImage cursor-pointer">
                  {
                    overlayItem?.cardImage?.data?.attributes?.url ? <Image
                      src={`http://localhost:1337${overlayItem?.cardImage?.data?.attributes?.url}`}
                      alt={`Thumbnail`}
                      width={511}
                      height={100}
                      layout="responsive"
                    />:
                    <div className="bg-[#002966] h-full min-h-[247px]"></div>

                  }
                    <div >
                      <div className="absolute top-0 left-0 scale-[0.95] xl:hover:scale-[1.05] cursor-pointer transform transition-all  ease-in-out w-full h-full border border-border "></div>
                      <h2 className={`absolute left-1/2 -translate-x-1/2 ${overlayItem?.cardImage?.data?.attributes?.url ? "bottom-[32px]" : "top-1/2 -translate-y-1/2 imgNone"} text-white  lg:text-[28px] text-center text-[24px] font-bold transition-all  ease-in-out`}>{overlayItem.title}</h2>
                      <div className="absolute left-1/2 -translate-x-1/2 ">
                        <button  className="opacity-0 bottom-[85px] px-[73px] border-[2px] xl:hover:border-transparent border-white py-[15px] w-max items-center relative discoverButton min-w-[268px] xl:hover:bg-black text-white flex">
                          <span className="mr-[12px] text-lg transition ease-in-out">{overlayItem?.buttonText}</span>
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
        populate: ['thumbnail', 'overlayCard.cardImage']
    };
    const homeJson = await CallApiFromStrapi.getData('about-the-club', pagePopulate);

    return {
        props: {
            homeData: homeJson?.data?.attributes
        }
    };
}