import * as React from 'react';
import { useState } from 'react';
import { items } from './items';
import styles from './shop.module.css';

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
interface Filters {
  seed: { [key: string]: number };
  type: { [key: string]: number };
  source: { [key: string]: number };
}

export const groupFiltersBy = (...sections: string[]) => (products: Product[]) =>
  products.reduce(
    (outer, product: Product) =>
      sections.reduce(
        (inner: { [key: string]: { [key: string]: string } }, section: string) => ({
          ...inner,
          [section]: {
            ...inner[section],
            [product[section]]: inner[section][product[section]]
              ? inner[section][product[section]] + 1
              : 1,
          },
        }),
        outer,
      ),
    sections.reduce((acc, section) => ({ ...acc, [section]: {} }), {}),
  );

const Shop = () => {
  const [products, setProducts]: [Product[], Function] = useState(items);
  const [selected, setSelected]: [string[], Function] = useState([]);

  return (
    <div className={styles.shop}>
      <Products products={products} />
      <Filters filters={[]} selected={selected} />
    </div>
  );
};

export default Shop;
