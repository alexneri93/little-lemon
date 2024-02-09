import { useState } from "react";

function BookingForm({availableTimes, dispatchTimes, submitForm}) {
    const todayDate = new Date();
    const year = todayDate.toLocaleString("default", { year: "numeric" });
    const month = todayDate.toLocaleString("default", { month: "2-digit" });
    const day = todayDate.toLocaleString("default", { day: "2-digit" });

    const [date, setDate] = useState("")
    const [time, setTime] = useState()
    const [guests, setGuests] = useState()
    const [occasion, setOccasion] = useState()

    const handleDateChange = (e) => {
        setDate(e.target.value)
        dispatchTimes(e.target.value)
    }
    const handleGuestsChange = (e) => {
        setGuests(e.target.value)
    }
    const handleOccasionChange = (e) => {
        setOccasion(e.target.value)
    }
    const handleTimeChange = (e) => {
        setTime(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        submitForm(`${date}, ${time}, ${guests}, ${occasion}`)
    }

    return (
        <>
        <h2>Book Now</h2>
        <form style={{display: "grid", maxWidth: "200px", gap: "20px"}} onSubmit={handleSubmit} name="reserve">
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" min={`${year}-${month}-${day}`} required aria-required="true" onChange={handleDateChange}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" required aria-required="true" onChange={handleTimeChange}>
                <option value="">Choose time</option>
                {availableTimes.map(availableTime => <option key={availableTime}>{availableTime}</option>)}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" min="1" max="10" id="guests" required aria-required="true" onChange={handleGuestsChange}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" required aria-required="true" onChange={handleOccasionChange}>
                <option value="">Choose occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
            </select>
            <input type="submit" role="button" value="Make Your reservation" disabled={date && time && guests && occasion ? false : true}/>
        </form>
        </>
    )
}

export default BookingForm;