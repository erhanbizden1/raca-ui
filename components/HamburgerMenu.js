import Image from "next/image"

export default function HamburgerMenu({ show, menuData }) {
    return (
        <div className={show ? `sidedrawer transform translate-x-0 fixed top-0 right-0 w-full z-[-1] transition-all bg-black-blue duration-500 ease-in-out` : ` fixed top-0 right-0 w-0  z-[5] transform transition-all shadow-lg ease-in-out `}>
            <div className="container flex h-screen">
                <div className="m-auto grid grid-cols-2 gap-10 ">
                    <ul className="font-merriweather text-[#858B94] text-[36px] leading-[54px] lg:ml-[50px]">
                        {
                            menuData?.map((menuItem) => {
                                return (
                                    <li key={menuItem.id}>{menuItem.title}</li>
                                )
                            })
                        }
                    </ul>
                    <ul className="text-[#C2C5C9] text-center leading-[30px] text-[20px] border border-border px-[80px] py-[48px] max-w-[504px] ">
                        <li>Terms & Conditions</li>
                        <li className="mt-[32px] ">Privacy Policy</li>
                        <li className="mt-[32px]">Contact Us</li>
                        <div className="flex items-center justify-center mt-[32px]">
                        <Image src="/insta.svg" width={24} height={24} alt=""  className="mr-[20px]"></Image>
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