import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test('sanity check', () => {
    render(<CheckoutForm/>)
})

test("form header renders", async () => {
    render(<CheckoutForm/>)

    const formHeader = await screen.getByText("Checkout Form")

    expect(formHeader).toBeVisible
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)

    const firstName = screen.getByLabelText("First Name:")
    const lastName = screen.getByLabelText("Last Name:")
    const address = screen.getByLabelText("Address:")
    const city = screen.getByLabelText("City:")
    const state = screen.getByLabelText("State:")
    const zip = screen.getByLabelText("Zip:")
    const checkoutButton = screen.getByRole("button")

    userEvent.type(firstName, "Pamela Lillian")
    userEvent.type(lastName, "Isley")
    userEvent.type(address, "1 Arkham Pl")
    userEvent.type(city, "Gotham City")
    userEvent.type(state, "NJ")
    userEvent.type(zip, "12345")
    userEvent.click(checkoutButton)

    const successMessage = await screen.getByText(/You have ordered some plants! Woo-hoo!/i)
    expect(successMessage).toBeVisible
});
