// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBooks: 'https://www.googleapis.com/books/v1/',
  firebase: {
    apiKey: "AIzaSyAC47nrHmeCqCmNUIcmBBIVcDiJR1_8Hzw",
    authDomain: "bzg-books-app.firebaseapp.com",
    databaseURL: "https://bzg-books-app.firebaseio.com",
    projectId: "bzg-books-app",
    storageBucket: "bzg-books-app.appspot.com",
    messagingSenderId: "693422170521"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
