import { AiOutlineShoppingCart } from 'react-icons/ai'

import './styles/navbar.scss';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className='navbar__container'>
                <div className="navbar__logo">
                    <img src="images/ct-logo-dark.svg" alt="CarTrawler Logo" />
                </div>
                <ul className="navbar__menu">
                    <li className='navbar__menu--currency' title='Website currency'>
                        CAD
                    </li>
                    <li className='navbar__menu--language' title='website language'>
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
