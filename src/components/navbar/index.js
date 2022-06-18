import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import classes from './styles/navbar.module.scss';

export default function Navbar() {
    const navigate = useNavigate();

    const navigateToHomeHandler = () => navigate('/');

    return (
        <nav className={classes['navbar']}>
            <div className={classes['navbar__container']}>
                <div className={classes['navbar__logo']} onClick={navigateToHomeHandler}>
                    <img src="images/ct-logo-dark.svg" alt="CarTrawler Logo" />
                </div>
                <ul className={classes['navbar__menu']}>
                    <li className={classes['navbar__menu--currency']} title='canadian dollar'>
                        CAD
                    </li>
                    <li className={classes['navbar__menu--language']} title='website'>
                        <img src="/images/united-states.svg" alt="English US" />
                    </li>
                    <li>
                        <AiOutlineShoppingCart /><span>1</span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
