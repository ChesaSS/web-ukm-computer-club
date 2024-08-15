import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import CardFungsio from "../../component/CardFungsio";
import intiData from '../../data/fungsio/inti';
import fungsioData from "../../data/fungsio/data";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function FungsioPage(){
    useEffect(() => {
        AOS.init({
          duration: 1000, // Durasi animasi dalam milidetik
          once: false, // Animasi hanya dijalankan sekali saat scroll
        });
    }, []);

    return(
        <div className="relative">
            <div className="absolute inset-0 -z-10"
                style={{
                backgroundImage: "url('../../src/assets/img/ornamen/teksture 1.png')",
                }}>
            </div>
            
            <Navbar />

            <section className="py-32">
                <h1 className="text-center font-semibold text-3xl uppercase" data-aos="fade-up">Fungsionaris UKM Computer Club</h1>

                <div className="w-konten mx-auto mt-20" data-aos="fade-up">
                    <div className="lg:flex items-center">
                        <div className="border border-black w-full"></div>
                        <h5 className="text-xl font-semibold lg:w-[50%] text-center uppercase">Inti UKM Computer Club</h5>
                        <div className="border border-black w-full"></div>
                    </div>

                    <div className="p-2 w-[98%] mx-auto my-5 flex justify-center items-center flex-wrap">
                        {intiData.map((Data) =>(
                            <CardFungsio key={Data.id} img={Data.img} ig ={Data.ig} kata={Data.moto} nama={Data.nama}
                            />
                        ))}
                    </div>
                </div>

                <div className="w-konten mx-auto mt-20" data-aos="fade-up">
                    <div className="lg:flex items-center">
                        <div className="border border-black w-full"></div>
                        <h5 className="text-xl font-semibold lg:w-[80%] text-center uppercase">Fungsionaris UKM Computer Club</h5>
                        <div className="border border-black w-full"></div>
                    </div>

                    <div className="p-2 w-[98%] mx-auto my-5 flex justify-center items-center flex-wrap">
                        {fungsioData .map((Data) =>(
                            <CardFungsio key={Data.id} img={Data.img} ig ={Data.ig} kata={Data.moto} nama={Data.nama}
                            />
                        ))}
                    </div>
                </div>

            </section>

            <Footer />
        </div>
    )
}

export default FungsioPage