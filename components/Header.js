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
            populate: ['leftMenuItem.menuItemIcon', 'logo', 'hamburgerMenu','hamburgerMenuRight.menuItem','hamburgerMenuRight.socialMedia.icon','hamburgerMenuRight.hoverImg']
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

        <div className={classNames(sideDrawer || searchOpen ? "text-white" : "text-black ", `container py-6 ${headerClass} text-[20px] ${router.pathname === "/reciprocal-clubs" || router.pathname === "/about-the-club" || router.pathname === "/accommodation" || router.pathname === "/functions" ? "text-white" : "text-black"} transition-all ease-in-out relative z-10`)}>
            <Search show={searchOpen} />
            <div className="flex justify-between">
                <HamburgerMenu show={sideDrawer} menuData={headerData?.hamburgerMenu} hamburgerMenuRight={headerData?.hamburgerMenuRight}/>
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
                    <Image src={`http://pure-hamlet-08520-67aeef587ee8.herokuapp.com/uploads/RACA_Logo_b7e06c945c.svg`} width={72} height={83} alt=""></Image>
                </Link>
                <ul className="items-center flex">
                    <div className={`hidden xl:flex items-center ml-16 cursor-pointer ${sideDrawer || searchOpen ? "imgFilter" : ""} ${router.pathname === "/reciprocal-clubs" || router.pathname === "/about-the-club" || router.pathname === "/accommodation" || router.pathname === "/functions" ? "imgFilter" : ""}`} onClick={toggleSearch}>
                        <Image src="/search.svg" width={20} height={20} alt=""></Image>
                        <li className="pl-[6px]">
                            Search
                        </li>
                    </div>
                    <Link href="/log-in">
                    <div className={`hidden xl:flex items-center ml-16 cursor-pointer ${sideDrawer || searchOpen ? "imgFilter" : ""} ${router.pathname === "/reciprocal-clubs" || router.pathname === "/about-the-club" || router.pathname === "/accommodation" || router.pathname === "/functions" ? "imgFilter" : ""}`}>
                    
                        <Image src="http://pure-hamlet-08520-67aeef587ee8.herokuapp.com/uploads/login_9086921e7e.svg" width={20} height={20} alt=""></Image>
                        <li className="pl-[6px]">
                            Log In
                        </li>
                        
                    </div>
                    </Link>
                    <div className={`flex items-center ml-16 cursor-pointer ${router.pathname === "/reciprocal-clubs" || router.pathname === "/about-the-club" || router.pathname === "/accommodation" || router.pathname === "/functions" ? "imgFilter" : ""}`} onClick={searchOpen ? toggleSearch :toggleSideDrawer}>
                        <Image src={sideDrawer || searchOpen ? "http://pure-hamlet-08520-67aeef587ee8.herokuapp.com/uploads/close_056bf5ed87.svg" : "http://pure-hamlet-08520-67aeef587ee8.herokuapp.com/uploads/menu_b8b132337f.svg"} width={20} height={20} alt=""></Image>
                        <li className={`pl-[6px] ${sideDrawer || searchOpen ? "text-[#CBB181]" : ""}`}>
                            {sideDrawer || searchOpen ? "Close" : "Menu"}
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    )
}
