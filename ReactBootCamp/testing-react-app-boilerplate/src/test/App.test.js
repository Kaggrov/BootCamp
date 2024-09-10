import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from '../App'
// Scenario: Check if App component displays `Learn React!!` text in `h1` tag
test("Checking h1 content in APP", () => {

    render(<App/>)
    const ele = screen.getByText('Learn React!!')
    expect(ele).toBeInTheDocument();
})