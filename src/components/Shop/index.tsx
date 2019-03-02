import React, { useState } from 'react';
import { items } from './items';
import Products from '../Products';
import Filters from '../Filters';
import styles from './style.module.css';

import { pipe, compose } from '../../lib/fp';
import { product } from 'ramda';

export interface Product {
	id: number;
	title: string;
	color: string | Array<string>;
	price: number;
	brand: string;
	type: string;
	gender: string;
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

const indexByGenders = (products: any) =>
	products.reduce(
		// TODO :: return the accumulator type to Filters
		(acc: any, val: any) => ({
			...acc,
			[val.gender]: [...acc[val.gender], val],
		}),
		{ female: [], male: [] },
	);

const defineFilters = (products: Product[]) =>
	products.reduce(
		(acc: any, val) => ({
			color: [...acc.color, val.color],
			brand: [...acc.brand, val.brand],
			type: [...acc.type, val.type],
		}),
		{
			color: [],
			brand: [],
			type: [],
		},
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
