import Image from "next/image";

export default function DefaultCard({ cardItem ,seeDetailsActive}) {
    return (
        <div className="max-w-[504px] relative mt-[32px] lg:mt-0 m-auto lg:m-0">
            <div className="border border-border absolute left-0 top-0 w-full h-full scale-[0.97] "></div>
            <Image
                src={`http://localhost:1337${cardItem?.cardImage.data.attributes.url}`}
                alt={`Card Image`}
                width={504}
                height={346}
            />
            <div className="px-[34px] pt-[24px] pb-[36px] flex flex-col justify-between">
                <div>
                    <div className="text-black font-bold text-[28px]">{cardItem.title}</div>
                    <div className="mt-[20px] text-grey lg:pr-[105px]" dangerouslySetInnerHTML={{ __html: cardItem.desc }} ></div>
                </div>
                {
                    seeDetailsActive?
                    <div className="flex items-center  mt-[36px]">
                    <button className=" group lg:px-[20px] border-[2px] mr-[24px] border-black py-[15px] flex items-center relative discoverButton w-full lg:w-max justify-center xl:hover:bg-black xl:hover:text-white">
                        <span className="mr-[12px] text-lg transition ease-in-out">{cardItem.buttonText}</span>
                        "<Image
                            src="/rightArrow.svg"
                            alt={"arrow"}
                            width={19}
                            height={13}
                            className="group-hover:-translate-x-[100px] translate-x-0 transition ease-in-out"
                        />"
                    </button>
                    <span className="lg:text-lg underline text-sm">SEE DETAILS</span>
                </div>:
                <button className="group xl:min-w-[280px] mt-[36px] lg:px-[20px] border-[2px] mr-[24px] border-black py-[15px] flex items-center relative discoverButton w-full lg:w-max justify-center xl:hover:bg-black xl:hover:text-white">
                        <span className="mr-[12px] text-lg transition ease-in-out">{cardItem.buttonText}</span>
                        <Image
                            src="/rightArrow.svg"
                            alt={"arrow"}
                            width={19}
                            height={13}
                            className="group-hover:-translate-x-[100px] translate-x-0 transition ease-in-out"
                        />
                    </button>
                
                }
            </div>
        </div>
    )
}