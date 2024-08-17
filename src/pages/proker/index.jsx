import { useNavigate, useParams } from "react-router-dom";
import prokerData from "../../data/proker/data";
import YouTube from "react-youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProkerPage() {
    const { proker } = useParams();
    const navigate = useNavigate();
    const prokerDetail = prokerData.find((data) => data.singkatan === proker);

    const onPlayerReady = (event) => {
        event.target.pauseVideo();
    }
    
    const opts= {
    playerVars: {
        controls: 0,
        autoplay: 0,
        iv_load_policy:3,
        playsinline:1,
        fs: 1,
        rel:0,
        disablekb: 1,
        showinfo: 0,
    },
    };

    return (
        prokerDetail ? (
            <>
                <div className="absolute inset-0 -z-10 bg-ornamen"/>

                <section className="py-8 md:pb-20 relative h-screen">
                    <div className="p-2 w-konten mx-auto" data-aos="fade-up">
                        <h1 className="text-center font-semibold text-xl md:text-lg text-secondary m-auto mt-10 mb-2">Program Kerja</h1>
                        <div className="w-1/12 m-auto relative z-10 my-10">
                            <img src={prokerDetail.logo} className="w-full rounded-ss-lg rounded-se-lg "></img>
                        </div>
                    </div>
                    <div className="p-2 w-konten mx-auto" data-aos="fade-up">
                        <h1 className="text-center font-bold text-xl md:text-6xl md:w-3/5 m-auto my-10">{prokerDetail.name}</h1>
                        <p className="text-center font-normal text-sm md:text-base mb-10 w-full md:w-3/5 md:mx-auto">{prokerDetail.deskripsi}</p>
                    </div>
                </section>

                <section className="md:pt-20 relative pb-40">
                    <div className="absolute inset-0 z-0 md:top-48"
                        style={{
                        backgroundColor: "#1E1E1E",
                        }} >
                    </div>
                    <div className="w-3/4 flex aspect-video m-auto relative">
                        <YouTube videoId={prokerDetail.videoYoutube} className="aspect-video absolute z-10 -translate-x-1/2 left-1/2 -top-1/4 w-full" opts={opts} onReady={onPlayerReady} iframeClassName="w-full h-full rounded-2xl"/>
                    </div>
                    <div className="text-white p-2 w-konten mx-auto" data-aos="fade-up">
                        <h1 className="text-center font-bold text-xl md:text-6xl md:w-3/5 m-auto mb-10">{prokerDetail.name} Latest Facts</h1>
                        <p className="text-center font-normal text-sm md:text-base mb-10 w-full md:w-3/5 md:mx-auto">{prokerDetail.deskripsiDetail}</p>
                    </div>
                    <div className="text-white p-2 w-konten mx-auto flex justify-center" data-aos="fade-up">
                        {
                            prokerDetail.items.map((item, index) => (
                                <div key={index} className="mb-4 flex flex-col gap-10">
                                    <FontAwesomeIcon className="w-full h-14 m-auto text-white" icon={item.icon} />
                                    <p className="text-center font-semibold text-sm md:text-xl mb-10 w-full md:w-4/5 md:mx-auto">{item.text}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="bg-secondary py-5 md:w-4/5 mx-auto rounded-[3rem] flex justify-evenly items-center text-white" data-aos="fade-up">
                        {
                            prokerDetail.facts.map((item, index) => (
                                <div key={index} className="flex flex-col gap-2">
                                    <h1 className="text-center font-bold text-xl md:text-6xl m-auto">{item.head}</h1>
                                    <p className="text-center font-semibold text-sm md:text-lg w-full md:mx-auto">{item.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </section>
                <section className="py-8 md:pb-20 relative">
                    <div className="p-2 w-konten mx-auto" data-aos="fade-up">
                        <h1 className="text-center font-semibold text-xl md:text-lg text-secondary m-auto mt-10 mb-2">Galeri</h1>
                    </div>
                    <div className="p-2 w-konten mx-auto" data-aos="fade-up">
                        <h1 className="text-center font-bold text-xl md:text-6xl md:w-3/5 m-auto mb-10">Beberapa Dokumentasi {prokerDetail.singkatan.toUpperCase()} {prokerDetail.periode}</h1>
                        <p className="text-center font-normal text-sm md:text-base mb-10 w-full md:w-3/5 md:mx-auto">{prokerDetail.deskripsiDokumentasi}</p>
                    </div>
                    <div className="p-2 w-konten mx-auto grid grid-cols-6 gap-5">
                        {
                            prokerDetail.dokumentasi.map((item, index) => (
                                <div key={index} className="w-full mb-10 m-auto col-span-2 grid-item" data-aos="fade-up">
                                    <img src={item.path} alt={item.alt} className="w-full rounded-3xl" />
                                </div>
                            ))
                        }
                    </div>
                </section>
            </>
        ) : navigate("/error")
    );
}

export default ProkerPage;