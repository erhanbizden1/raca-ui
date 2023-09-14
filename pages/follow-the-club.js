import CallApiFromStrapi from "../components/CallApiFromStrapi";
import { FacebookEmbed } from 'react-social-media-embed';
import { InstagramEmbed } from 'react-social-media-embed';
import { LinkedInEmbed } from 'react-social-media-embed';
import BreadCrumb from '../components/BreadCrumb'
import Head from "next/head";
export default function FollowTheClub({ follow }) {
  return (
    <>
      <Head>
        <title>Royal Automobile Club of Australia - Follow The Club</title>
        <meta
          name="description"
          content="Follow the club "
          key="desc"
        />
      </Head>
      <div className="mb-[100px]">
        <BreadCrumb />
      </div>
      <div className="container pb-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[12px]">
          <InstagramEmbed url={follow?.instagram} style={{ width: "100%" }} />
          <FacebookEmbed url={follow?.facebook} style={{ width: "100%" }} />
        </div>
      </div>
    </>


  )
}
export async function getServerSideProps() {
  const follow = await CallApiFromStrapi.getData('follow-the-club');

  return {
    props: {
      follow: follow?.data?.attributes
    }
  };
}