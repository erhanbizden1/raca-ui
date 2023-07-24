import BreadCrumb from "../../components/BreadCrumb";
import CallApiFromStrapi from "../../components/CallApiFromStrapi";
import DefaultCard from "../../components/DefaultCard";
import SliderContent from "../../components/SliderContent";

export default function DiningAndBars({ homeData }) {

    return (
        <div>
            <style jsx global>{`
                body {
                    background: #F2E9D9;
                }
                `}
            </style>
            <BreadCrumb color="#000C1F" staticText="Dining and Bars" />
            <SliderContent sliderContent={homeData} />
            <section className=" text-black bg-white py-[124px]">
                <div className="container">
                    <h1 className="font-merriweather text-[36px] lg:text-[48px] text-center leading-[54px]">{homeData.contentTitle}</h1>
                    <div className="flex-none lg:flex gap-[24px] justify-center">
                        {
                            homeData?.defaultCard.map((cardItem) => {
                                return (
                                    <DefaultCard key={cardItem.id} cardItem={cardItem} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
export async function getServerSideProps() {
    const pagePopulate = {
        populate: ['slider.thumbnail', 'defaultCard.cardImage']
    };
    const homeJson = await CallApiFromStrapi.getData('dining-and-bar', pagePopulate);

    return {
        props: {
            homeData: homeJson?.data?.attributes
        }
    };
}