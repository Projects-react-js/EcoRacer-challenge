export default function Banner({ children }){

    return(
        <>
            <section className="flex items-center justify-around flex-col relative
            w-full min-w-80 h-screen 
            bg-custom-radial 
            lg:px-20 lg:py-48 lg:gap-5 
            md:px-40 md:py-48 md:gap-5 
            px-10 py-20"> 
                {children}
            </section>
        </>
    )


}