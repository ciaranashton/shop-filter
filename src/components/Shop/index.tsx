import React, { useState } from 'react';
import { items } from './items';
import Products from '../Products';
import Filters from '../Filters';
import styles from './style.module.css';

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

export const getFilters = (products: Product[]) => products;

const Shop = () => {
	const [products, setProducts]: [Product[], Function] = useState(items);
	const [filters, setFilters]: [Filter[], Function] = useState([]);

	return (
		<div className={styles.shop}>
			<Products products={products} />
			<Filters filters={filters} />
		</div>
	);
};

export default Shop;
