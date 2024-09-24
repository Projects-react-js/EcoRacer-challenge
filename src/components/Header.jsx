import { NavLink, useNavigate } from "react-router-dom"

export default function Header(){

    const navigate = useNavigate()

    return(
        <header className="bg-transparent text-white 
        flex justify-around items-center
        absolute z-10 
        py-4 w-full">
            <div>
                <img src="/" alt="" />
            </div>

            <nav>
                <ul className="flex gap-5">
                    <li><NavLink to='/'>Home</NavLink></li>
                </ul>
            </nav>

            <div>
                <button onClick={() => navigate('/login')} className="bg-[#0000ff] text-white font-bold 
                rounded-3xl border-[#0000ff] hover:bg-white hover:text-[#0000ff] border-2 
                sm:py-1 sm:px-5 
                md:py-2 md:px-6 
                py-1s px-4
                shadow-[0_0_10px_#0000ff] hover:shadow-[0_0px_15px_#0000ff] transition duration-500 ease-in-out">
                    Login
                </button>
            </div>
        </header>
    )
}