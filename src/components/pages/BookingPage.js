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
            <div className="container mt-5 mb-5">
                <h1 className="text-markazi fs-5">Booking Page</h1>
                <BookingForm availableTimes={availableTimes} dispatchTimes={dispatch} submitForm={submitForm}/>
            </div>
        </>
    )
}

export {BookingPage, updateTimes, initializeTimes};