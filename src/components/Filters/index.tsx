import React from 'react';
import styles from './style.module.css';
import { Filter } from '../Shop/index';

interface Props {
	filters: Filter[];
	selected: string[];
}

const Filters: React.SFC<Props> = ({ filters, selected }) => {
	return (
		<div className={styles.filters}>
			<h3>Filters</h3>
		</div>
	);
};

export default Filters;
