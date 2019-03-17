import * as React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { ShopContext } from '../components/Shop/ShopContext';
import { FilterOptions } from '../components/Filters';

test('Update selected', () => {
    const { container } = render(
        <ShopContext.Provider
            value={{
                selected: 'one',
                setSelected: (selected: any) => {
                    console.log(selected);
                },
            }}>
            <FilterOptions filter="hat" count={1} />
        </ShopContext.Provider>,
    );

    expect(container.querySelector('h2').textContent).toEqual('one');
});
