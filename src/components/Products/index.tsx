import * as React from 'react';
import styles from './products.module.css';

export interface Product {
	id: number;
	name: string;
	distillery: string;
	source: string;
	seed: string;
	type: string;
}

interface Props {
	products: Product[];
}

const Products: React.SFC<Props> = ({ products }) => (
	<section className={styles.products}>
		<h3>Products</h3>
		<ul>
			{products.map(p => (
				<li key={p.id}>{p.name}</li>
			))}
		</ul>
	</section>
);

export default Products;
