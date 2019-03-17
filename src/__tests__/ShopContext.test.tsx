import * as React from 'react';
import { render, fireEvent } from 'react-testing-library';
import {
    ShopContext,
    ShopConsumer,
    ShopProvider,
} from '../components/Shop/ShopContext';

describe('ShopContext', () => {
    test('Inital value set to null', () => {
        let realValue = 'not undefined';

        const { container } = render(
            <ShopConsumer>
                {value => (realValue = value)}
            </ShopConsumer>,
        );

        expect(realValue).toBeNull();
    });

    test('intial selected to be empty array', () => {
        const { container } = render(
            <ShopProvider>
                <ShopConsumer>
                    {({ selected }) => <div>{selected}</div>}
                </ShopConsumer>,
            </ShopProvider>,
        );

        expect(container.textContent).toEqual(',');
    });
});
