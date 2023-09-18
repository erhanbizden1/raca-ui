import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import * as Accordion from '@radix-ui/react-accordion';
import React from 'react';
import classNames from 'classnames';

import { Pagination, Navigation } from "swiper";
import CallApiFromStrapi from "../../components/CallApiFromStrapi";
import Link from "next/link";
import Image from "next/image";
import SliderContent from "../../components/SliderContent";
import BreadCrumb from "../../components/BreadCrumb";
export default function FındReciprocalClub({ find }) {
    const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
        <Accordion.Header className="AccordionHeader bg-[#CBB181] w-full ">
            <Accordion.Trigger
                className={classNames(' AccordionTrigger flex items-center justify-between w-full py-[17px] px-[24px] mb-[24px]', className)}
                {...props}
                ref={forwardedRef}
            >
                {children}
                <div className="relative">
                    <Image src="/next-arrow.svg" width={9} height={16} alt=""></Image>
                </div>
            </Accordion.Trigger>
        </Accordion.Header>
    ));
    const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
        <Accordion.Content
            className={classNames('AccordionContent ', className)}
            {...props}
            ref={forwardedRef}
        >
            <div className="AccordionContentText">{children}</div>
        </Accordion.Content>
    ));
    return (
        <div className="overflow-hidden">
            <style jsx global>{`
  body {
    background: #EBECED;
  }
`}</style>
            <BreadCrumb />
            <SliderContent sliderContent={find} />
            <div className="bg-[white] py-[84px]">
                <div className="container">
                    {
                        find.pageDesc ?
                            <div>
                                <div className="container">
                                    <span dangerouslySetInnerHTML={{ __html: find.pageDesc }}></span>
                                </div>
                            </div>
                            :
                            ""
                    }
                    <Accordion.Root className="AccordionRoot mt-[150px]" type="single" defaultValue="item-1" collapsible>
                        {
                            find?.accordion ?
                                find?.accordion.map((accItem) => {
                                    return (
                                        <Accordion.Item key={accItem?.id} className="AccordionItem overflow-hidden w-full text-[20px]" value={`item-${accItem.id}`}>
                                            <AccordionTrigger>{accItem?.title}</AccordionTrigger>
                                            <AccordionContent ><span dangerouslySetInnerHTML={{ __html: accItem.description }} className="text-lg"></span></AccordionContent>
                                        </Accordion.Item>
                                    )
                                }) : ""
                        }
                    </Accordion.Root>
                </div>
            </div>
        </div>

    )
}
export async function getServerSideProps() {
    const pagePopulate = {
        populate: ['slider.thumbnail', 'accordion']
    };
    const find = await CallApiFromStrapi.getData('reciprocal-clubs-guest', pagePopulate);

    return {
        props: {
            find: find?.data?.attributes
        }
    };
}