import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useCallback } from "react";
import CallApiFromStrapi from "./CallApiFromStrapi";
import HamburgerMenu from "./HamburgerMenu";
import classNames from 'classnames';
import { useRouter } from 'next/router'
import Search from "./Search";
export default function Header() {
    const router = useRouter()
    const [headerData, setHeaderData] = useState(null);
    const [sideDrawer, setSideDrawer] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    const toggleSideDrawer = useCallback(() => { drawerToggleClickHandler(); }, []);
    const drawerToggleClickHandler = () => {
        setSideDrawer((prevState) => !prevState);
        setSearchOpen(false)
    };
    const toggleSearch = useCallback(() => { searchClickHandler(); }, [])
    const searchClickHandler = () => {
        setSearchOpen((prevState) => !prevState);
        setSideDrawer(false)
    }
    const getHeaderData = async () => {
        const headerPopulate = {
            populate: ['rightMenuItem.menuItemIcon', 'leftMenuItem.menuItemIcon', 'logo', 'hamburgerMenu']
        };
        const headerData = await CallApiFromStrapi.getData('header', headerPopulate).catch((error) => console.log(error));
        setHeaderData(headerData?.data?.attributes);
    };
    const [headerClass, setHeaderClass] = useState('');
    useEffect(() => {
        getHeaderData();
        var scrollSearch = document.getElementsByClassName("searchScroll");
        scrollSearch.scrollTop = scrollSearch.scrollHeight;

        if (searchOpen) {
            const onScrollHeaderClassHandler = () => {
                if (scrollSearch.scrollY >= 2) {
                    setHeaderClass('fixed z-50 transform animate-slide-bottom is-active');
                } else {
                    setHeaderClass('');
                }
            };
            scrollSearch.addEventListener("scroll", onScrollHeaderClassHandler);
        }

    }, []);
    useEffect(() => {
        if (sideDrawer || searchOpen) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }
    }, [sideDrawer, searchOpen]);
    useEffect(() => {
        if (sideDrawer) {
            setSideDrawer(!sideDrawer);
        }
        if(searchOpen){
            setSearchOpen(!searchOpen);
        }
    }, [router.asPath]);

    return (

        <div className={classNames(sideDrawer || searchOpen ? "text-white" : "text-black ", `container py-6 ${headerClass} text-lg ${router.pathname === "/reciprocal-clubs" || router.pathname === "/about-the-club" || router.pathname === "/accommodation" || router.pathname === "/functions" ? "text-white" : "text-black"} transition-all ease-in-out relative z-10`)}>
            <Search show={searchOpen} />
            <div className="flex justify-between">
                <HamburgerMenu show={sideDrawer} menuData={headerData?.hamburgerMenu} />

                <ul className="hidden items-center xl:flex ">
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
                <ul className="items-center flex">
                    <div className={`hidden xl:flex items-center ml-16 cursor-pointer ${sideDrawer || searchOpen ? "imgFilter" : ""}`} onClick={toggleSearch}>
                        <Image src="http://localhost:1337/uploads/login_9086921e7e.svg" width={13} height={13} alt=""></Image>
                        <li className="pl-[6px]">
                            Search
                        </li>
                    </div>
                    <div className={`hidden xl:flex items-center ml-16 cursor-pointer ${sideDrawer || searchOpen ? "imgFilter" : ""}`}>
                        <Image src="http://localhost:1337/uploads/login_9086921e7e.svg" width={13} height={13} alt=""></Image>
                        <li className="pl-[6px]">
                            Log In
                        </li>
                    </div>
                    <div className={`flex items-center ml-16 cursor-pointer `} onClick={toggleSideDrawer}>
                        <Image src={sideDrawer ? "http://localhost:1337/uploads/close_056bf5ed87.svg" : "http://localhost:1337/uploads/menu_b8b132337f.svg"} width={13} height={13} alt=""></Image>
                        <li className={`pl-[6px] ${sideDrawer || searchOpen ? "text-[#CBB181]" : ""}`}>
                            {sideDrawer || searchOpen ? "Close" : "Menu"}
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    )
}
