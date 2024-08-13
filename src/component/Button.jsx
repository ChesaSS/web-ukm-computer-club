function Button(porps){
    const {href, text, divClass =""} = porps;
    return(
        <div className={divClass}>
            <a href={`${href}`} className="py-2 px-4 bg-primary rounded-md mb-5 text-white">{text}</a>
        </div>
    )
}

export default Button