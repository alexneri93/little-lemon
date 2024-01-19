import logo from '../assets/Logo.svg'
import Nav from './Nav'

function Footer() {
    return(
        <footer>
            <img src={logo} alt="Little Lemon"/>
            <section>
                <h2>Navigation</h2>
                <Nav/>
            </section>
            <section>
                <h2>Contact</h2>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
            </section>
            <section>
                <h2>Social Media Links</h2>
                <ul>
                    <li><a href="www.facebook.com">Facebook</a></li>
                    <li><a href="www.twitter.com">Twitter</a></li>
                    <li><a href="www.instagram.com">Instagram</a></li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer;