import CallApiFromStrapi from '../../../components/CallApiFromStrapi';
import PageDetail from '../../../components/pageDetail';
export default function FacilitiesDetail({ facilitiesDetail }) {
    return (
        <div>
            <PageDetail detailPage={facilitiesDetail} />
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
    const facilitiesDetail = await CallApiFromStrapi.getData('facilities-details', pagePopulate);

    return {
        props: {
            facilitiesDetail: facilitiesDetail?.data[0]?.attributes
        }
    };
}