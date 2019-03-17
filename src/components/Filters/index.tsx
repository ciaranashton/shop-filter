import * as React from 'react';
import { useContext } from 'react';
import styles from './filters.module.css';
import { ShopContext } from '../Shop/ShopContext';

interface Props {
    filters: {
        seed?: { [key: string]: number };
        type?: { [key: string]: number };
        source?: { [key: string]: number };
    };
    selected: string[];
    setSelected: Function;
}

const FilterOptions = (props: { filter: string; count: number }) => {
    const { setSelected } = useContext(ShopContext);

    return (
        <div
            onClick={() => {
                setSelected(props.filter);
            }}>
            <div>{props.filter}</div>
            <div>{props.count}</div>
        </div>
    );
};

const FilterSection = (props: {
    label: string;
    sections: { [key: string]: number };
}) => (
    <div key={props.label}>
        <h4>{props.label}</h4>
        {Object.entries(props.sections).map(([filter, count], i) => (
            <FilterOptions filter={filter} count={count} key={i} />
        ))}
    </div>
);

const Filters: React.SFC<Props> = ({ filters, selected }) => (
    <div className={styles.filters}>
        <h3>Filters</h3>
        {Object.entries(filters).map(([label, sections], i) => (
            <FilterSection
                label={label}
                sections={sections}
                key={i}
            />
        ))}
    </div>
);

export default Filters;
