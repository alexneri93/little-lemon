import { useState } from "react";

function BookingForm() {
    const availableTimes = ["17:00", "18:00", "19:00"]
    const [date, setDate] = useState("")
    const [time, setTime] = useState()
    const [guests, setGuests] = useState(1)
    const [occasion, setOccasion] = useState()

    const handleDateChange = (e) => {
        setDate(e.target.value)
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

    return (
        <form style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" onChange={handleDateChange}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" onChange={handleTimeChange}>
                {availableTimes.map(availableTime => <option>{availableTime}</option>)}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={handleGuestsChange}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={handleOccasionChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation"/>
        </form>
    )
}

export default BookingForm;