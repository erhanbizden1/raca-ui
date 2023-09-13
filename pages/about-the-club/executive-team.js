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
                                    <div key={overlayItem.id} className="overflow-hidden max-w-[300px] w-full m-auto group relative">

                                        <div className="relative overlayItemImage h-[300px]">
                                            <Image
                                                src={overlayItem?.cardImage?.data?.attributes?.url}
                                                alt={`Thumbnail`}
                                                objectFit="contain"
                                                layout="fill"
                                                className="max-h-[300px] "
                                            />
                                            <div>
                                                <div className="absolute top-0 left-0 scale-[0.95]  cursor-pointer transform transition-all  ease-in-out w-full h-full border border-border "></div>
                                            </div>
                                        </div>
                                        <h2 className="text-black mx-auto  lg:text-[28px] text-[24px] font-bold transition-all  ease-in-out w-max max-w-[300px] text-center  z-50">{overlayItem.title}</h2>
                                        <button className="border-[2px] xl:hover:border-transparent mx-auto border-white  min-w-[268px] xl:hover:bg-black text-black border-none bg-transparent hover:!bg-transparent items-center !block m-0">
                                            <span className="text-lg transition ease-in-out">{overlayItem?.buttonText}</span>
                                        </button>
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
                                    <div key={overlayItem.id} className="overflow-hidden max-w-[300px] w-full m-auto group relative">
                                        <div className="relative overlayItemImage h-[300px]">
                                            <Image
                                                src={overlayItem?.cardImage?.data?.attributes?.url}
                                                alt={`Thumbnail`}
                                                objectFit="contain"
                                                layout="fill"
                                                className="max-h-[300px] "
                                            />
                                            <div>
                                                <div className="absolute top-0 left-0 scale-[0.95]  cursor-pointer transform transition-all  ease-in-out w-full h-full border border-border "></div>
                                            </div>
                                        </div>
                                        <h2 className="text-black mx-auto  lg:text-[28px] text-[24px] font-bold transition-all  ease-in-out w-max max-w-[300px] text-center  z-50">{overlayItem.title}</h2>
                                        <button className="border-[2px] xl:hover:border-transparent mx-auto border-white  min-w-[268px] xl:hover:bg-black text-black border-none bg-transparent hover:!bg-transparent items-center !block m-0">
                                            <span className="text-lg transition ease-in-out">{overlayItem?.buttonText}</span>
                                        </button>
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