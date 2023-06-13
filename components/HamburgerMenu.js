import Image from "next/image"
import Link from "next/link"

export default function HamburgerMenu({ show, menuData }) {

    return (
        <div className={show ? `sidedrawer transform translate-x-0 fixed top-0 right-0 w-full z-[-1] transition-all bg-black-blue duration-500 ease-in-out` : ` fixed top-0 right-0 w-0  z-[5] transform transition-all shadow-lg ease-in-out `}>
            <div className="container xl:flex h-screen pt-[100px]">
                <div className="m-auto h-full grid grid-cols-1 xl:grid-cols-2 xl:gap-10 ">
                    <ul className="font-merriweather text-[#C2C5C9] text-center xl:text-left text-[24px] xl:text-[36px] leading-[54px] xl:ml-[50px] ">
                        {
                            menuData?.map((menuItem) => {
                                return (
                                    <Link key={menuItem.id} href={menuItem.link}>
                                        <li className="cursor-pointer hover:text-white transition-all ease-in-out">{menuItem.title}</li>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                    <ul className="flex items-end pb-[24px] xl:hidden">
                        <div className=" w-full">
                            <div className="flex items-center justify-center mt-[32px]">
                                <Image src="/insta.svg" width={24} height={24} alt="" className="mr-[36px]"></Image>
                                <Image src="/facebook.svg" width={24} height={24} alt="" className="mr-[36px]"></Image>
                                <Image src="/linkedin.svg" width={24} height={24} alt=""></Image>
                            </div>
                            <li className="mt-[35px]">
                                <button className="bg-white text-[#002966] py-[14px] w-full text-lg">Follow The Club</button>
                            </li>
                            <div className="flex items-center justify-between pt-[24px]">
                                <li>Terms & Conditions</li>
                                <li>Policies</li>
                            </div>
                        </div>
                    </ul>
                    <ul className="hidden xl:block text-[#C2C5C9] text-center leading-[30px] text-[20px] border border-border px-[80px] py-[48px] max-w-[504px] ">
                        <li>Terms & Conditions</li>
                        <li className="mt-[32px] ">Privacy Policy</li>
                        <li className="mt-[32px]">Contact Us</li>
                        <div className="flex items-center justify-center mt-[32px]">
                            <Image src="/insta.svg" width={24} height={24} alt="" className="mr-[20px]"></Image>
                            <Image src="/facebook.svg" width={24} height={24} alt="" className="mr-[20px]"></Image>
                            <Image src="/linkedin.svg" width={24} height={24} alt=""></Image>
                        </div>
                        <li className="mt-[86px]">
                            <span className="text-white text-[24px]">See our latest posts</span>
                            <p className="my-[24px]">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                            <button className="bg-white text-[#002966] py-[21px] w-full text-lg">Follow The Club</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}