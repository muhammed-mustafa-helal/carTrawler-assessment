import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import './styles/navbar.scss';

export default function Navbar() {
    const navigate = useNavigate();

    const navigateToHomeHandler = () => navigate('/');

    return (
        <nav className="navbar">
            <div className='navbar__container'>
                <div className="navbar__logo" onClick={navigateToHomeHandler}>
                    <img src="images/ct-logo-dark.svg" alt="CarTrawler Logo" />
                </div>
                <ul className="navbar__menu">
                    <li className='navbar__menu--currency' title='Website currency'>
                        CAD
                    </li>
                    <li className='navbar__menu--language' title='Website Language'>
                        <img src="/images/united-states.svg" alt="Website Language" />
                    </li>
                    <li>
                        <a href='/#'><AiOutlineShoppingCart /></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
