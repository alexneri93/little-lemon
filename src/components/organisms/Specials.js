function Specials (){

    const dishes = [
        {id: "1", name: "Greek Salad", price: "12.99", image: "greek salad.jpg", description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."},
        {id: "2", name: "Bruschetta", price: "5.99", image: "bruschetta.webp", description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."},
        {id: "3", name: "Lemon Dessert", price: "5.00", image: "lemon dessert.jpg", description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}
    ]

    return(
        <section className="specials">
            <div className="container mb-5 mt-5">
                <div className='d-flex justify-space-between align-items-center mb-5'>
                    <h2 className='fw-medium type-markazi fs-6'>Specials</h2>
                    <a className="btn btn--primary" role="button" href="www.google.es">Online Menu</a>
                </div>
                <div className='d-flex justify-space-between align-items-center flex-column flex-lg-row gap-big'>
                    {dishes.map(dish => {
                        return(
                            <article className="product-card" key={dish.id}>
                                <img src={require(`../../assets/${dish.image}`)} alt="greek salad" className='product-card__img'/>
                                <div className='product-card__body'>
                                    <header className='d-flex justify-space-between align-items-center mb-4'>
                                        <h3 className='fw-bold fs-3'>{dish.name}</h3>
                                        <span className='text-orange fs-2'>$ {dish.price}</span>
                                    </header>
                                    <p className='mb-4 fs-2 text-green'>
                                        {dish.description}
                                    </p>
                                    <div className='fw-medium'>
                                        Order a delivery
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Specials;