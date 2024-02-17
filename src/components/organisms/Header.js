import '../../css/components/header.css';
import logo from '../../assets/Logo.svg'
import hamburguerMenu from '../../assets/icon _hamburger_menu.svg'
import cross from '../../assets/cross.svg'
import Nav from '../molecules/Nav'

function Header () {
    return(
    <header className="header pt-4 pb-4">
        <div className="container d-flex align-items-center justify-space-between">
            <img src={logo} alt="Little Lemon"/>
            <label htmlFor="header__togglemenu"  className='header__openmenu'>
                <img src={hamburguerMenu} alt="menu" className='d-lg-none' width="35" height="25"/>
            </label>
            <input type='checkbox' id="header__togglemenu" className='d-none'/>
            <label htmlFor="header__togglemenu" className='header__closemenu d-none'>
                <img src={cross} alt="close menu" width="25" height="25"/>
            </label>
            <Nav listClass="gap-big" className="header__nav"/>
        </div>
    </header>
    )
}

export default Header;