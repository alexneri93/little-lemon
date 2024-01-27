import List from "../atoms/List";
import {Link} from 'react-router-dom'

function Nav({direction, listClass, className}) {
    return(
        <>
            <nav className={className}>
                <List direction={direction} extraClass={listClass}>
                    <Link to='/' className="text-gray">Home</Link>
                    <Link to='/about' className="text-gray">About</Link>
                    <Link to='/menu' className="text-gray">Menu</Link>
                    <Link to='/booking' className="text-gray">Reservations</Link>
                    <Link to='/order-online' className="text-gray">Order Online</Link>
                    <Link to='/login' className="text-gray">Login</Link>
                </List>
            </nav>
        </>
    )
}

export default Nav;