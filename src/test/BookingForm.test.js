import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../components/molecules/BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={["17:00", "18:00", "19:00"]}/>);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('Date input is valid', () => {
    const dispatchTimes = jest.fn();
    render(<BookingForm availableTimes={["17:00", "18:00", "19:00"]} dispatchTimes={dispatchTimes}/>);
    const dateInput = screen.getByLabelText(/Choose date/);
    fireEvent.change(dateInput, {target: {value: "2026-02-04"}});
    expect(dateInput).toBeValid()
    fireEvent.change(dateInput, {target: {value: "2019-02-04"}});
    expect(dateInput).not.toBeValid()
})

test('Time input is valid', () => {
    const dispatchTimes = jest.fn();
    render(<BookingForm availableTimes={["17:00", "18:00", "19:00"]} dispatchTimes={dispatchTimes}/>);
    const timeInput = screen.getByLabelText(/Choose time/);
    fireEvent.change(timeInput, {target: {value: "17:00"}});
    expect(timeInput).toBeValid();
    fireEvent.change(timeInput, {target: {value: "17:30"}});
    expect(timeInput).not.toBeValid();
})

test('Guests input is valid', () => {
    const dispatchTimes = jest.fn();
    render(<BookingForm availableTimes={["17:00", "18:00", "19:00"]} dispatchTimes={dispatchTimes}/>);
    const guestsInput = screen.getByLabelText(/Number of guests/);
    fireEvent.change(guestsInput, {target: {value: "2"}});
    expect(guestsInput).toBeValid();
    fireEvent.change(guestsInput, {target: {value: "0"}});
    expect(guestsInput).not.toBeValid();
})

test('Occasion input is valid', () => {
    const dispatchTimes = jest.fn();
    render(<BookingForm availableTimes={["17:00", "18:00", "19:00"]} dispatchTimes={dispatchTimes}/>);
    const occasionInput = screen.getByLabelText(/Occasion/);
    fireEvent.change(occasionInput, {target: {value: "birthday"}});
    expect(occasionInput).toBeValid();
    fireEvent.change(occasionInput, {target: {value: ""}});
    expect(occasionInput).not.toBeValid();
})

test('Submission is disabled if there is missing data', () => {
    const dispatchTimes = jest.fn();
    const handleSubmit = jest.fn();
    render(<BookingForm availableTimes={["17:00", "18:00", "19:00"]} dispatchTimes={dispatchTimes} submitForm={handleSubmit}/>);
    const submitButton = screen.getByText(/Reserve/);
    fireEvent.click(submitButton);
    expect(handleSubmit).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled");
})

test('Submission is possible if the data is correct', () => {
    const dispatchTimes = jest.fn();
    const handleSubmit = jest.fn();
    render(<BookingForm availableTimes={["17:00", "18:00", "19:00"]} dispatchTimes={dispatchTimes} submitForm={handleSubmit}/>);
    const dateInput = screen.getByLabelText(/Choose date/);
    fireEvent.change(dateInput, {target: {value: "2026-02-04"}});
    const timeInput = screen.getByLabelText(/Choose time/);
    fireEvent.change(timeInput, {target: {value: "17:00"}});
    const guestsInput = screen.getByLabelText(/Number of guests/);
    fireEvent.change(guestsInput, {target: {value: "2"}});
    const occasionInput = screen.getByLabelText(/Occasion/);
    fireEvent.change(occasionInput, {target: {value: "birthday"}});
    const submitButton = screen.getByText(/Reserve/);
    fireEvent.click(submitButton);
    expect(handleSubmit).toHaveBeenCalled();
    expect(submitButton).not.toHaveAttribute("disabled");
})