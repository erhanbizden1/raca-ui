import { withCoalescedInvoke } from "next/dist/lib/coalesced-function";
import Image from "next/image"
import Link from "next/link"
import { useState,useEffect } from "react";
import CallApiFromStrapi from "./CallApiFromStrapi";

export default function Header(){
    const [headerData, setHeaderData] = useState(null);
    const getHeaderData = async() => {
        const headerPopulate = {
            populate: ['rightMenuItem.menuItemIcon', 'leftMenuItem.menuItemIcon', 'logo']
        };
        const headerData = await CallApiFromStrapi.getData('header', headerPopulate).catch((error) => console.log(error));
        setHeaderData(headerData?.data?.attributes);
      };
      useEffect(() => {
        getHeaderData();
      }, []);
    return(
        <div className="container py-6 text-lg text-black flex justify-between">
            <ul className="flex items-center">
                {
                    headerData?.leftMenuItem.map((menuItem, index) => {
                        return (
                            <li key={index} className="mr-16">
                                <Link href={menuItem.link}>{menuItem.text}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <Link href="/" className="cursor-pointer">
                <Image src={`http://localhost:1337/uploads/RACA_Logo_b7e06c945c.svg`} width={52} height={63} alt=""></Image>  
            </Link>
            <ul className="flex items-center">
                {
                    headerData?.rightMenuItem.map((rightItem, index) => {
                        return (
                            <div key={index} className="flex items-center ml-16">
                                <Image src={`http://localhost:1337${rightItem?.menuItemIcon?.data?.attributes?.url}`} width={13} height={13} alt=""></Image> 
                                <li className="pl-[6px]">
                                    {rightItem.text}
                                </li>
                            </div>

                        )
                    })
                }
            </ul>
        </div>
    )
}