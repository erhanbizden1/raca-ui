import Image from "next/image";
import BigCardOverlay from "../../components/BigCardOverlay";
import BreadCrumb from "../../components/BreadCrumb";
import CallApiFromStrapi from "../../components/CallApiFromStrapi";
import CardOverlay from "../../components/CardOverlay";
import SliderContent from "../../components/SliderContent";
export default function MemberShip({ memberShip }) {
    return (
        <div className="overflow-hidden">
            <style jsx global>{`
  body {
    background: #EBECED;
  }
`}</style>
            <BreadCrumb color="" staticText="Membership" />
            <SliderContent sliderContent={memberShip}/>
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
        populate: ['slider.thumbnail', 'cardOverlay.cardImage']
    };
    const memberShip = await CallApiFromStrapi.getData('member-ship', pagePopulate);

    return {
        props: {
            memberShip: memberShip?.data?.attributes
        }
    };
}