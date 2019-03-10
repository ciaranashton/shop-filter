import * as React from 'react';
import { useState } from 'react';
import { items } from './items';
import styles from './shop.module.css';

// components
import Products from '../Products';
import Filters from '../Filters';

// types
import { Product } from '../Products'

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
