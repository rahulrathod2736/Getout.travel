import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import {Icon} from "../components/icon/icon";
import {Categories} from "../components/category/category";
import {categories} from "../seedData/seedData";

test("Check Category Skeleton", () => {
    render(<Categories isLoading={true} categories={categories}/>);
    const skeletonElement = screen.getAllByTestId("category-icon-skeleton");
    expect(skeletonElement).toHaveLength(categories.length);
});

test("Check Category Product", () => {
    render(<Categories categories={categories}/>);
    const skeletonElement = screen.getAllByTestId("category");
    expect(skeletonElement).toHaveLength(categories.length);
});