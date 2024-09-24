import { useNavigate } from "react-router-dom"

export default function ButtonPlay( { playButton } ){

    const navigate = useNavigate();
    
    return(
        <>
        {
            playButton.map(textButton =>(
                <button onClick={() => navigate('/login')} className="bg-transparent text-white font-bold rounded-3xl border-white hover:bg-white hover:text-[#0000ff] border-2 px-4 py-2 sm:py-3 sm:px-5 md:py-4 md:px-6  hover:shadow-[0_0px_15px_#0000ff] transition duration-500 ease-in-out">
                
                {textButton.text}

                </button>
            ))
        }
        </>


    )
}