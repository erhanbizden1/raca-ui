import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import CallApiFromStrapi from "./CallApiFromStrapi";
import { AutoComplete } from 'primereact/autocomplete';
import Head from 'next/head';
function Search({ show }) {
    const [searchData, setSearchData] = useState(null);
    const [selectedCountry1, setSelectedCountry1] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);
    const [searchValueClear, setSearchValueClear] = useState(false);
    const searchCountry = (event) => {
        setTimeout(() => {
            let _filteredCountries;
            if (!event.query.trim().length) {
                _filteredCountries = [...props.searchData.defaultCard];
            }
            else {
                _filteredCountries = searchData.defaultCard.filter((country) => {
                    return country.title.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }
            setFilteredCountries(_filteredCountries);
        }, 250);
    };
    const searchValClick = (title) => {
        setSearchValueClear(title)
        setTimeout(()=> {
            location.reload();
        },500)
        
    }
    const itemTemplate = (item) => {
        return (
            <div className="country-item p-[10px] bg-[white] transition-all ease-in-out duration-500 hover:bg-[rgb(204,204,204)]" onClick={()=> {searchValClick(item.title)}}>
                <Link href={`/club-news${item.buttonSlug}`}>
                    <div>{item.title}</div>
                </Link>
            </div>
        );
    };
    const getHeaderData = async () => {
        const pagePopulate = {
            populate: ['thumbnail', 'defaultCard.cardImage']
        };
        const searchJson = await CallApiFromStrapi.getData('club-new', pagePopulate);
        setSearchData(searchJson?.data?.attributes);
    };
    useEffect(() => {
        getHeaderData();
    
    }, []);

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/primereact/resources/primereact.min.css" />
            </Head>
            <div className={show ? `sidedrawer transform translate-x-0 fixed top-0 right-0 w-full z-[-1] transition-all bg-[#1E1E1E] duration-500 ease-in-out` : ` fixed top-0 right-0 w-0  z-[5] transform transition-all shadow-lg ease-in-out `}>

                <div className="container h-screen pt-[100px] overflow-y-auto searchScroll">
                    <div className={`flex items-center overflow-auto py-[25px] text-sm`}>
                        <div className={`cursor-pointer hover:text-lava mr-5 flex items-center `}>
                            <Link href="/">
                                HomaPage
                            </Link>
                            <div className="ml-[10px]">
                                {">"}
                            </div>
                        </div>
                        <div className="flex items-center underline underline-offset-8">
                            Search
                        </div>
                    </div>
                    <div className="px-[154px] mt-[59px]">
                        <div className="grid grid-cols-8 items-center gap-4">
                            <div className="flex flex-col w-full col-span-6 ">
                                <div className="relative">
                                    <Image
                                        src="/search.svg"
                                        alt={"search"}
                                        width={17}
                                        height={17}
                                        className="top-1/2 absolute z-10 -translate-y-1/2 left-[27px]"
                                    />
                                    <AutoComplete value={searchValueClear ? searchValueClear :selectedCountry1 } suggestions={filteredCountries} completeMethod={searchCountry} itemTemplate={itemTemplate} field="name" onChange={(e) => setSelectedCountry1(e.value)} aria-label="Countries" dropdownAriaLabel="Select Country" />
                                </div>
                            </div>
                            <button className="bg-[#003A8F] w-full text-center py-[14px] text-white text-lg col-span-2" type="submit">LOG IN</button>
                        </div>
                        <div className="flex items-center justify-between">
                            <h2 className="font-merriweather text-white mt-[48px] mb-[36px] text-[48px]">Latest News</h2>
                            <Link href="/club-news">
                                <span className="underline underline-offset-8 text-white text-lg">SEE ALL NEWS</span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-[24px] justify-center ">
                            {
                                searchData?.defaultCard.slice(0, 3).map((cardItem) => {
                                    return (
                                        <div key={cardItem.id} className="max-w-[504px] relative lg:mt-0 m-auto lg:m-0 " id="cardItem">
                                            <div className="relative ">
                                                <div className="border border-border absolute left-0 top-0 w-full h-full scale-[0.96] "></div>
                                                <Image
                                                    src={`http://localhost:1337${cardItem?.cardImage.data.attributes.url}`}
                                                    alt={`Card Image`}
                                                    width={372}
                                                    height={247}
                                                    className="min-h-[267px] "
                                                    objectFit="cover"
                                                    layout="responsive"
                                                />
                                            </div>
                                            <div className="px-[5px] pt-[24px] flex flex-col justify-between">
                                                <div>
                                                    <div className="text-white font-bold text-[16px] descriptionBox">{cardItem.title}</div>
                                                </div>
                                                <Link href={`/club-news/${cardItem.buttonSlug}`}>
                                                {
                                                    cardItem.seeDetailsActive ?
                                                        <div className="flex items-center  mt-[36px] ">
                                                            <button className="group xl:min-w-[280px] mt- lg:px-[20px] border-[2px] mr-[24px] border-[#C2C5C9] py-[15px] flex items-center relative discoverButton search w-full lg:w-max justify-center xl:hover:bg-black xl:hover:text-white">
                                                                <span className="mr-[12px] text-lg transition ease-in-out">{cardItem.buttonText}</span>
                                                                <Image
                                                                    src="/rightArrow.svg"
                                                                    alt={"arrow"}
                                                                    width={19}
                                                                    height={13}
                                                                    className="group-hover:-translate-x-[120px] translate-x-0 transition ease-in-out"
                                                                />
                                                            </button>
                                                            <span className="text-lg underline">SEE DETAILS</span>
                                                        </div> :
                                                        <button className="group mt-[36px] lg:px-[20px] border-[2px] border-[#C2C5C9] py-[15px] flex items-center relative discoverButton search !w-full lg:w-max justify-center xl:hover:bg-black xl:hover:text-white">
                                                            <span className="mr-[12px] text-lg transition ease-in-out">{cardItem.buttonText}</span>
                                                            <Image
                                                                src="/rightArrow.svg"
                                                                alt={"arrow"}
                                                                width={19}
                                                                height={13}
                                                                className="group-hover:-translate-x-[120px] translate-x-0 transition ease-in-out"
                                                            />
                                                        </button>

                                                }
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Search