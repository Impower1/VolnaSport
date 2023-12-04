import { Link, NavLink } from "react-router-dom";
import Logo from '../static/assets/Logo.png'
import phone from '../static/assets/phone.png'
import telegram from '../static/assets/telegram.png'
import vk from '../static/assets/vk.png'
import Burger from "./Burger";

function Header() {
    return (
        <div className="wrapper header-wrapper"  id='top'>
            <header>
                <div className="header-left">
                    <NavLink to='/fitnessHouse'>
                        <img src={Logo} alt="logo" />
                    </NavLink>
                </div>
                <nav className="header-middle">
                    <NavLink to='/fitnessHouse/subscription' activeClassName="active">Абонементы</NavLink>
                    <NavLink to='/fitnessHouse/schedule' activeClassName="active">Расписание</NavLink>
                    <NavLink to='/fitnessHouse/coaches' activeClassName="active">Тренеры</NavLink>
                    <NavLink to='/fitnessHouse/contacts' activeClassName="active">Контакты</NavLink>
                </nav>
                <div className="header-right">
                    <div className="phone">
                        <a href="tel:+78126100606"><img src={phone} alt="phoneIcon" /></a>
                    </div>
                    <div className="socials">
                        <a href="">
                            <img src={vk} alt="vk" />
                        </a>
                        <a href="">
                            <img src={telegram} alt="telegram" />
                        </a>
                    </div>
                </div>
                <Burger/>
            </header>
        </div>
     );
}

export default Header;