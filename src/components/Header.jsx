import { NavLink, useNavigate } from "react-router-dom"

export default function Header(){

    const navigate = useNavigate()

    return(
        <header className="bg-black text-white flex justify-around py-4">
            <div>
                <img src="/" alt="" />
            </div>

            <nav>
                <ul className="flex gap-5">
                    <li><NavLink to='/'>Home</NavLink></li>
                </ul>
            </nav>

            <div>
                <button onClick={() => navigate('/login')}>Login</button>
            </div>
        </header>
    )
}