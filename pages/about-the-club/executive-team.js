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
            <SliderContent sliderContent={directors}/>
            <section className="bg-[#FFFF] py-[65px]">
                <div className="grid grid-cols-1 justify-center gap-[20px] p-[15px] lg:gap-[24px] xl:px-[150px]    ">
                    {
                        directors?.cardOverlay.map((overlayItem, index) => {
                            if (index === 0) {
                                return (
                                    <div key={overlayItem.id} className="overflow-hidden lg:max-w-[300px]  w-full m-auto group relative">
                                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-20"></div>
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
                                                <h2 className="absolute left-1/2 -translate-x-1/2 bottom-[32px] text-white lg:text-[28px] text-[24px] font-bold transition-all  ease-in-out w-max max-w-[300px] text-center group-hover:bottom-[70px] z-40">{overlayItem.title}</h2>
                                                <div className="absolute left-1/2 -translate-x-1/2 z-50">
                                                    <button className="group group-hover:opacity-100 opacity-0 bottom-[85px] px-[30px] border-[2px] xl:hover:border-transparent border-white py-[15px] relative z-50 min-w-[268px] xl:hover:bg-black text-white border-none bg-transparent hover:!bg-transparent items-center !block m-0 ">
                                                        <span className="text-lg transition ease-in-out z-50">{overlayItem?.buttonText}</span>
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
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-[20px] px-[15px] lg:gap-[50px] my-[15px]  lg:my-[100px] ">
                    {
                        directors?.cardOverlay.map((overlayItem, index) => {
                            if (index !== 0) {
                                return (
                                    <div key={overlayItem.id} className="overflow-hidden w-full m-auto group relative">
                                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-20"></div>
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
                                                <h2 className="absolute left-1/2 -translate-x-1/2 bottom-[32px] text-white lg:text-[28px] text-[24px] font-bold transition-all  ease-in-out w-max max-w-[300px] text-center group-hover:bottom-[70px] z-40">{overlayItem.title}</h2>
                                                <div className="absolute left-1/2 -translate-x-1/2 z-50">
                                                    <button className="group group-hover:opacity-100 opacity-0 bottom-[85px] px-[30px] border-[2px] xl:hover:border-transparent border-white py-[15px] relative z-50 min-w-[268px] xl:hover:bg-black text-white border-none bg-transparent hover:!bg-transparent items-center !block m-0 ">
                                                        <span className="text-lg transition ease-in-out z-50">{overlayItem?.buttonText}</span>
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
        populate: ['slider.thumbnail', 'cardOverlay.cardImage']
    };
    const directors = await CallApiFromStrapi.getData('executive-team', pagePopulate);

    return {
        props: {
            directors: directors?.data?.attributes
        }
    };
}