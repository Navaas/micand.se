import css from './Menu.module.css'
import { Link } from 'react-router-dom'
import RoutingPath from "../../../../router/RoutingPath";
import closeImage from '../../../../utils/images/close.png'

const Menu = ({ toggleMenu }) => {
    return (
        <div className={css.container}>
            <img src={closeImage} alt="close" className={css.imageClose} onClick={ toggleMenu }/>
            <ul className={ css.ul }>
                <li className={css.li}>
                    <Link className={ css.link } to={ RoutingPath.homeView }>Home</Link>
                </li>
                <li className={ css.li }>
                    <Link className={ css.link } to={ RoutingPath.contactView }>Contact</Link>
                </li>
                <li className={ css.li }>
                    <Link className={ css.link } to={ RoutingPath.portfolioView }>Portfolie</Link>
                </li>
                <li className={ css.li }>
                    <Link className={ css.link } to={ RoutingPath.aboutView }>About</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu