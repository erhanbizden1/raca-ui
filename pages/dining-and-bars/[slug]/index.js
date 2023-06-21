import CallApiFromStrapi from '../../../components/CallApiFromStrapi';
import PageDetail from '../../../components/pageDetail';
export default function DiningDetail({ dining }) {
    return (
        <div>
            <PageDetail detailPage={dining} />
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
    const dining = await CallApiFromStrapi.getData('dining-and-bars-details', pagePopulate);

    return {
        props: {
            dining: dining?.data[0]?.attributes
        }
    };
}