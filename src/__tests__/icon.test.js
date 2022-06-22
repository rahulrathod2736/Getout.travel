import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import {Icon} from "../components/icon/icon";

test("check icon Skeleton", () => {
    const renderData = render(<Icon isLoading={true}/>);
    const skeletonElement = screen.getByTestId("icon-skeleton");
    expect(skeletonElement).toBeInTheDocument();
});

test("check icon Title", () => {
    const onClick = jest.fn();
    render(<Icon title={"Hello Check"} onClick={onClick}/>);
    const iconTitleElement = screen.getByTestId("icon-title");
    const iconContainerElement = screen.getByTestId("icon-container");
    expect(iconTitleElement).toHaveTextContent("Hello Check");
    fireEvent.click(iconContainerElement);
    expect(onClick).toBeCalledTimes(1);
});