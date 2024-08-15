import Button from "./Button"

function CardProker(props) {
    const {img, divisi, deskripsi, href, logo} = props;
    return(
        <div data-aos="zoom-in">
            <div className="relative w-[20rem]  md:w-[22.5rem] md:mx-5 md:my-2 hover:scale-105 transition-all ease-in-out duration-300">
                <div className="w-full relative z-10">
                    <img src={`${img}`} className="w-full rounded-ss-lg rounded-se-lg "></img>
                </div>

                <div className="bg-white p-1 w-full relative rounded-lg z-20 -top-5 shadow-lg shadow-gray-300 realtive pt-10">
                    <div className="absolute bg-white rounded-full z-30 w-20 h-20 flex justify-center items-center overflow-hidden shadow-md -top-10 md:left-[8.6rem] left-[7.4rem]">
                        <img src={`${logo}`} className="w-[70%] mx-auto"></img>
                    </div>

                    <h3 className="font-semibold text-center my-3 text-lg">{divisi}</h3>
                    <p className="text-center text-sm md:w-konten mx-auto mb-5">{deskripsi}</p>
                    <Button divClass="flex justify-center" link={href} text="Baca Selengkapnya"/>
                </div>
            </div>
        </div>
    );
};

export default CardProker