import '../../css/components/calltoaction.css';
import restaurantFood from '../../assets/restauranfood.jpg'
import {Link} from 'react-router-dom'

function CallToAction(){
    return(
        <section className="hero">
            <div className="container hero__container gap-big">
                <div className="d-flex flex-column align-items-start">
                    <h1 className="fw-medium type-markazi fs-6 text-yellow mb-3">Little Lemon</h1>
                    <div className="fw-regular type-markazi fs-5">Chicago</div>
                    <p className="lh-3 hero__container__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to='/booking' className="btn btn--primary mt-4 mt-lg-auto" role="button">Reserve a Table</Link>
                </div>
                <div className='d-none d-lg-block'>
                    <img src={restaurantFood} alt="restaurant food" className="img img--square hero__container__image" width="450" height="450"/>
                </div>
            </div>
        </section>
    )
}

export default CallToAction;