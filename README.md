# Shop Filter
This project aims to be used as a tool to explain how to build SPA for an e-commerce catalog. The desired outcome is to be used as an example for how to use function programming techniques with Typescript and React.

## Technical Design
In order to keep the concentration of the project on the logic the architecture and structure of the application will be kept as simple and minimalistic as possible. 

### Components
The application will be made up of four components. You can see the hierarchical structure below.

```
           Products
          ↗	
App → Shop
          ↘
           Filters
```

#### App
The `<App />` will act as the base of our application, containing nothing more than a logo and our Shop Component.

#### Shop - *smart*
The `<Shop />` 