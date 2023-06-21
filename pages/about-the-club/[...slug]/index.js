import CallApiFromStrapi from "../../../components/CallApiFromStrapi";
import BreadCrumb from "../../../components/BreadCrumb";
import DetailPage from "../../../components/pageDetail";
export default function ClubHistory({ aboutDetail }) {
    return (
        <>
            <div>
                <style jsx global>{`
                    body {
                        background: #EBECED;
                    }
                    `}</style>
                <DetailPage detailPage={aboutDetail} />
            </div>
        </>
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
    const aboutDetail = await CallApiFromStrapi.getData('about-the-club-details', pagePopulate);

    return {
        props: {
            aboutDetail: aboutDetail?.data[0]?.attributes
        }
    };
}