import '@testing-library/jest-dom'

import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import {Products} from "../components/productListing/products";
import {products} from "../seedData/seedData";

test("Check No Products", () => {
    const {queryAllByTestId, queryByTestId} = render(<Products isLoading={false} products={[]}/>);
    expect(queryAllByTestId("product")).toHaveLength(0);
});

test("Check Products Child", () => {
    const {queryAllByTestId, queryByTestId} = render(<Products isLoading={false} products={products}/>);
    expect(queryAllByTestId("product")).toHaveLength(products.length);
});

