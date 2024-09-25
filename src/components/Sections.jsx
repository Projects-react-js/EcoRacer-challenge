export default function Sections( {children, forSections } ){

    return(
        <>
        {
            forSections.map(sectionStyle =>(
                <section className={sectionStyle.style}>
                    {children}
                </section>
            ))
        }
        </>
    )
}