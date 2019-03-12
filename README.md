# Shop Filter

This project aims to be used as a tool to explain how to build SPA for an
e-commerce catalog. The desired outcome is to be used as an example for how to
use function programming techniques with Typescript and React.

## App Definition

An e-commerce website for categorising and selling Whisky's from around the
globe.

## Technical Design

In order to keep the concentration of the project on the logic the architecture
and structure of the application will be kept as simple and minimalistic as
possible.

### Components

The application will be made up of four components. You can see the hierarchical
structure below.

```
           Products
          ↗
App → Shop
          ↘
           Filters
```

#### App

`App` acts as the base of our application, containing nothing more than a logo
and our Shop Component.

#### Shop

As we will be using React and not a global state library the `Shop` component
will be a "smart" component that manages the state responsible for displaying
the products and filters.

#### Products

`Products` is a dumb component responsible for displaying the products based on
selected filters.

#### Filters

`Filters` is a dumb component responsible for selecting and displaying available
filters.

### State Management

The single source of truth for the state will be managed in the `Shop`
component. State will contain the data for products available and selected
filters.

#### Products state

```js
products = [
  {
    id: 1,
    name: 'The Classic Laddie',
    distillery: 'Bruichladdich',
    source: 'single',
    seed: 'malt',
    type: 'scotch',
  },
];
```

#### Filters state

```js
selectedFilters = {
  seed: ['malt', 'grain'],
  type: ['scotch'],
  source: ['single', 'blend'],
};
```
