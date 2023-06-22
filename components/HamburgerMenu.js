import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

export default function HamburgerMenu({ show, menuData, hamburgerMenuRight }) {
    const [isShown, setIsShown] = useState(false);
    return (
        <div className={show ? `sidedrawer transform translate-x-0 fixed top-0 right-0 w-full z-[-1] transition-all bg-[#1E1E1E] duration-500 ease-in-out` : ` fixed top-0 right-0 w-0  z-[5] transform transition-all shadow-lg ease-in-out `}>
            <div className="container xl:flex h-screen pt-[100px] lg:pt-0">
                <div className="m-auto h-full grid grid-cols-1 xl:grid-cols-2 xl:gap-10 items-center pt-[50px] menuItemList">
                    <ul className="font-merriweather text-[#C2C5C9] text-center xl:text-left text-[24px] xl:text-[36px] leading-[54px] xl:ml-[50px] ">
                        {
                            menuData?.map((menuItem, index) => {
                                if (index === 0) {
                                    return (
                                        <Link key={menuItem.id} href={menuItem.link} className="hover:text-[white]" >
                                            <div className="relative group hover:text-[white]"
                                                onMouseEnter={() => setIsShown(true)}
                                                onMouseLeave={() => setIsShown(false)}
                                                href={menuItem.link}>
                                                <li className="cursor-pointer transition-all ease-in-out ">{menuItem.title}</li>
                                                <div className="border-t w-[80px] absolute top-1/2 left-[-30%] group-hover:left-[-15%] opacity-0 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 transition-all ease-in-out duration-700"></div>
                                            </div>
                                        </Link>
                                    )
                                }
                                if (menuItem.link) {
                                    return (
                                        <Link key={menuItem.id} href={menuItem.link} className="hover:text-[white]" >
                                            <li className="cursor-pointer transition-all ease-in-out ">{menuItem.title}</li>
                                        </Link>
                                    )
                                }

                            })
                        }
                    </ul>
                    <ul className="flex items-end pb-[24px] xl:hidden">
                        <div className=" w-full">
                            <div className="flex items-center justify-center mt-[32px]">
                                {
                                    hamburgerMenuRight?.socialMedia.map((socialItem) => {
                                        return (
                                            <div key={socialItem.id} className="mr-[36px] last:mr-0">
                                                <Link href={socialItem.link} >
                                                    <Image src={`http://pure-hamlet-08520-67aeef587ee8.herokuapp.com${socialItem.icon.data.attributes.url}`} width={24} height={24} alt="" ></Image>
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <Link href={`${hamburgerMenuRight?.buttonLink}`}>
                                <li className="mt-[35px]">
                                    <button className="bg-white text-[#002966] py-[14px] w-full text-lg">{hamburgerMenuRight?.buttonText}</button>
                                </li>
                            </Link>
                            <div className="flex items-center justify-between pt-[24px]">
                                {
                                    hamburgerMenuRight?.menuItem.map((mobMenuItem) => {
                                        return (

                                            <li key={mobMenuItem.id}>
                                                <Link href={mobMenuItem.link} >
                                                    {mobMenuItem.title}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </ul>

                    {
                        !isShown ?
                            <ul className="hidden xl:block text-[#C2C5C9] text-center leading-[30px] text-[20px] border border-border px-[80px] py-[38px] max-w-[504px] h-fit hamburgerRightSide transition-all duration-700 ease-in-out min-h-[504px]">
                                {
                                    hamburgerMenuRight?.menuItem.map((hamMenuItem) => {
                                        return (

                                            <li className="mt-[22px] first:mt-0" key={hamMenuItem.id}>
                                                <Link href={hamMenuItem.link} >
                                                    {hamMenuItem.title}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                                <div className="flex items-center justify-center mt-[32px]">
                                    {
                                        hamburgerMenuRight?.socialMedia.map((socialItem) => {
                                            return (
                                                <div key={socialItem.id} className="mr-[20px] last:mr-0">
                                                    <Link href={socialItem.link} >
                                                        <Image src={`http://pure-hamlet-08520-67aeef587ee8.herokuapp.com${socialItem.icon.data.attributes.url}`} width={24} height={24} alt="" ></Image>
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <li className="mt-[26px]">
                                    <span className="text-white text-[24px]">{hamburgerMenuRight?.title}</span>
                                    <p className="my-[24px]">{hamburgerMenuRight?.desc}</p>
                                    <Link href={`${hamburgerMenuRight?.buttonLink}`}>
                                        <button className="bg-white text-[#002966] py-[21px] w-full text-lg max-w-[342px]">{hamburgerMenuRight?.buttonText}</button>
                                    </Link>
                                </li>
                            </ul>
                            :
                            <ul className="hidden xl:block text-[#C2C5C9] text-center leading-[30px] text-[20px] border border-border transition-all duration-700 ease-in-out px-[5px] py-[5px] min-w-[504px] h-fit hamburgerRightSide relative min-h-[504px">
                                <Image src={`http://pure-hamlet-08520-67aeef587ee8.herokuapp.com${hamburgerMenuRight.hoverImg.data.attributes.url}`} layout="responsive" width={504} height={563} objectFit="contain" alt="" ></Image>
                            </ul>

                    }

                </div>
            </div>
        </div>
    )
}