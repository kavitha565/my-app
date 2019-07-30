// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoint : {
    loginUrl : "http://localhost:4000/api/login",
    registerUrl : "http://localhost:4000/api/register",
    productAddUrl : "http://localhost:4000/api/product/addProduct",
    productGetAllUrl : "http://localhost:4000/api/product/getAllProduct",
    productGetUrl :  "http://localhost:4000/api/product/getProductBySearchData",
    productUpdateUrl : "http://localhost:4000/api/product/updateProduct",
    productDeleteUrl : "http://localhost:4000/api/product/deleteProduct",
    getCountriesUrl : "http://demo0674380.mockable.io/getCountries",
    getProductsInfo :"http://demo0674380.mockable.io/getProductData",
    course : "http://localhost:4000/api/courses"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
