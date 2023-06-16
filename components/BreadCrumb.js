import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
export default function BreadCrumb({ staticText, secondText, thirdText, forthText, color }) {
  const router = useRouter();
  let currentLink = '';
  const crumbs = router?.asPath?.split("/").filter((crumb) => crumb !== '').map((crumb, index) => {
    currentLink += `/${!crumb.match('^[0-9]*$') ? crumb : ""}`;
    crumb = crumb.replace(/-/g, " ");
    crumb = crumb.split(" ");
    for (var i = 0; i < crumb.length; i++) {
      crumb[i] = crumb[i].charAt(0).toUpperCase() + crumb[i].slice(1);
    }
    crumb = crumb.join(" ");

    return (
      <div key={crumb} className={`mr-5 text-sm flex items-center hover:text-lava whitespace-nowrap ${currentLink === router.asPath ? "pointer-events-none underline underline-offset-8	ml-[-10px]" : ""}`}>
        <Link href={currentLink} >
          {index === 0 && staticText ? staticText : index === 1 && secondText ? secondText : index === 2 && thirdText ? thirdText : index === 3 && forthText ? forthText : crumb}
        </Link>
        {currentLink !== router.asPath ?
          <div className="ml-[10px]">
            {'>'}
          </div>
          : ""}
      </div>
    );
  });
  return (
    <Fragment>
      <div className="container">
        <div className={`flex items-center overflow-auto py-[25px] !text-[${color}] text-sm`}>
          <div className={`cursor-pointer hover:text-lava mr-5 flex items-center `}>
            <Link href="/">
              HomaPage
            </Link>
            <div className="ml-[10px]">
              {">"}
            </div>
          </div>
          <div className="flex items-center">
          {crumbs}
          </div>
          
        </div>
      </div>
    </Fragment>
  );
}