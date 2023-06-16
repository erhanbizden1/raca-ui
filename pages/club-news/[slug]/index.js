import CallApiFromStrapi from "../../../components/CallApiFromStrapi";
import BreadCrumb from "../../../components/BreadCrumb";
import DetailPage from "../../../components/pageDetail";
export default function ClubNews({ clubNewsDetail }) {
    return (
        <>
            <div>
                <style jsx global>{`
                    body {
                        background: #EBECED;
                    }
                    `}</style>
                <BreadCrumb />
                <DetailPage detailPage={clubNewsDetail} />
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
    const clubNewsDetail = await CallApiFromStrapi.getData('club-news-details', pagePopulate);

    return {
        props: {
            clubNewsDetail: clubNewsDetail?.data[0]?.attributes
        }
    };
}