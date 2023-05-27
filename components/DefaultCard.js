import Image from "next/image";

export default function DefaultCard({cardItem}) {
    return (
        <div className="max-w-[504px] border border-border mt-[32px] lg:mt-0 m-auto lg:m-0">
            <Image
                src={`http://localhost:1337${cardItem?.cardImage.data.attributes.url}`}
                alt={`Card Image`}
                width={504}
                height={346}
            />
            <div className="px-[28px] pt-[24px] pb-[36px] ">
                <div className="text-black font-bold text-[28px]">{cardItem.title}</div>
                <div className="mt-[20px] text-grey lg:pr-[105px]" dangerouslySetInnerHTML={{ __html: cardItem.desc }} ></div>
                <button className="lg:px-[73px] border-[2px] border-black py-[15px] mt-[36px] flex items-center relative discoverButton w-full lg:min-w-[268px] justify-center xl:hover:bg-black xl:hover:text-white">
                    <span className="mr-[12px] text-lg transition ease-in-out">{cardItem.buttonText}</span>
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
    )
}