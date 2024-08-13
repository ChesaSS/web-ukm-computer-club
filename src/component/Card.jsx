import Button from "./Button"

function Card(props) {
    const {img, divisi, deskripsi, href} = props;
    return(
        <div className="relative w-[25rem] md:mx-5 md:my-2 hover:scale-105 transition-all ease-in-out duration-300" data-aos="zoom-in">
            <div className="w-full relative z-10">
                <img src={`${img}`} className="w-full rounded-ss-lg rounded-se-lg "></img>
            </div>

            <div className="bg-white p-1 w-full relative rounded-lg z-20 -top-5 shadow-lg shadow-gray-300">
                <h3 className="font-semibold text-center my-3 text-lg">{divisi}</h3>
                <p className="text-center text-sm w-konten mx-auto mb-5">{deskripsi}</p>
                <Button divClass="flex justify-center" link={`${href}`} text="Baca Selengkapnya"/>
            </div>
        </div>
    );
};

export default Card