
import BreadCrumb from "../../components/BreadCrumb";
import CallApiFromStrapi from "../../components/CallApiFromStrapi";
import DefaultCard from "../../components/DefaultCard";
import SliderContent from "../../components/SliderContent";

export default function Reciprocal({ reciprocal }) {

    return (
        <div>
            <style jsx global>{`
                body {
                    background: #00193D;
                }
                `}
            </style>
            <BreadCrumb color="white" />
            <SliderContent sliderContent={reciprocal} color="white" />
            <section className=" text-black bg-white py-[124px]">
                <div className="container">
                    <h1 className="font-merriweather text-[36px] lg:text-[48px] text-center leading-[54px]">{reciprocal.contentTitle}</h1>
                    <div className="flex-none lg:flex gap-[24px] justify-center">
                        {
                            reciprocal?.defaultCard.map((cardItem) => {
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
    const reciprocal = await CallApiFromStrapi.getData('reciprocal-club', pagePopulate);

    return {
        props: {
            reciprocal: reciprocal?.data?.attributes
        }
    };
}