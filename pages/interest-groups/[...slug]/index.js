import CallApiFromStrapi from "../../../components/CallApiFromStrapi";
import SliderContent from "../../../components/SliderContent";
export default function InterestDetailPage({ interestDetail }) {
    return (
        <div className="overflow-hidden">
            <SliderContent sliderContent={interestDetail} />
        </div>
    )
}
export async function getServerSideProps(context) {
    const contentCategory = {
        populate: ['slider.thumbnail'],
        filters: {
            slug: {
                $eq: context?.query?.slug
            }
        }
    };
    const interestDetail = await CallApiFromStrapi.getData('interest-group-details', contentCategory);

    return {
        props: {
            interestDetail: interestDetail.data[0].attributes
        }
    };
}