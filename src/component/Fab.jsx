function Fab(){
    return(
        <div>
            {/* Muncul di HP */}
            <div className="block md:hidden z-30">
                <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-secondary text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-primary transition-all duration-300">
                    <i className="fa-solid fa-file-pen text-xl"></i>
                </a>
            </div>

            {/* Muncul di Desktop */}
            <div className="hidden md:block z-30">
                <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-secondary text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-primary transition-all duration-300">
                    <i className="fa-solid fa-comment-dots text-2xl"></i>
                </a>
            </div>
        </div>
    )
}

export default Fab