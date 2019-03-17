import { Product } from './';

export const groupFiltersBy = (...sections: string[]) => (
    products: Product[],
) =>
    products.reduce(
        (outer, product: Product) =>
            sections.reduce(
                (
                    inner: {
                        [key: string]: { [key: string]: string };
                    },
                    section: string,
                ) => ({
                    ...inner,
                    [section]: {
                        ...inner[section],
                        [product[section]]: inner[section][
                            product[section]
                        ]
                            ? inner[section][product[section]] + 1
                            : 1,
                    },
                }),
                outer,
            ),
        sections.reduce(
            (acc, section) => ({ ...acc, [section]: {} }),
            {},
        ),
    );
