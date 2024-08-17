import { useRef } from 'react';
import {
    StackedCarousel,
    ResponsiveContainer,
  } from "react-stacked-center-carousel";

function CardCarousel ({data}) {
    const ref = useRef();

    return (
        <ResponsiveContainer
            carouselRef={ref}
            render={(parentWidth, carouselRef) => {
                let currentVisibleSlide = 5;
                if (parentWidth <= 1440) currentVisibleSlide = 5;
                if (parentWidth <= 1080) currentVisibleSlide = 3;
                return (
                    <StackedCarousel
                        ref={carouselRef}
                        slideComponent={({ data, dataIndex }) => (
                            <div className="relative m-auto w-full aspect-video cursor-grabbing">
                                <div className="absolute h-1/2 bottom-0 px-4 py-4 text-white w-full rounded-xl">
                                    <div className="absolute left-5 bottom-5 z-10">
                                        <h1 className=" font-semibold">{data[dataIndex].judul} </h1>
                                        <p className="">{data[dataIndex].deskripsi} </p>
                                    </div>
                                    <div className="absolute inset-0 z-0 from-black bg-gradient-to-t h-full object-cover rounded-3xl"/>
                                </div>
                                <div className="aspect-video rounded-3xl">
                                    <img src={data[dataIndex].gambar} alt={data[dataIndex].altGambar} className="aspect-video w-full rounded-3xl object-cover"/>
                                </div>
                            </div>
                        )}
                        slideWidth={parentWidth < 800 ? parentWidth - 100 : 750}
                        carouselWidth={parentWidth}
                        data={data}
                        currentVisibleSlide={currentVisibleSlide}
                        maxVisibleSlide={5}
                        fadeDistance={0.5}
                        customScales={[0.8, 0.6, 0.3, 0]}
                    />
                );
            }}
        />
    );
};

export default CardCarousel;
