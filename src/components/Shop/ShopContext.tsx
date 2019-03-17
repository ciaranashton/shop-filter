import * as React from 'react';
import { useState } from 'react';

export const ShopContext = React.createContext(null);
export const ShopConsumer = ShopContext.Consumer;

interface Props {
    children: React.ReactChild;
}

export const ShopProvider = ({ children }: Props) => {
    const [selected, setSelected]: [string[], Function] = useState(
        [],
    );

    return (
        <ShopContext.Provider
            value={{
                selected,
                setSelected,
            }}>
            {children}
        </ShopContext.Provider>
    );
};
