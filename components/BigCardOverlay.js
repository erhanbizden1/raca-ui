import Image from "next/image"
import Link from "next/link"

export default function BigCardOverlay(cardOverlay) {
    return (
        <>
            {
                cardOverlay?.cardOverlay.map((bigOverlayItem) => {
                    if (bigOverlayItem.bigCard) {
                        return (
                            <div key={bigOverlayItem.id} className="grid grid-col-2 lg:grid-cols-7 w-full relative">
                                <div className="border border-border absolute left-0 top-0 w-full h-full scale-[1]"></div>
                                <div className="col-span-1 lg:col-span-4 py-[15px] lg:py-[36px] px-[15px] md:px-[36px] order-1 ">
                                    <div className="flex flex-col justify-between h-full">
                                        <div>
                                            <h2 className="text-black text-[28px] font-bold mb-2">{bigOverlayItem.title}</h2>
                                            <p className="text-[#3D4655] max-w-[300px] m-0">Give yourself the advantage. There has never been a better time to join!</p>
                                        </div>
                                        {
                                            bigOverlayItem.buttonSlug &&
                                            <Link href={bigOverlayItem.buttonSlug}>
                                                <button className="group lg:px-[73px] border-[2px] xl:hover:border-transparent border-[#3D4655] py-[15px]  items-center relative w-full lg:w-max justify-center mt-[10px] lg:mt-0 xl:hover:bg-black text-white flex viewDetails  !duration-500">
                                                    <span className="mr-[12px] text-lg ease-in-out text-[#3D4655] group-hover:text-white">{bigOverlayItem?.buttonText}</span>
                                                    <Image
                                                        src="/rightArrow.svg"
                                                        alt={"arrow"}
                                                        width={19}
                                                        height={13}
                                                        className="transition ease-in-out"
                                                    />
                                                </button>
                                            </Link>
                                        }
                                    </div>
                                </div>
                                <div className="col-span-1 lg:col-span-3 p-[8px] lg:order-1">
                                    <Image
                                        src={bigOverlayItem?.cardImage?.data?.attributes?.url}
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
        </>
    )
}