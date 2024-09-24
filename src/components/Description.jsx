export default function Description( { forDescription } ){

    return(
        <>
        {
            forDescription.map(description =>(

                <p className="text-white ">
                    {description.text}
                </p>
            ))
        }
        </>
    )
}