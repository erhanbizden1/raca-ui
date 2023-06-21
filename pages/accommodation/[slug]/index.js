import CallApiFromStrapi from '../../../components/CallApiFromStrapi';
import PageDetail from '../../../components/pageDetail';
export default function AccommondationDetail({ accommodationDetails }) {
    return (
        <div>
            <PageDetail detailPage={accommodationDetails} />
        </div>
    )
}
export async function getServerSideProps(context) {
    const pagePopulate = {
        populate: ['slider.thumbnail'],
        filters: {
            slug: {
                $eq: context?.query?.slug
            }
        }
    };
    const accommodationDetails = await CallApiFromStrapi.getData('accommodation-details', pagePopulate);

    return {
        props: {
            accommodationDetails: accommodationDetails?.data[0]?.attributes
        }
    };
}