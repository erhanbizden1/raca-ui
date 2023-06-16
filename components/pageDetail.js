import BreadCrumb from "./BreadCrumb";
import SliderContent from "./SliderContent"
export default function DetailPage({ detailPage }) {
    return (
        <div className="overflow-hidden">
            <style jsx global>{`
  body {
    background: #EBECED;
  }
`}</style>
            <BreadCrumb />
            <SliderContent sliderContent={detailPage} />
            {
                detailPage.pageDesc ?
                    <div className="bg-[white] py-[84px]">
                        <div className="container">
                            <span dangerouslySetInnerHTML={{ __html: detailPage.pageDesc }}></span>
                        </div>
                    </div>
                    :
                    ""
            }
        </div>
    )
}