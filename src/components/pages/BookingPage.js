import BookingForm from "../molecules/BookingForm";
import { useReducer } from "react";

const updateTimes = (state, date) => {
    if(date) return initializeTimes()
    return state
}

const initializeTimes = () => ["17:00", "18:00", "19:00"]

function BookingPage() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())
    return(
        <>
            <div className="container mt-5 mb-5">
                <h1 className="text-markazi fs-5">Booking Page</h1>
                <BookingForm availableTimes={availableTimes} dispatchTimes={dispatch}/>
            </div>
        </>
    )
}

export {BookingPage, updateTimes, initializeTimes};