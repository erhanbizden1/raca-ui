import Image from "next/image";
import Link from "next/link";
import BreadCrumb from "../../components/BreadCrumb";
import CallApiFromStrapi from "../../components/CallApiFromStrapi";
import CardOverlay from "../../components/CardOverlay";

export default function About({ about }) {
  return (
    <>
      <style jsx global>{`
  body {
    background: #000C1F;
  }
`}</style>
      <BreadCrumb color="#EBECED" staticText="The Club" />
      <div className="container mb-[100px]">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:my-[130px] items-start">
          <div className="order-last xl:order-first">
            <h1 className={`text-[36px] md:text-[64px] mb-[28px]  md:leading-[80px] font-bold lg:pl-0 lg:text-[88px] text-[#EBECED] font-merriweather leading-[54px] lg:leading-[111px]`}>{about.title}</h1>
            <div>
              <div className="text-[#C2C5C9] font-[500] text-lg" dangerouslySetInnerHTML={{ __html: about.description }} ></div>
            </div>
          </div>
          <div className="relative">
            <div className="border border-border absolute left-0 top-0 w-full h-full scale-[1.03] scale-y-[1.05]"></div>
            <Image src={`http://localhost:1337${about?.thumbnail?.data?.attributes?.url}`} width={13} layout="responsive" height={13} alt=""></Image>
          </div>
        </div>
      </div>
      <section className=" text-black bg-white py-[48px] lg:py-[124px]">
        <div className="lg:px-[138px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-[24px] items-start justify-center container">
          <CardOverlay cardOverlay={about?.overlayCard} centerText={true}/>
        </div>
      </section>
    </>
  )
}
export async function getServerSideProps() {
  const pagePopulate = {
    populate: ['thumbnail', 'overlayCard.cardImage']
  };
  const about = await CallApiFromStrapi.getData('about-the-club', pagePopulate);

  return {
    props: {
      about: about?.data?.attributes
    }
  };
}