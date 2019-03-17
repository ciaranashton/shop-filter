import * as React from 'react';
import { useState, useContext } from 'react';
import { items } from './items';
import styles from './shop.module.css';
import { groupFiltersBy } from './utilities';
import { ShopContext } from './ShopContext';

// components
import Products from '../Products';
import Filters from '../Filters';

// types
export interface Product {
    id: number;
    name: string;
    distillery: string;
    source: string;
    seed: string;
    type: string;
    [key: string]: string | number;
}

const groupFilters = groupFiltersBy('seed', 'type', 'source');

const Shop = () => {
    const [products, setProducts]: [Product[], Function] = useState(
        items,
    );

    const { selected } = useContext(ShopContext);
    console.log(selected);

    return (
        <div className={styles.shop}>
            <Products products={products} />
            <Filters
                filters={groupFilters(products)}
                selected={selected}
            />
        </div>
    );
};

export default Shop;
