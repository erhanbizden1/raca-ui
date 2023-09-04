import Image from "next/image"
import Link from "next/link"
import { useState ,useEffect} from "react";
import CallApiFromStrapi from "./CallApiFromStrapi";

export default function Footer() {
    const [footerData, setFooterData] = useState(null);
    const getFooterData = async () => {
        const footerPopulate = {
            populate: ['footerMenuItem.subMenuItem', 'socialMedia.icon', 'logo'],
          };
        const footer = await CallApiFromStrapi.getData('footer', footerPopulate).catch((error) => console.log(error));
        setFooterData(footer?.data?.attributes);
    };
    useEffect(() => {
        getFooterData();
    }, []);
    console.log(footerData);
    return (
        <div className="bg-bg-blue text-white py-16 hidden md:block">
            <div className="container flex-none lg:flex items-center justify-between">
                <div className="flex flex-col ">
                    <div className="mb-12">
                        <Image src={`https://res.cloudinary.com/dyuydfuew/image/upload/v1687694132/RACA_Logo_26bb189bd5.svg`} width={108} height={131} alt=""></Image>
                    </div>
                    <span className="text-[20px]">{footerData?.text}</span>
                </div>
                <ul className="flex-none flex item-center text-[20px] mt-[128px] lg:mt-0">
                    {
                        footerData?.footerMenuItem?.map((menuItem, index) => {
                            return (
                                <div key={index} className="mr-16">
                                    <li >
                                        <Link href={menuItem.link ? menuItem.link : ""}>
                                            {menuItem?.text}
                                        </Link>
                                    </li>
                                    {
                                        menuItem?.subMenuItem.map((subItem, subIndex) => {
                                            return (
                                                <li key={subIndex} className="mt-9">
                                                    <Link href={subItem.link ? subItem.link : ""}>
                                                        {subItem?.text}
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </ul>
                <div className="flex item-center mt-[128px] lg:mt-0">
                    {
                        footerData?.socialMedia?.map((socialItem, index) => {
                            return (
                                <div key={index} className="ml-6">
                                    <Link href={socialItem?.link}>
                                        <Image src={socialItem?.icon?.data?.attributes.url} width={54} height={54} alt=""></Image>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}