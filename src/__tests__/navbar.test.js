import React from "react";
import {NavBar} from "../components/navBar/navBar";
import {render, screen, fireEvent} from "@testing-library/react";

test("check Title", () => {
    render(<NavBar />);
    const shoppyTitle = screen.getByText(/shoppy/i);
    expect(shoppyTitle).toBeInTheDocument();
});

test("Detect Drawer Menu", () => {
    render(<NavBar isLoading={false}/>);
    const hamburgerMenu = screen.getByTestId("hamburger");
    fireEvent.click(hamburgerMenu);
    const drawerElement = screen.getByTestId("drawer-menu");
    expect(drawerElement).toBeInTheDocument();
});





