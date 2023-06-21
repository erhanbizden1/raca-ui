import CallApiFromStrapi from "../components/CallApiFromStrapi";
import { FacebookEmbed } from 'react-social-media-embed';
import { InstagramEmbed } from 'react-social-media-embed';
import { LinkedInEmbed } from 'react-social-media-embed';
import BreadCrumb from '../components/BreadCrumb'
export default function FollowTheClub({ follow }) {
  console.log(follow)
  return (
    <>
      <div className="mb-[100px]">
        <BreadCrumb />
      </div>
      <div className="container pb-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[12px]">
          {
            follow?.embedPostUrl.map((embedItem) => {
              if (embedItem.Social === "Facebook") {
                return (
                  <div key={embedItem.id} className="w-full">
                    <FacebookEmbed url={embedItem?.embedPostUrl} />
                  </div>
                )
              }
              if (embedItem.Social === "İnstagram") {
                return (
                  <div key={embedItem.id} className="w-full">
                    <InstagramEmbed url={embedItem?.embedPostUrl} />
                  </div>
                )
              }
              if (embedItem.Social === "LinkEdin") {
                return (
                  <div key={embedItem.id} className="w-full">
                    <LinkedInEmbed
                      url={embedItem?.embedPostUrl}
                    />
                  </div>
                )
              }
            })
          }
        </div>
      </div>
    </>


  )
}
export async function getServerSideProps() {
  const pagePopulate = {
    populate: ['embedPostUrl.social']
  };
  const follow = await CallApiFromStrapi.getData('follow-the-club', pagePopulate);

  return {
    props: {
      follow: follow?.data?.attributes
    }
  };
}