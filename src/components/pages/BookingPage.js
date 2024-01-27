import BookingForm from "../molecules/BookingForm";

function BookingPage() {
    return(
        <main>
            <div className="container mt-5 mb-5">
                <h1 className="text-markazi fs-5">Booking Page</h1>
                <BookingForm/>
            </div>
        </main>
    )
}

export default BookingPage;