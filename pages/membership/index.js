import Image from "next/image";
import CallApiFromStrapi from "../../components/CallApiFromStrapi";

export default function MemberShip({ memberShip }) {
    console.log(memberShip)
    return (
        <div>
            <style jsx global>{`
  body {
    background: #EBECED;
  }
`}</style>
            <div className="container mb-[100px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:my-[130px] items-center">
                    <div>
                        <h1 className={`text-[36px] md:text-[64px]  md:leading-[80px] lg:pl-0 lg:text-[88px] text-[#000C1F] font-merriweather leading-[54px] lg:leading-[111px]`}>{memberShip.title}</h1>
                        <div>
                            <div className="!text-[#3D4655] font-[500] text-lg" dangerouslySetInnerHTML={{ __html: memberShip.desc }} ></div>
                            <button className="px-[20px] bg-blue xl:hover:bg-[#002966] transition-all ease-in-out border-[2px] border-black py-[15px] mt-[36px] relative text-white">
                                <span className="text-lg transition ease-in-out">{memberShip.buttonText}</span>
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                    <div className="border border-border absolute left-0 top-0 w-full h-full scale-[1.03] scale-y-[1.05]"></div>
                    <Image src="http://localhost:1337/uploads/MG_4173_R_2_Low_res_1_8f9f871d96.png" width={13} layout="responsive" height={13} alt=""></Image>
                    </div>
                </div>

            </div>
            <section className="py-[132px]" style={{ background: "white" }}>
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[24px] xl:px-[72px]">
                        {
                            memberShip?.cardOverlay.map((overlayItem) => {
                                if (!overlayItem.bigCard) {
                                    return (
                                        <div key={overlayItem.id} className="overflow-hidden">
                                            <div className="relative overlayItemImage">
                                                <Image
                                                    src={`http://localhost:1337${overlayItem?.cardImage?.data?.attributes?.url}`}
                                                    alt={`Thumbnail`}
                                                    width={511}
                                                    height={100}
                                                    layout="responsive"
                                                />
                                                <div>
                                                    <div className="absolute top-0 left-0 scale-[0.95] xl:hover:scale-[1.05] cursor-pointer transform transition-all  ease-in-out w-full h-full border border-border "></div>
                                                    <h2 className="absolute left-1/2 -translate-x-1/2 bottom-[32px] text-white text-[28px] font-bold transition-all  ease-in-out w-max max-w-[300px] text-center">{overlayItem.title}</h2>
                                                    <div className="absolute left-1/2 -translate-x-1/2 ">
                                                        <button className="opacity-0 bottom-[85px] px-[73px] border-[2px] xl:hover:border-transparent border-white py-[15px]  items-center relative discoverButton min-w-[268px] xl:hover:bg-black text-white flex">
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
                                }
                            })

                        }
                    </div>
                    <div className="xl:px-[72px] mt-[24px]">
                        {
                            memberShip?.cardOverlay.map((bigOverlayItem) => {
                                if (bigOverlayItem.bigCard) {
                                    return (
                                        <div key={bigOverlayItem.id} className="grid grid-cols-7 w-full relative">
                                        <div className="border border-border absolute left-0 top-0 w-full h-full scale-[1]"></div>
                                            <div className="col-span-4 py-[36px] px-[36px]">
                                                <div className="flex flex-col justify-between h-full">
                                                    <div>
                                                        <h2 className="text-black text-[28px] font-bold mb-2">{bigOverlayItem.title}</h2>
                                                        <p className="text-[#3D4655] max-w-[300px] m-0">Give yourself the advantage. There has never been a better time to join!</p>
                                                    </div>
                                                    <button className="group px-[73px] border-[2px] xl:hover:border-transparent border-[#3D4655] py-[15px]  items-center relative discoverButton min-w-[268px] w-max xl:hover:bg-black text-white flex viewDetails">
                                                        <span className="mr-[12px] text-lg transition ease-in-out text-[#3D4655] group-hover:text-white">{bigOverlayItem?.buttonText}</span>
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
                                            <div className="col-span-3 p-[8px]">
                                                <Image
                                                    src={`http://localhost:1337${bigOverlayItem?.cardImage?.data?.attributes?.url}`}
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
        populate: ['thumbnail', 'cardOverlay.cardImage']
    };
    const memberShip = await CallApiFromStrapi.getData('member-ship', pagePopulate);

    return {
        props: {
            memberShip: memberShip?.data?.attributes
        }
    };
}