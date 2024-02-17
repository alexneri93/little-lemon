import { useState } from "react";
import FormField from "./FormField"

function BookingForm({availableTimes, dispatchTimes, submitForm}) {
    const todayDate = new Date();
    const year = todayDate.toLocaleString("default", { year: "numeric" });
    const month = todayDate.toLocaleString("default", { month: "2-digit" });
    const day = todayDate.toLocaleString("default", { day: "2-digit" });

    const [date, setDate] = useState("")
    const [time, setTime] = useState()
    const [guests, setGuests] = useState("")
    const [occasion, setOccasion] = useState("")
    const [email, setEmail] = useState("")

    const [validEmail, setValidEmail] = useState(false)
    const [isValidDate, setIsValidDate] = useState(false)
    const [isValidTime, setIsValidTime] = useState(true)
    const [isValidGuests, setIsValidGuests] = useState(false)
    const [isValidOccasion, setIsValidOccasion] = useState(true)

    const handleDateChange = (e) => {
        setDate(e.target.value)
        dispatchTimes(e.target.value)
        const selectedDate = new Date(e.target.value)
        const today = new Date(`${month}/${day}/${year}`);
        setIsValidDate( Date.parse(today)  <= Date.parse(selectedDate) )
        setTime("")
    }
    const handleGuestsChange = (e) => {
        setGuests(e.target.value)
        setIsValidGuests(e.target.value > 0 && e.target.value <= 10)
    }
    const handleOccasionChange = (e) => {
        setOccasion(e.target.value)
        setIsValidOccasion(e.target.value !== "")
    }
    const handleTimeChange = (e) => {
        setTime(e.target.value)
        setIsValidTime(e.target.value !== "")
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        setValidEmail(e.target.value.match(validRegex))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        submitForm(`${date}, ${time}, ${guests}, ${occasion}`)
    }

    return (
        <>
        <h2 className="mb-4 text-center fs-4 text-yellow">Book Now</h2>
        <form onSubmit={handleSubmit} name="reserve" className="form mx-auto p-4 d-flex flex-column bg-white">
            <input type="radio" name="steps" id="step1" className="d-none" value="step1" defaultChecked={true}/>
            <input type="radio" name="steps" id="step2" className="d-none" value="step2"/>
            <input type="radio" name="steps" id="step3" className="d-none" value="step3"/>
            <input type="radio" name="steps" id="step4" className="d-none" value="step4"/>
            <div className="form__progress">
                <label className="form__progress__step form__progress__step--1">
                    <div>Date & time</div>
                    <span>1</span>
                </label>
                <div className="form__progress_line form__progress_line--1 p-relative"></div>
                <label className="form__progress__step form__progress__step--2">
                    <div>Details</div>
                    <span>2</span>
                </label>
                <div className="form__progress_line form__progress_line--2 p-relative"></div>
                <label className="form__progress__step form__progress__step--3">
                    <div>Contact</div>
                    <span>3</span>
                </label>
                <div className="form__progress_line form__progress_line--3 p-relative"></div>
                <label className="form__progress__step form__progress__step--4">
                    <div>Submit</div>
                    <span>4</span>
                </label>
            </div>
            <div className="form__step form__step--1">
                <FormField value={date} type="date" id="res-date" label="Choose date*" min={`${year}-${month}-${day}`} onChange={handleDateChange} showError={date && !isValidDate} errorMsg="Please enter a valid date." />
                <FormField value={time} type="select" id="res-time" label="Choose time*" onChange={handleTimeChange} showError={!isValidTime} errorMsg="Please select a time">
                    <option value="">Choose time</option>
                    {availableTimes.map(availableTime => <option key={availableTime}>{availableTime}</option>)}
                </FormField>
                <div className="d-flex justify-space-between align-items-center mt-3 gap-medium">
                    <div className="fs-1 text-gray w-50">* Required field</div>
                    <label htmlFor="step2" className={`btn btn--primary w-50 ${date && time ? "" : "btn--disabled"}`}>Next</label>
                </div>
            </div>
            <div className="form__step form__step--2">
                <FormField value={guests} type="number" id="guests" label="Number of guests*" min="1" max="10" onChange={handleGuestsChange} showError={guests && !isValidGuests} errorMsg="The number of guests need to be between 1 and 10 (included)"/>
                <FormField value={occasion} type="select" id="occasion" label="Occasion*" onChange={handleOccasionChange} showError={!isValidOccasion} errorMsg="Please select an occasion">
                    <option value="">Choose occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                </FormField>
                <span className="fs-1 text-gray mb-3">* Required field</span>
                <div className="d-flex justify-space-between align-items-center mt-3 gap-medium">
                    <label htmlFor="step1" className="btn btn--secondary w-50">Previous</label>
                    <label htmlFor="step3" className={`btn btn--primary w-50 ${isValidGuests && occasion ? "" : "btn--disabled"}`}>Next</label>
                </div>
            </div>
            <div className="form__step form__step--3">
                <FormField value={email} type="email" id="email" label="Contact email*" onChange={handleEmailChange} showError={email && !validEmail} errorMsg="Please enter a valid email"/>
                <span className="fs-1 text-gray mb-3">* Required field</span>
                <div className="d-flex justify-space-between align-items-center mt-3 gap-medium">
                    <label htmlFor="step2" className="btn btn--secondary w-50">Previous</label>
                    <label htmlFor="step4" className={`btn btn--primary w-50 ${email && validEmail ? "" : "btn--disabled"}`} id="validate-email">Next</label>
                </div>
            </div>
            <div className="form__step form__step--4">
                <div className="mb-2 fw-bold">Reservation details:</div>
                <div className="mb-2">You want to reserve a table for <span className="fw-bold">{guests}</span>, on <span className="fw-bold">{date}</span> at <span className="fw-bold">{time}</span>.</div>
                <div className="mb-4">Contact email: <span className="fw-bold">{email}</span></div>
                <div className="d-flex justify-space-between align-items-center mt-3 gap-medium">
                    <label htmlFor="step3" className="btn btn--secondary w-25">Previous</label>
                    <button type="submit" className="btn btn--primary w-75 border-0" disabled={date && time && guests && occasion ? false : true}>
                        Reserve
                    </button>
                </div>
            </div>
        </form>
        </>
    )
}

export default BookingForm;