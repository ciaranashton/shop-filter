import { groupFilters, groupFiltersBy } from './index';

describe('filters', () => {
	test('getFilters', () => {
		const groupFilters = groupFiltersBy('seed', 'type', 'source');
		const selectedFilters = groupFilters(items);

		console.log(selectedFilters);

		const expected = {
			seed: [{ label: 'malt', count: 3 }, { label: 'grain', count: 1 }],
			type: [{ label: 'scotch', count: 3 }, { label: 'bourbon', count: 1 }],
			source: [{ label: 'single', count: 3 }, { label: 'blend', count: 1 }],
		};

		expect(selectedFilters).toBe(expected);
	});
});

const items = [
	{
		id: 1,
		name: 'The Classic Laddie',
		distillery: 'Bruichladdich',
		source: 'single',
		seed: 'malt',
		type: 'scotch',
	},
	{
		id: 2,
		name: 'Laphroaig 10',
		distillery: 'Laphroaig',
		source: 'single',
		seed: 'malt',
		type: 'scotch',
	},
	{
		id: 3,
		name: 'Bulleit Bourbon',
		distillery: 'Bulleit',
		source: 'single',
		seed: 'grain',
		type: 'bourbon',
	},
	{
		id: 4,
		name: 'Monkey Shoulder',
		distillery: 'Monkey',
		source: 'blend',
		seed: 'malt',
		type: 'scotch',
	},
];
