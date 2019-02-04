import React from 'react';
import styles from './style.module.css';
import { Product } from '../Shop/index';

interface Props {
	products: Product[];
}

const Products: React.SFC<Props> = ({ products }) => (
	<section className={styles.products}>
		<h3>Products</h3>
		<ul>
			{products.map(p => (
				<li key={p.id}>{p.title}</li>
			))}
		</ul>
	</section>
);

export default Products;
