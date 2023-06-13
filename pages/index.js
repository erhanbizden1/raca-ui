import Image from "next/image";
import CallApiFromStrapi from "../components/CallApiFromStrapi";
import DefaultCard from "../components/DefaultCard";
import CardOverlay from "../components/CardOverlay";
export default function Home({ homeData }) {

  return (
    <>
      <div className="container mb-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:my-[130px] items-center">
          <h1 className={`text-[36px] md:text-[64px]  md:leading-[80px] lg:pl-0 lg:text-[88px] text-blue font-merriweather leading-[54px] lg:leading-[111px]`}>{homeData.title}</h1>
          <div>
            <div className="text-[#000C1F]" dangerouslySetInnerHTML={{ __html: homeData.description }} ></div>
            <button className="px-[73px] bg-blue xl:hover:bg-[#002966] transition-all ease-in-out border-[2px] border-black py-[15px] mt-[36px] relative min-w-[268px] text-white">
              <span className="text-lg transition ease-in-out">Learn More</span>
            </button>
          </div>
        </div>
      </div>
      <Image
        src={`http://localhost:1337${homeData?.thumbnail.data[0].attributes.url}`}
        alt={`Thumbnail`}
        width={511}
        height={100}
        layout="responsive"
        objectFit="contain"
      />
      <section className="container text-black">
        <h1 className="font-merriweather text-[36px] lg:text-[48px] text-center my-[84px] leading-[54px]">{homeData.contentTitle}</h1>
        <div className="flex-none lg:flex gap-[24px] items-center justify-center">
          {
            homeData?.defaultCard.map((cardItem) => {
              return (
                <DefaultCard key={cardItem.id} cardItem={cardItem} />
              )
            })
          }
        </div>
      </section>
      <section className="container my-[104px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[24px] xl:px-[72px]">
          <CardOverlay cardOverlay={homeData.overlayCard} />
        </div>
      </section>
    </>
  )
}
export async function getServerSideProps() {
  const pagePopulate = {
    populate: ['thumbnail', 'defaultCard.cardImage', 'overlayCard.cardImage']
  };
  const homeJson = await CallApiFromStrapi.getData('home', pagePopulate);

  return {
    props: {
      homeData: homeJson?.data?.attributes
    }
  };
}