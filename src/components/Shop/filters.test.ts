import { groupFiltersBy } from './index';

describe('filters', () => {
  test('getFilters', () => {
    const groupFilters = groupFiltersBy('seed', 'type', 'source');
    const filters = groupFilters(items);

    const expected = {
      seed: { malt: 3, grain: 1 },
      type: { scotch: 3, bourbon: 1 },
      source: { single: 3, blend: 1 },
    };

    expect(filters).toEqual(expected);
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
