import React from 'react';
import styles from './style.module.css';
import { Filter } from '../Shop/index';

interface Props {
	filters: Filter[];
}

const Filters: React.SFC<Props> = ({ filters }) => {
	return (
		<div className={styles.filters}>
			<h3>Filters</h3>
		</div>
	);
};

export default Filters;
