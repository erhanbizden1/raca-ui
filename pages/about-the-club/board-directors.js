import Image from "next/image";
import Link from "next/link";
import BreadCrumb from "../../components/BreadCrumb";
import CallApiFromStrapi from "../../components/CallApiFromStrapi";

export default function BoardDirectors({ directors }) {
    return (
        <>
            <style jsx global>{`
  body {
    background: #EBECED;
  }
`}</style>
            <BreadCrumb />
            <div className="container mb-[100px]">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:my-[130px] items-start">
                    <div className="order-last xl:order-first">
                        <h1 className={`text-[36px] md:text-[64px] font-bold md:leading-[80px] lg:pl-0 lg:text-[88px] text-[#000C1F] font-merriweather leading-[54px] lg:leading-[111px]`}>{directors.title}</h1>
                        <div>
                            <div className="!text-[#3D4655] font-[500] text-lg" dangerouslySetInnerHTML={{ __html: directors.description }} ></div>
                            <Link href={directors.buttonLink}>
                                <button className="px-[20px] bg-blue xl:hover:bg-[#002966] transition-all ease-in-out border-[2px] border-black py-[15px] mt-[36px] relative text-white">
                                    <span className="text-lg transition ease-in-out">{directors.buttonText}</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="border border-border absolute left-0 top-0 w-full h-full scale-[1.03] scale-y-[1.05]"></div>
                        <Image src={`http://localhost:1337${directors.thumbnail.data.attributes.url}`} width={13} layout="responsive" height={13} alt=""></Image>
                    </div>
                </div>

            </div>
            <section className="bg-[#FFFF] py-[65px]">
                <div className="grid grid-cols-1 justify-center gap-[20px] lg:gap-[24px] xl:px-[150px]    ">
                    {
                        directors?.cardOverlay.map((overlayItem, index) => {
                            if (index === 0) {
                                return (
                                    <div key={overlayItem.id} className="overflow-hidden min-w-[300px] m-auto">
                                        <div className="relative overlayItemImage">
                                            <Image
                                                src={`http://localhost:1337${overlayItem?.cardImage?.data?.attributes?.url}`}
                                                alt={`Thumbnail`}
                                                width={511}
                                                height={100}
                                                objectFit="cover"
                                                layout="responsive"
                                            />
                                            <div>
                                                <div className="absolute top-0 left-0 scale-[0.95] xl:hover:scale-[1.05] cursor-pointer transform transition-all  ease-in-out w-full h-full border border-border "></div>
                                                <h2 className="absolute left-1/2 -translate-x-1/2 bottom-[32px] text-white lg:text-[28px] text-[24px] font-bold transition-all  ease-in-out w-max max-w-[300px] text-center">{overlayItem.title}</h2>
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
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-center px-[15px]  gap-[20px] lg:gap-[24px] xl:px-[72px] mt-[15px]  lg:mt-[100px] ">
                    {
                        directors?.cardOverlay.map((overlayItem, index) => {
                            if (index === 1 || index === 2) {
                                return (
                                    <div key={overlayItem.id} className="w-full md:max-w-[300px] m-auto">
                                        <div className="relative overlayItemImage">
                                            <Image
                                                src={`http://localhost:1337${overlayItem?.cardImage?.data?.attributes?.url}`}
                                                alt={`Thumbnail`}
                                                width={511}
                                                height={100}
                                                objectFit="cover"
                                                layout="responsive"
                                            />
                                            <div>
                                                <div className="absolute top-0 left-0 scale-[0.95] xl:hover:scale-[1.05] cursor-pointer transform transition-all  ease-in-out w-full h-full border border-border "></div>
                                                <h2 className="absolute left-1/2 -translate-x-1/2 bottom-[32px] text-white lg:text-[28px] text-[24px] font-bold transition-all  ease-in-out w-max max-w-[300px] text-center">{overlayItem.title}</h2>
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
                <div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-[20px] px-[15px] lg:gap-[160px] xl:px-[72px] my-[15px]  lg:my-[100px] ">
                    {
                        directors?.cardOverlay.map((overlayItem, index) => {
                            if (index !== 0 && index !== 1 && index !== 2) {
                                return (
                                    <div key={overlayItem.id} className="w-full lg:max-w-[300px] m-auto">
                                        <div className="relative overlayItemImage">
                                            <Image
                                                src={`http://localhost:1337${overlayItem?.cardImage?.data?.attributes?.url}`}
                                                alt={`Thumbnail`}
                                                width={511}
                                                height={300}
                                                objectFit="cover"
                                                layout="responsive"
                                            />
                                            <div>
                                                <div className="absolute top-0 left-0 scale-[0.95] xl:hover:scale-[1.05] cursor-pointer transform transition-all  ease-in-out w-full h-full border border-border "></div>
                                                <h2 className="absolute left-1/2 -translate-x-1/2 bottom-[32px] text-white lg:text-[28px] text-[24px] font-bold transition-all  ease-in-out w-max max-w-[300px] text-center">{overlayItem.title}</h2>
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
            </section>
        </>
    )
}
export async function getServerSideProps() {
    const pagePopulate = {
        populate: ['thumbnail', 'cardOverlay.cardImage']
    };
    const directors = await CallApiFromStrapi.getData('board-director', pagePopulate);

    return {
        props: {
            directors: directors?.data?.attributes
        }
    };
}