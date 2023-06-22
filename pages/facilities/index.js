import Image from "next/image";
import Link from "next/link";
import CallApiFromStrapi from "../../components/CallApiFromStrapi";
import SliderContent from "../../components/SliderContent"
export default function Facilites({ facilites }) {
    return (
        <div className="overflow-hidden">
            <style jsx global>{`
  body {
    background: #F2E9D9;
  }
`}</style>
            <SliderContent sliderContent={facilites} />
            <section className=" text-black bg-white py-[124px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-start container gap-x-6 gap-y-8 justify-center">
                    {
                        facilites?.defaultCard.map((cardItem) => {
                            return (
                                <div key={cardItem.id} className="relative lg:mt-0 m-auto lg:m-0 border border-border p-[15px] md:p-[5px] md:pb-[24px] xl:p-[24px] h-full">
                                    <div>
                                    <div className="min-h-[295px]  relative">
                                        <Image
                                            src={`http://pure-hamlet-08520-67aeef587ee8.herokuapp.com${cardItem?.cardImage.data.attributes.url}`}
                                            alt={`Card Image`}
                                            className="w-full"
                                            objectFit="contain"
                                            layout="fill"
                                        />
                                        </div>
                                        <div className=" pt-[24px] flex flex-col justify-between px-0 md:px-[19px] xl:px-0">
                                            <div>
                                                <div className="text-black font-bold text-[28px]">{cardItem.title}</div>
                                                <div className="mt-[20px] text-grey lg:pr-[105px] descriptionBox" dangerouslySetInnerHTML={{ __html: cardItem.desc }} ></div>
                                            </div>
                                            <div>
                                                <Link href={cardItem?.buttonSlug}>
                                                    <button className="group lg:px-[73px] border-[2px] border-black py-[15px] mt-[36px] flex items-center relative discoverButton w-full lg:min-w-[268px] justify-center xl:hover:bg-black xl:hover:text-white ">
                                                        <span className="mr-[12px] text-lg transition ease-in-out">{cardItem.buttonText}</span>
                                                        <Image
                                                            src="/rightArrow.svg"
                                                            alt={"arrow"}
                                                            width={19}
                                                            height={13}
                                                            className="group-hover:-translate-x-[100px] translate-x-0 transition ease-in-out"
                                                        />
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}
export async function getServerSideProps() {
    const pagePopulate = {
        populate: ['slider.thumbnail', 'defaultCard.cardImage']
    };
    const facilites = await CallApiFromStrapi.getData('facilitie', pagePopulate);

    return {
        props: {
            facilites: facilites?.data?.attributes
        }
    };
}