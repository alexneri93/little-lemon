import '../../css/components/footer.css';
import logo from '../../assets/Logo.svg'
import Nav from '../molecules/Nav'
import List from "../atoms/List"

function Footer() {
    return(
        <footer className="footer">
            <div className="container d-grid grid-columns-1 grid-columns-lg-4 gap-big">
                <img src={logo} alt="Little Lemon"/>
                <section>
                    <h2 className='fs-2 fw-bold mb-2'>Navigation</h2>
                    <Nav direction="vertical" listClass='gap-small'/>
                </section>
                <section>
                    <h2 className='fs-2 fw-bold mb-2'>Contact</h2>
                    <List direction="vertical" extraClass='gap-small'>
                        <>Address</>
                        <>Phone number</>
                        <>Email</>
                    </List>
                </section>
                <section>
                    <h2 className='fs-2 fw-bold mb-2'>Social Media Links</h2>
                    <List direction="vertical" extraClass='gap-small'>
                        <a className="text-gray" href="www.facebook.com">Facebook</a>
                        <a className="text-gray" href="www.twitter.com">Twitter</a>
                        <a className="text-gray" href="www.instagram.com">Instagram</a>
                    </List>
                </section>
            </div>
        </footer>
    )
}

export default Footer;