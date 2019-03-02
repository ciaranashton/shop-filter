import { items } from './items';
import { Filter, Filters, Product, getFilters } from './index';

describe('filters', () => {
	it('returns an array of filters', () => {
		const products: Product[] = items;
		const activeFilters: string[] = [];

		const expectedResult: Filters = {
			male: [
				selection('color', [
					filter('green', 1),
					filter('red', 1),
					filter('blue', 1),
					filter('white', 3),
                ]),
                selection('brand', [
				    filter('All Saints', 4),
				    filter('Volcom', 2),
                ]),
                selection('type', [
                    filter('jumper', 1),
                    filter('tshirt', 2),
                    filter('shirt', 2),
                    filter('trousers', 1),
                ])
			],
			female: [],
		};

		// console.log(JSON.stringify(getFilters(products), null, 2));

		expect(getFilters(products)).toEqual(expectedResult);
	});
});

const filter = (label: string, amount: number): Filter => ({
	label,
	amount,
});

const selection = (label: string, filters: Filter[]): any => ({
	label,
	filters,
});
