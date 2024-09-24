export default function Title({ title }){

    return(
        <>
            <h1 className="text-white font-russo text-center 
            lg:text-5xl md:text-4xl sm:text-3xl text-2xl
            lg:px-20 lg:py-5 md:py-4 sm:py-3 py-2">
                {title}
            </h1>
        </>
    )


}