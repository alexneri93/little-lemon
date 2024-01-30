import {updateTimes, initializeTimes} from '../components/pages/BookingPage';

test('Renders the initial times state', () => {
    const times = initializeTimes()
    expect(times).toStrictEqual(["17:00", "18:00", "19:00"]);
})

test('Renders the updated times state', () => {
    const times = updateTimes(["17:00", "18:00", "19:00"], "2024-01-28")
    expect(times).toStrictEqual(["17:00", "18:00", "19:00"]);
})