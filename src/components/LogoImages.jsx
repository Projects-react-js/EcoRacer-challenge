export default function LogoImagens( { logotipos } ){
    return(
        <>
        {
            logotipos.map(logos =>(
                <img src={logos.search} alt={logos.altImg} className="w-28 sm:w-24 md:w-32 lg:w-40 h-auto"/>
            ))
        }
        </>
    )
}