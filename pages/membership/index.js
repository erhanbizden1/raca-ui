import Image from "next/image";
import BigCardOverlay from "../../components/BigCardOverlay";
import BreadCrumb from "../../components/BreadCrumb";
import CallApiFromStrapi from "../../components/CallApiFromStrapi";
import CardOverlay from "../../components/CardOverlay";
export default function MemberShip({ memberShip }) {
    return (
        <div>
            <style jsx global>{`
  body {
    background: #EBECED;
  }
`}</style>
            <BreadCrumb color="" staticText="Membership" />
            <div className="container mb-[100px]">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:my-[130px] items-start">
                    <div className="order-last xl:order-first">
                        <h1 className={`text-[36px] md:text-[64px] font-bold md:leading-[80px] lg:pl-0 lg:text-[88px] text-[#000C1F] font-merriweather leading-[54px] lg:leading-[111px]`}>{memberShip.title}</h1>
                        <div>
                            <div className="!text-[#3D4655] font-[500] text-lg" dangerouslySetInnerHTML={{ __html: memberShip.desc }} ></div>
                            <button className="px-[20px] bg-blue xl:hover:bg-[#002966] transition-all ease-in-out border-[2px] border-black py-[15px] mt-[36px] relative text-white">
                                <span className="text-lg transition ease-in-out">{memberShip.buttonText}</span>
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="border border-border absolute left-0 top-0 w-full h-full scale-[1.03] scale-y-[1.05]"></div>
                        <Image src="http://localhost:1337/uploads/MG_4173_R_2_Low_res_1_8f9f871d96.png" width={13} layout="responsive" height={13} alt=""></Image>
                    </div>
                </div>

            </div>
            <section className="py-[132px]" style={{ background: "white" }}>
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[24px] xl:px-[72px]">
                        <CardOverlay cardOverlay={memberShip.cardOverlay}/>
                    </div>
                    <div className="xl:px-[72px] mt-[24px]">
                        <BigCardOverlay  cardOverlay={memberShip.cardOverlay}/>
                    </div>
                </div>
            </section>
        </div>
    )
}


export async function getServerSideProps() {
    const pagePopulate = {
        populate: ['thumbnail', 'cardOverlay.cardImage']
    };
    const memberShip = await CallApiFromStrapi.getData('member-ship', pagePopulate);

    return {
        props: {
            memberShip: memberShip?.data?.attributes
        }
    };
}