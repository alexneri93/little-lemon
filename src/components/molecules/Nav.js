import List from "../atoms/List";

function Nav({direction, listClass, className}) {
    return(
        <nav className={className}>
            <List direction={direction} extraClass={listClass}>
                <a className="text-gray" href="www.google.es">Home</a>
                <a className="text-gray" href="www.google.es">About</a>
                <a className="text-gray" href="www.google.es">Menu</a>
                <a className="text-gray" href="www.google.es">Reservations</a>
                <a className="text-gray" href="www.google.es">Order Online</a>
                <a className="text-gray" href="www.google.es">Login</a>
            </List>
        </nav>
    )
}

export default Nav;