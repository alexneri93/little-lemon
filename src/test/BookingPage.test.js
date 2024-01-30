import {updateTimes, initializeTimes} from '../components/pages/BookingPage';
import {fetchAPI} from "../utils/fakeAPI"

test('Renders the initial times state', () => {
    const availableDates = fetchAPI(new Date())
    const times = initializeTimes(new Date())
    expect(times).toStrictEqual(availableDates);
})

test('Renders the updated times state', () => {
    const availableDates = fetchAPI(new Date("2024-01-28"))
    const times = updateTimes(availableDates, "2024-01-28")
    expect(times).toStrictEqual(availableDates);
})