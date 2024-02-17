import BookingForm from "../molecules/BookingForm";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import {fetchAPI, submitAPI} from "../../utils/fakeAPI"

const updateTimes = (state, date) => {
    if(date) return initializeTimes(new Date(date))
    return state
}

const initializeTimes = (date) => fetchAPI(date)

function BookingPage() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes(new Date()))

    const navigate = useNavigate()
    const submitForm = (formData) => {
        const response = submitAPI(formData)
        if (response) navigate("/confirmed-booking")
    }
    return(
        <>
            <section className="bg-green pt-5 pb-5">
                <div className="container">
                    <h1 className="type-markazi fs-5 mb-3 text-center text-yellow">Reservations</h1>
                    <BookingForm availableTimes={availableTimes} dispatchTimes={dispatch} submitForm={submitForm}/>
                </div>
            </section>
        </>
    )
}

export {BookingPage, updateTimes, initializeTimes};