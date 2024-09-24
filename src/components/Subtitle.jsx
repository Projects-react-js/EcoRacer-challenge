export default function Subtitle({ forSubtitle }){

    return(
        <>
        {
            forSubtitle.map(subtitleStyle =>(
                <h2 className={subtitleStyle.style}>
                    {subtitleStyle.text}
                </h2>
            ))
        }
        </>
    )
}