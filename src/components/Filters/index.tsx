import * as React from 'react';
import styles from './filters.module.css';
// import { Filter } from '../Shop/index';

interface Props {
	filters: string[];
	selected: string[];
}

const Filters: React.SFC<Props> = ({ filters, selected }) => {
	return (
		// <div className="">
		<div className={styles.filters}>
			<h3>Filters</h3>
		</div>
	);
};

export default Filters;
