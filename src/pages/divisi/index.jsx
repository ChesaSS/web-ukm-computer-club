import { useNavigate, useParams } from "react-router-dom";
import divisiData from "../../data/divisi/data";
import Button from "../../component/Button";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Parallax } from 'swiper/modules';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DivisiPage() {
    const {divisi} = useParams();
    const navigate = useNavigate();
    const divisiDetail = divisiData.find((data) => data.singkatan === divisi);
    return (
        divisiDetail ? (
            <>
                <div className="absolute inset-0 -z-20 bg-ornamen"/>

                <section className="py-8 md:pb-20 relative h-screen">
                    <div className="w-screen h-screen relative">
                        <div className="absolute inset-0 -z-10 from-black bg-gradient-to-r w-screen h-screen rounded-bl-[3rem] rounded-br-[3rem]"/>
                        <img src={divisiDetail.imgCover} className="w-full h-full object-cover absolute inset-0 -z-20 rounded-bl-[3rem] rounded-br-[3rem]" />
                        <div className="grid grid-cols-2 m-auto border h-screen">
                            <div className="kiri m-auto ps-10 text-white flex flex-col gap-8" data-aos="fade-up">
                                <div className="w-fit px-8 py-1 rounded-full border-2">
                                    <h1 className="font-semibold w-1/2">Divisi</h1>
                                </div>
                                <h1 className="font-bold text-6xl w-1/2">{divisiDetail.divisi}</h1>
                                <p>{divisiDetail.deskripsi}</p>
                                <Button variant="secondary" href="#materi" text="Pelajari Lebih Lanjut"/>
                            </div>
                            <div className="kanan m-auto h-3/5 aspect-video relative" data-aos="fade-up">
                                <img src={divisiDetail.img} className="absolute top-1/2 -translate-y-1/2 left-20 border-2 w-full rounded-3xl"/>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="md:pt-20 relative h-screen">
                    <div className="p-2 w-konten mx-auto" data-aos="fade-up">
                        <h1 className="text-center font-bold text-xl md:text-6xl md:w-3/5 m-auto my-10">Kegiatan Divisi</h1>
                        <p className="text-center font-normal text-sm md:text-base mb-10 w-full md:w-3/5 md:mx-auto">{divisiDetail.deskripsiKegiatan}</p>
                    </div>
                    <div className="w-2/4 absolute left-1/2 -translate-x-1/2">
                        <Swiper
                            effect={'coverflow'}
                            autoplay={{ delay: 3000, disableOnInteraction: false}}
                            grabCursor={true}
                            centeredSlides={true}
                            loop={true}
                            slidesPerView={'auto'}
                            parallax={true}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 30,
                                depth: 180,
                                modifier: 6,
                                slideShadows: true,
                                scale: 1,
                            }}
                            modules={[EffectCoverflow, Autoplay, Parallax]}
                            className="relative m-auto w-2/4 aspect-video border"
                        >
                        {
                            divisiDetail.itemsKegiatan.map((item) => (
                                <SwiperSlide key={item.id} className="w-full">
                                    <div className="absolute bottom-0 px-4 py-4 text-white w-full rounded-xl">
                                        <div className="absolute inset-0 from-black bg-gradient-to-t object-cover rounded-xl"/>
                                        <h1 className="right-0 font-semibold" data-swiper-parallax="180%" data-swiper-parallax-opacity="0" data-swiper-parallax-x="-20" data-swiper-parallax-duration="1000">{item.judul}</h1>
                                        <p className="right-0" data-swiper-parallax="200%" data-swiper-parallax-opacity="0" data-swiper-parallax-x="-20" data-swiper-parallax-duration="1000">{item.deskripsi}</p>
                                    </div>
                                    <div className="aspect-video rounded-xl">
                                        <img src={item.gambar} alt={item.altGambar} className="aspect-video w-full rounded-xl object-cover"/>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                        </Swiper>
                    </div>
                </section>

                <section className="md:pt-32 relative pb-40" id="materi">
                    <div className="absolute inset-0 -z-10 -top-40 rounded-tl-[3rem] rounded-tr-[3rem]"
                        style={{
                        backgroundColor: "#1E1E1E",
                        }} >
                    </div>
                    <div className="text-white p-2 w-konten mx-auto" data-aos="fade-up">
                        <h1 className="text-center font-bold text-xl md:text-6xl md:w-3/5 m-auto mb-10">Materi Ajar</h1>
                        <p className="text-center font-normal text-sm md:text-base mb-10 w-full md:w-3/5 md:mx-auto">{divisiDetail.deskripsiMateri}</p>
                    </div>
                    <div className="text-white p-2 w-3/4 mx-auto grid grid-cols-4 gap-3">
                        {
                            divisiDetail.itemsMateri.map((item, index) => (
                                <div key={index} className="mb-4 col-span-2 grid grid-cols-12 border-2 p-3 rounded-3xl grid-last-item" data-aos="fade-up">
                                    <div className="col-span-2 w-1/3 mx-auto">
                                        <FontAwesomeIcon icon={item.icon} className="w-full h-auto"/>
                                    </div>
                                    <div className="col-span-10">
                                        <p className="font-semibold text-sm md:text-3xl mb-2 w-full">{item.judul}</p>
                                        <p className="text-sm md:text-lg mb-10 w-full">{item.deskripsi}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </>
        ) : navigate("/error")
    );
}

export default DivisiPage;
