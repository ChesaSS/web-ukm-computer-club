import Button from "./Button";
import logo from '../../src/assets/img/logo/LOGO UKM PUTIH.png';


function Card(props) {
    const {img, divisi, deskripsi, rekomendasi, href, singkatan} = props;
    return(
        // <div data-aos="zoom-in">
        //     <div className="relative md:w-[20rem] lg:w-[25rem] md:mx-5 md:my-2 hover:scale-105 transition-all">
        //         <div className="w-full h-60 relative z-10">
        //             <img src={`${img}`} className="w-full rounded-ss-lg rounded-se-lg" loading="lazy"></img>
        //         </div>

        //         <div className="bg-white p-1 w-full relative rounded-lg z-20 -top-20 lg:-top-5 shadow-lg shadow-gray-300">
        //             <h3 className="font-semibold text-center my-3 text-lg">{divisi}</h3>
        //             <p className="text-center text-sm w-konten mx-auto mb-5">{deskripsi}</p>
        //             <Button divClass="flex justify-center" href={`${href}`} text="Baca Selengkapnya"/>
        //         </div>
        //     </div>
        // </div>
        <div data-aos="zoom-in">
            <div className="w-full sm:w-3/5 hover:scale-105 transition-all my-10 mx-auto" id={`${singkatan}`}>
                <div className="w-full sm:h-96 flex flex-col justify-between z-10 bg-center bg-cover p-4 sm:p-8 rounded-xl text-putih" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img})` }}>
                    <div>
                        <div className="flex justify-between">
                            <div className="w-full flex flex-col justify-center">
                                <h3 className="font-semibold text-xl sm:text-4xl">{divisi}</h3>
                                <hr className="w-1/2"/>
                            </div>
                            <img src={`${logo}`} className="sm:h-14 h-12 ml-[2%] items-end" alt="logo UKM CC"/>
                        </div>
                        <p className="text-sm w-full sm:w-3/5 my-5">{deskripsi}</p>
                    </div>
                    <div>
                        <p className="text-sm w-full sm:w-1/2 mb-5" dangerouslySetInnerHTML={{ __html: rekomendasi }}></p>
                        <Button divClass="flex justify-end" href={`${href}`} text="Baca Selengkapnya"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card