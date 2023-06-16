import Image from "next/image";
import BreadCrumb from "../../components/BreadCrumb";
import CallApiFromStrapi from "../../components/CallApiFromStrapi";
import SliderContent from "../../components/SliderContent";

export default function Funcitons({ funcitons }) {
    return (
        <div className="overflow-hidden">
            <style jsx global>{`
  body {
    background: #000C1F;
  }
`}</style>
            <BreadCrumb color="white" staticText="Functions" />
            <SliderContent sliderContent={funcitons} color="white"/>
            <section className=" text-black bg-white py-[124px]">
                <div className="grid grid-cols-1 lg:grid-cols-3  gap-[24px] items-start justify-center container">
                    {
                        funcitons?.defaultCard.map((cardItem) => {
                            return (
                                <div key={cardItem.id} className="max-w-[504px] relative mt-[32px] lg:mt-0 m-auto lg:m-0 border border-border p-[24px]">
                                    <Image
                                        src={`http://localhost:1337${cardItem?.cardImage.data.attributes.url}`}
                                        alt={`Card Image`}
                                        width={504}
                                        height={346}
                                    />
                                    <div className=" pt-[24px] flex flex-col justify-between">
                                        <div>
                                            <div className="text-black font-bold text-[28px]">{cardItem.title}</div>
                                            <div className="mt-[20px] text-grey lg:pr-[105px]" dangerouslySetInnerHTML={{ __html: cardItem.desc }} ></div>
                                        </div>
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
    const funcitons = await CallApiFromStrapi.getData('function', pagePopulate);

    return {
        props: {
            funcitons: funcitons?.data?.attributes
        }
    };
}