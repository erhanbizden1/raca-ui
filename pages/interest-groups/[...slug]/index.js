import Image from "next/image";
import CallApiFromStrapi from "../../../components/CallApiFromStrapi";
export default function InterestDetailPage({ interestDetail }) {
    console.log(interestDetail)
    return (
        <div className="container mb-[100px]">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:my-[130px] ">
                <div className="order-last xl:order-first">
                    <h1 className={`text-[36px] md:text-[64px]  md:leading-[80px] lg:pl-0 lg:text-[88px] text-[#000C1F] font-merriweather leading-[54px] lg:leading-[111px]`}>{interestDetail.title}</h1>
                    <div>
                        <div className="!text-[#3D4655] font-[500] text-lg" dangerouslySetInnerHTML={{ __html: interestDetail.description }} ></div>
                    </div>
                </div>
                <div className="relative">
                    <div className="border border-border absolute left-0 top-0 w-full h-full scale-[1.03] scale-y-[1.05]"></div>
                    <Image src="http://localhost:1337/uploads/MG_4173_R_2_Low_res_1_8f9f871d96.png" width={13} layout="responsive" height={13} alt=""></Image>
                </div>
            </div> 
        </div>
    )
}
export async function getServerSideProps(context) {
    console.log(context)
    const contentCategory = {
        populate:['slider'],
        filters:{
          slug:{
            $eq: context?.query?.slug
          }
        }
      };
    const interestDetail = await CallApiFromStrapi.getData('interest-group-details',contentCategory);
    
    return {
        props: {
            interestDetail: interestDetail.data[0].attributes
        }
    };
}