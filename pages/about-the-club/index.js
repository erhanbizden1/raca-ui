
import BreadCrumb from "../../components/BreadCrumb";
import CallApiFromStrapi from "../../components/CallApiFromStrapi";
import CardOverlay from "../../components/CardOverlay";
import SliderContent from "../../components/SliderContent";

export default function About({ about }) {
  return (
    <div className="overflow-hidden">
      <style jsx global>{`
  body {
    background: #000C1F;
  }
`}</style>
      <BreadCrumb color="#FFFFFF" staticText="The Club" />
      <SliderContent sliderContent={about} color="white" />
      <section className=" text-black bg-white py-[48px] lg:py-[124px]">
        <div className="lg:px-[138px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-[24px] items-start justify-center container">
          <CardOverlay cardOverlay={about?.overlayCard} centerText={true} />
        </div>
      </section>
    </div>
  )
}
export async function getServerSideProps() {
  const pagePopulate = {
    populate: ['slider.thumbnail', 'overlayCard.cardImage']
  };
  const about = await CallApiFromStrapi.getData('about-the-club', pagePopulate);

  return {
    props: {
      about: about?.data?.attributes
    }
  };
}