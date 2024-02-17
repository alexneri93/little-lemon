import checkMark from '../../assets/checkmark.png'

function ConfirmedBooking(){
    return(
        <>
            <section className="container mt-5 mb-5 d-flex flex-column align-items-center">
                <h2 className="type-markazi fs-5 pb-4">Your booking is confirmed</h2>
                <img src={checkMark} alt='checkmark' width="100px" height="100px" className='mb-4'/>
                <p className="fs-3 mb-2">You will receive an email with the confirmation details.</p>
                <p className="fs-3">See you soon!</p>
            </section>
        </>
    )
}

export default ConfirmedBooking;