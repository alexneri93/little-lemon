import star from '../../assets/star.svg'

function CustomersSay(){
    const customers = [
        {id: "1", name: "Solomeo Paredes", rating: "4.5", image: "solomeo.jpg", review: "The food was awesome."},
        {id: "2", name: "Dolores Delano", rating: "5", image: "dolores.webp", review: "Good service."},
        {id: "3", name: "Helena Nillo", rating: "4.7", image: "helena.webp", review: "The best menu I could find for this price."},
        {id: "4", name: "Paquito Chocolatero", rating: "4.8", image: "paco.jpeg", review: "Very good restaurant in Chicago, good service and excellent price."}
    ]

    return(
        <section className="testimonials bg-green pt-5 pb-5">
            <div className="container">
                <h2 className='fw-medium type-markazi fs-5 text-white text-center mb-4'>Testimonials</h2>
                <div className="d-grid grid-columns-1 grid-columns-sm-2 grid-columns-lg-4 gap-big">
                    {
                        customers.map(customer => {
                            return(
                                <div key={customer.id} className='testimonial-card bg-white'>
                                    <div className="mb-2 fw-bold fs-3"><img src={star} width="12px" height="12px" className='mr-1' alt="star"/>{customer.rating}</div>
                                    <div className='d-flex align-items-center mb-2'>
                                        <img src={require(`../../assets/${customer.image}`)} alt={customer.name} width="45" height="45" className="rounded object-fit-cover mr-2"/>
                                        <span className="fw-medium">{customer.name}</span>
                                    </div>
                                    <div>"{customer.review}"</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default CustomersSay;