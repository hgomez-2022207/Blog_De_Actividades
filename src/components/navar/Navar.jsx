import { useNavigate } from "react-router-dom";
import './Navbar.css'

const NavButton = ({text, onClickHandler}) => {
    return(
        <span className="nav-button" onClick={onClickHandler}>
            {text}
        </span>
    )
}

export const Navbar = () => {

    const navigate = useNavigate()

    const handleNavigateAboutMe = () => {
        navigate('/my')
    }

    const handleNavigateToWorksPage = () => {
        navigate('/comments')
    }

    const handleNavigateToAddComment = () => {
        navigate('/add')
    }

    return(
        <div className="nav-container">
                <button className='nav-button' text='' onClick={handleNavigateToAddComment}>Browse</button>
                <button className='nav-button' text='' onClick={handleNavigateAboutMe}>More about me</button>
                <button className='nav-button' text='' onClick={handleNavigateToWorksPage}>My works</button>
        </div>
    )
}
