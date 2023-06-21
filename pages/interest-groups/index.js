
import CallApiFromStrapi from "../../components/CallApiFromStrapi";
import BreadCrumb from "../../components/BreadCrumb";
import BigCardOverlay from "../../components/BigCardOverlay";
import CardOverlay from "../../components/CardOverlay";
import SliderContent from "../../components/SliderContent";
export default function InterestGroup({ interestGroup }) {
    return (
        <div className="overflow-hidden">
            <style jsx global>{`
  body {
    background: #EBECED;
  }
`}</style>
            <BreadCrumb color="#000C1F" staticText="Interest Groups" />
            <SliderContent sliderContent={interestGroup}/>
            <section className="py-[132px]" style={{ background: "white" }}>
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[24px] xl:px-[72px]">
                        <CardOverlay cardOverlay={interestGroup.cardOverlay}/>
                    </div>
                    <div className="xl:px-[72px] mt-[24px]">
                        <BigCardOverlay cardOverlay={interestGroup.cardOverlay}/>
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
    const interestGroup = await CallApiFromStrapi.getData('interest-group', pagePopulate);

    return {
        props: {
            interestGroup: interestGroup?.data?.attributes
        }
    };
}