import CallApiFromStrapi from "../components/CallApiFromStrapi";

export default function Home({homeData}) {
  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-32 my-[130px]">
          <h1 className={`text-[88px] text-blue font-merriweather leading-[111px]`}>{homeData.title}</h1>
          <div className="" dangerouslySetInnerHTML={{ __html: homeData.desc }} ></div>
      </div>
    </div>
  )
}
export async function getServerSideProps(){
  const pagePopulate = {
    populate: ['thumbnail']
  };
  const homeJson = await CallApiFromStrapi.getData('home', pagePopulate);
  
  return{
    props:{
      homeData:homeJson?.data?.attributes
    }
  };
}