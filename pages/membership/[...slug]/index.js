import CallApiFromStrapi from "../../../components/CallApiFromStrapi";
import DetailPage from "../../../components/pageDetail";

export default function MemberShipDetial ({memberShipDetail}){
    return(
       <DetailPage detailPage={memberShipDetail}/>
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
    const memberShipDetail = await CallApiFromStrapi.getData('member-ship-details', contentCategory);

    return {
        props: {
            memberShipDetail: memberShipDetail.data[0].attributes
        }
    };
}