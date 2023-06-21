import CallApiFromStrapi from '../../../components/CallApiFromStrapi';
import PageDetail from '../../../components/pageDetail';
export default function FunctionsDetail({ functionsDetail }) {
    return (
        <div>
            <PageDetail detailPage={functionsDetail} />
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
    const functionsDetail = await CallApiFromStrapi.getData('functions-details', pagePopulate);

    return {
        props: {
            functionsDetail: functionsDetail?.data[0]?.attributes
        }
    };
}