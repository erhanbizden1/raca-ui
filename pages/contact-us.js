import Image from "next/image";
import CallApiFromStrapi from "../components/CallApiFromStrapi";
import * as Accordion from '@radix-ui/react-accordion';
import React from 'react';
import classNames from 'classnames';
import BreadCrumb from "../components/BreadCrumb";

export default function ContactUs({ contactUs }) {
    const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
        <Accordion.Header className="AccordionHeader bg-[#CBB181] w-full ">
            <Accordion.Trigger
                className={classNames(' AccordionTrigger flex items-center justify-between w-full py-[26px] px-[24px] mb-[24px]', className)}
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
        <>
            <BreadCrumb color="" staticText="Direction and Contacts" />
            <div className="container mb-[100px]">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:my-[50px] items-start">
                    <div>
                        <h1 className={`text-[36px] md:text-[64px] font-bold md:leading-[80px] lg:pl-0 lg:text-[88px] text-[#000C1F] font-merriweather leading-[54px] lg:leading-[111px]`}>{contactUs.title}</h1>
                        <div>
                            <div className="!text-[#3D4655] font-[500] text-lg" dangerouslySetInnerHTML={{ __html: contactUs.description }} ></div>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <Image src={contactUs?.thumbnail?.data?.attributes?.url} width={13} layout="responsive" height={13} alt=""></Image>
                        </div>
                        <h2 className="pt-[48px] mb-[24px] font-bold text-[28px] text-[#000C1F]">
                            {contactUs.accordionTitle}
                        </h2>
                        <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
                            {
                                contactUs?.accordion.map((accItem) => {
                                    return (
                                        <Accordion.Item key={accItem?.id} className="AccordionItem overflow-hidden w-full text-[20px]" value={`item-${accItem.id}`}>
                                            <AccordionTrigger>{accItem?.title}</AccordionTrigger>
                                            <AccordionContent ><span dangerouslySetInnerHTML={{ __html: accItem.description }} className="text-lg"></span></AccordionContent>
                                        </Accordion.Item>
                                    )
                                })
                            }
                        </Accordion.Root>
                    </div>
                </div>

            </div>
        </>

    )
}
export async function getServerSideProps() {
    const pagePopulate = {
        populate: ['thumbnail', 'accordion']
    };
    const contactUs = await CallApiFromStrapi.getData('contact-us', pagePopulate);

    return {
        props: {
            contactUs: contactUs?.data?.attributes
        }
    };
}