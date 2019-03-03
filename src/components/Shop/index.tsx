import React, { useState } from 'react';
import { items } from './items';
import Products from '../Products';
import Filters from '../Filters';
import styles from './style.module.css';

import { pipe, compose } from '../../lib/fp';
import { product } from 'ramda';

export interface Product {
	id: number;
	name: string;
	distillery: string;
	source: string;
	seed: string;
	type: string;
}

export interface Filter {
	label: string;
	amount: string | number;
}

export interface Filters {
	[key: string]: Array<{
		label: string;
		filters: Array<Filter>;
	}>;
}

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
