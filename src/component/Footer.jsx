function Footer(){
    //tampilan
    return (
        

<footer className="bg-hitam relative z-50">
    <div className="mx-auto w-navfot p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 md:w-[45%] flex flex-col justify-center me-5">
                <div className="flex">
                    <div>
                        <img src="../src/assets/img/logo/LOGO UKM PUTIH.png" className="h-12 me-3" alt="Logo UKM" />
                    </div>
                    <div>
                        <img src="../src/assets/img/logo/LOGO PNB.png" className="h-12 me-3" alt="Logo PNB" />
                    </div>
                </div>

                <div className="text-justify mt-3 text-white">
                    <p>Unit Kegiatan Mahasiswa (UKM) Computer Club KBM PNB adalah wadah bagi mahasiswa Politeknik Negeri Bali yang memiliki minat dan bakat dalam bidang teknologi informasi dan komputer.</p>
                </div>
            </div>

            <div className="grid grid-cols-2 md:gap-16 gap-6 md:grid-cols-3">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-white uppercase">Navigation</h2>
                    <ul className="text-white font-light">
                        <li className="mb-4">
                            <a href="#beranda" className="hover:underline">Beranda</a>
                        </li>
                        <li className="mb-4">
                            <a href="#tentang" className="hover:underline">Tentang Kami</a>
                        </li>
                        <li className="mb-4">
                            <a href="#divisi" className="hover:underline">Divisi</a>
                        </li>
                        <li>
                            <a href="#proker" className="hover:underline">Program Kerja</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-white uppercase">Follow us</h2>
                    <ul className="text-white font-light">
                        <li className="mb-4 flex items-center text-white">
                            <i className="fa-brands fa-instagram me-2 text-lg"></i>
                            <a href="https://www.instagram.com/ukmcomputerclub?igsh=cWRwcmYzZjUyOHgw" className="hover:underline lg:-mt-[0.5px]" target="_blank">Instagram</a>
                        </li>
                        <li className="flex items-center text-white">
                            <i className="fa-brands fa-tiktok me-2 text-lg"></i>
                            <a href="https://www.tiktok.com/@ukmcomputerclub?_t=8ohE7tbwgni&_r=1" className="hover:underline" target="_blank">Tiktok</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-white uppercase">Contact Us</h2>
                    <ul className="text-white font-light">
                        <li className="mb-4 flex items-center">
                            <i className="fa-brands fa-whatsapp me-2"></i>
                            <a href="https://wa.me/+6282340949343" className="hover:underline" target="_blank">Ayu Diah</a>
                        </li>
                        <li className="flex items-center">
                            <i className="fa-brands fa-whatsapp me-2"></i>
                            <a href="#" className="hover:underline">Sastie</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-white sm:text-center">© 2024 <span>UKM Computer Club</span>.</span>

            <div className="flex mt-4 sm:justify-center sm:mt-0">
                <a href="https://www.instagram.com/ukmcomputerclub?igsh=cWRwcmYzZjUyOHgw" target="_blank" className="text-white hover:text-gray-900">
                    <i className="fa-brands fa-instagram text-lg"></i>
                    <span className="sr-only">Instagram page</span>
                </a>
                <a href="https://www.tiktok.com/@ukmcomputerclub?_t=8ohE7tbwgni&_r=1" target="_blank" className="text-white hover:text-gray-900 ms-5">
                    <i className="fa-brands fa-tiktok text-lg"></i>
                    <span className="sr-only">Tiktok</span>
                </a>
                <a href="https://linkedin.com/company/ukm-computerclub" target="_blank" className="text-white hover:text-gray-900 ms-5">
                    <i className="fa-brands fa-linkedin text-lg"></i>
                    <span className="sr-only">Linkedin</span>
                </a>
            </div>
        </div>
    </div>
</footer>

    )
}

export default Footer