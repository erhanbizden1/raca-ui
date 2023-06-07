import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useCallback } from "react";
import CallApiFromStrapi from "./CallApiFromStrapi";
import HamburgerMenu from "./HamburgerMenu";
import classNames from 'classnames';
import { useRouter } from 'next/router'
export default function Header() {
    const router = useRouter()
    const [headerData, setHeaderData] = useState(null);
    const [sideDrawer, setSideDrawer] = useState(false);

    const toggleSideDrawer = useCallback(() => { drawerToggleClickHandler(); }, []);
    const drawerToggleClickHandler = () => {
        setSideDrawer((prevState) => !prevState);

    };

    const getHeaderData = async () => {
        const headerPopulate = {
            populate: ['rightMenuItem.menuItemIcon', 'leftMenuItem.menuItemIcon', 'logo', 'hamburgerMenu']
        };
        const headerData = await CallApiFromStrapi.getData('header', headerPopulate).catch((error) => console.log(error));
        setHeaderData(headerData?.data?.attributes);
    };
    useEffect(() => {
        getHeaderData();
    }, []);
    useEffect(() => {
        if (sideDrawer) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }
    }, [sideDrawer]);
    useEffect(() => {
        if (sideDrawer) {
            setSideDrawer(!sideDrawer);
        }
      }, [router.asPath]);

    return (

        <div className={classNames(sideDrawer ? "text-white" : "text-black ", `container py-6 text-lg 
        ${router.pathname  === "/reciprocal-clubs" || router.pathname  === "/about-the-club" || router.pathname  === "/accommodation" || router.pathname  === "/functions" ? "text-white" : "text-black"}  
        flex justify-between transition-all ease-in-out relative z-10`)}>
            <HamburgerMenu show={sideDrawer} menuData={headerData?.hamburgerMenu} />
            <ul className="hidden items-center xl:flex ">
                {
                    console.log(headerData)
                }
                {
                    headerData?.leftMenuItem.map((menuItem) => {
                        return (
                            <li key={menuItem.id} className={`mr-16 ${menuItem.link === router.asPath ? "pointer-events-none  underline underline-offset-8" : ""}`}>
                                <Link href={menuItem.link}>{menuItem.text}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <Link href="/" className="cursor-pointer">
                <Image src={`http://localhost:1337/uploads/RACA_Logo_b7e06c945c.svg`} width={52} height={63} alt=""></Image>
            </Link>
            <ul className="items-center hidden xl:flex">
                <div className={`flex items-center ml-16 cursor-pointer ${sideDrawer ? "imgFilter": ""}`}>
                <Image src="http://localhost:1337/uploads/login_9086921e7e.svg" width={13} height={13} alt=""></Image>
                    <li className="pl-[6px]">
                        Search
                    </li>
                </div>
                <div className={`flex items-center ml-16 cursor-pointer ${sideDrawer ? "imgFilter": ""}`}>
                    <Image src="http://localhost:1337/uploads/login_9086921e7e.svg" width={13} height={13} alt=""></Image>
                    <li className="pl-[6px]">
                        Log In
                    </li>
                </div>
                <div  className={`flex items-center ml-16 cursor-pointer `} onClick={toggleSideDrawer}>
                    <Image src={sideDrawer ? "http://localhost:1337/uploads/close_056bf5ed87.svg":"http://localhost:1337/uploads/menu_b8b132337f.svg" } width={13} height={13} alt=""></Image>
                    <li className={`pl-[6px] ${sideDrawer ? "text-[#CBB181]": ""}`}>
                        {sideDrawer ? "Close" : "Menu"}
                    </li>
                </div>
            </ul>
        </div>
    )
}
