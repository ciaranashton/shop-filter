import * as React from 'react';
import { useState } from 'react';

const ShopContext = React.createContext(null);
const Provider = ShopContext.Provider;
const Consumer = ShopContext.Consumer;

interface Props {
    children: React.ReactChild;
}

export const ShopProvider = ({ children }: Props) => {
    const [selected, setSelected]: [string[], Function] = useState(
        [],
    );

    return (
        <Provider
            value={{
                selected,
                setSelected,
            }}>
            {children}
        </Provider>
    );
};

export { Consumer as ShopConsumer, ShopContext };
