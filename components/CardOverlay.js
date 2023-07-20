import Image from "next/image";
import Link from "next/link";
export default function CardOverlay(cardOverlay, centerText) {

    return (
        <>
            {
                cardOverlay.cardOverlay?.map((overlayItem) => {
                    console.log("adsa",overlayItem?.cardImage?.data?.attributes.url)
                    if (!overlayItem.bigCard) {
                        return (
                            <div key={overlayItem.id}>
                                <div className="relative overlayItemImage h-full w-full min-h-[369px]">
                                    {
                                        overlayItem?.cardImage?.data?.attributes?.url?
                                            <Image
                                                src={overlayItem?.cardImage?.data?.attributes?.url}
                                                alt={`Thumbnail`} discoverButton
                                                layout="fill"
                                                objectFit="cover"

                                            /> :
                                            <div className="bg-[#002966] min-h-[inherit]"></div>
                                    }
                                    <div>
                                        <div className="absolute top-0 left-0 scale-[0.95] xl:hover:scale-[1.05] cursor-pointer transform transition-all  ease-in-out w-full h-full border border-border "></div>
                                        <h2 className={`absolute left-1/2 -translate-x-1/2 bottom-[32px] text-white lg:text-[28px] text-[24px] font-bold transition-all  ease-in-out w-max max-w-[300px] text-center`}>{overlayItem.title}</h2>
                                        <div className="absolute left-1/2 -translate-x-1/2 bottom-[25px]">
                                        {
                                            overlayItem?.buttonSlug &&
                                            <Link href={overlayItem?.buttonSlug}>
                                                <button className="group opacity-0  px-[15px] border-[2px] xl:hover:border-transparent border-white py-[15px]  items-center relative discoverButton min-w-[268px] xl:hover:bg-black text-white flex justify-center !duration-500">
                                                    <span className="mr-[12px] text-lg transition ease-in-out">{overlayItem?.buttonText}</span>
                                                    <Image
                                                        src="/rightArrow.svg"
                                                        alt={"arrow"}
                                                        width={19}
                                                        height={13}
                                                        className="group-hover:-translate-x-[110px] translate-x-0 transition ease-in-out"
                                                    />
                                                </button>
                                            </Link>
                                        }
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </>
    )
}