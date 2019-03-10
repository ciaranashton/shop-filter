import * as React from 'react';
import { useState } from 'react';
import { items } from './items';
import styles from './shop.module.css';
// import * as r from 'ramda';

// components
import Products from '../Products';
import Filters from '../Filters';

// types
import { Product } from '../Products';
interface Filters {
	seed: { label: string; count: number }[];
	type: { label: string; count: number }[];
	source: { label: string; count: number }[];
}

// export const groupFilters = (products: Product[]): Filters =>
// 	products.reduce(
// 		(acc, val) => ({
// 			seed: [...acc.seed, val.seed],
// 			type: [...acc.type, val.type],
// 			source: [...acc.source, val.source],
// 		}),
// 		{ seed: [], type: [], source: [] },
// 	);

export const groupFiltersBy = (...sections: string[]) => 
	(products: Product[]) =>
		products.reduce(
			(outer, val) =>
				sections.reduce(
					(inner, section) => ({
						...inner,
						[section]: [...outer[section], { label: val[section] }],
					}),
					outer,
				),
			sections.reduce((acc, val) => ({ ...acc, [val]: [] }), {}),
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
