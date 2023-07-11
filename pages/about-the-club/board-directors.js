import Image from "next/image";
import Link from "next/link";
import BreadCrumb from "../../components/BreadCrumb";
import CallApiFromStrapi from "../../components/CallApiFromStrapi";
import SliderContent from "../../components/SliderContent";

export default function BoardDirectors({ directors }) {
    return (
        <>
            <style jsx global>{`
  body {
    background: #EBECED;
  }
`}</style>
            <BreadCrumb />
            <SliderContent sliderContent={directors} />
            <section className="bg-[#FFFF] py-[65px]">
                <div className="grid grid-cols-1 justify-center gap-[20px] lg:gap-[24px] xl:px-[150px]    ">
                    {
                        directors?.cardOverlay.map((overlayItem, index) => {
                            if (index === 0) {
                                return (
                                    <div key={overlayItem.id} className="overflow-hidden min-w-[300px] m-auto group">
                                        <div className="relative overlayItemImage">
                                            <Image
                                                src={overlayItem?.cardImage?.data?.attributes?.url}
                                                alt={`Thumbnail`}
                                                width={511}
                                                height={100}
                                                objectFit="cover"
                                                layout="responsive"
                                            />
                                            <div>
                                                <div className="absolute top-0 left-0 scale-[0.95] xl:hover:scale-[1.05] cursor-pointer transform transition-all  ease-in-out w-full h-full border border-border "></div>
                                                <h2 className="absolute left-1/2 -translate-x-1/2 bottom-[32px] text-white lg:text-[28px] text-[24px] font-bold transition-all  ease-in-out w-max max-w-[300px] text-center group-hover:bottom-[70px]">{overlayItem.title}</h2>
                                                <div className="absolute left-1/2 -translate-x-1/2 ">
                                                    <button className="group opacity-0 bottom-[85px] px-[30px] border-[2px] xl:hover:border-transparent border-white py-[15px] relative min-w-[268px] xl:hover:bg-black text-white border-none bg-transparent hover:!bg-transparent items-center !block m-0">
                                                        <span className="text-lg transition ease-in-out">{overlayItem?.buttonText}</span>
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
                                    <div key={overlayItem.id} className="w-full md:max-w-[300px] m-auto group">
                                        <div className="relative overlayItemImage">
                                            <Image
                                                src={overlayItem?.cardImage?.data?.attributes?.url}
                                                alt={`Thumbnail`}
                                                width={511}
                                                height={100}
                                                objectFit="cover"
                                                layout="responsive"
                                            />
                                            <div>
                                                <div className="absolute top-0 left-0 scale-[0.95] xl:hover:scale-[1.05] cursor-pointer transform transition-all  ease-in-out w-full h-full border border-border "></div>
                                                <h2 className="absolute left-1/2 -translate-x-1/2 bottom-[32px] text-white lg:text-[28px] text-[24px] font-bold transition-all  ease-in-out w-max max-w-[300px] text-center group-hover:bottom-[70px]">{overlayItem.title}</h2>
                                                <div className="absolute left-1/2 -translate-x-1/2 ">
                                                    <button className="group opacity-0 bottom-[85px] px-[30px] border-[2px] xl:hover:border-transparent border-white py-[15px] relative min-w-[268px] xl:hover:bg-black text-white border-none bg-transparent hover:!bg-transparent items-center !block m-0">
                                                        <span className="text-lg transition ease-in-out">{overlayItem?.buttonText}</span>
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
                                    <div key={overlayItem.id} className="w-full lg:max-w-[300px] m-auto group">
                                        <div className="relative overlayItemImage">
                                            <Image
                                                src={overlayItem?.cardImage?.data?.attributes?.url}
                                                alt={`Thumbnail`}
                                                width={511}
                                                height={300}
                                                objectFit="cover"
                                                layout="responsive"
                                            />
                                            <div>
                                                <div className="absolute top-0 left-0 scale-[0.95] xl:hover:scale-[1.05] cursor-pointer transform transition-all  ease-in-out w-full h-full border border-border "></div>
                                                <h2 className="absolute left-1/2 -translate-x-1/2 bottom-[32px] text-white lg:text-[28px] text-[24px] font-bold transition-all  ease-in-out w-max max-w-[300px] text-center group-hover:bottom-[70px]">{overlayItem.title}</h2>
                                                <div className="absolute left-1/2 -translate-x-1/2 ">
                                                    <button className="group opacity-0 bottom-[85px] px-[30px] border-[2px] xl:hover:border-transparent border-white py-[15px] relative min-w-[268px] xl:hover:bg-black text-white border-none bg-transparent hover:!bg-transparent items-center !block m-0">
                                                        <span className="text-lg transition ease-in-out">{overlayItem?.buttonText}</span>
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
        populate: ['cardOverlay.cardImage', 'slider.thumbnail']
    };
    const directors = await CallApiFromStrapi.getData('board-director', pagePopulate);

    return {
        props: {
            directors: directors?.data?.attributes
        }
    };
}