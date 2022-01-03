# ALVIN IONA EXAM

## LIBRARIES TO USE

- `react-router-dom` : *DONE*
- `react-bootstrap` : *DONE*
- `axios (or browser's fetch API)` : *DONE*
- `react-redux + redux-saga (optional)`
- `node-sass (optional)`
- `lodash (optional)`
- `eslint / tslint (optional)` : *DONE*

## API

- https://docs.thecatapi.com/

## Instructions

- Create a react app that loads images of cats. There are 2 pages: Homepage and Single Cat Page.
- The homepage has a select input box where you can choose a breed of cats. Selecting
a breed should load images of cats from the API listed under the corresponding breed.
Clicking on the "Load more" button should display more images that haven't been loaded
yet. Once the images already reach the end of the list, the "Load more" button should
disappear. Selecting a different breed should clear the previous images of cats and
display a new list of images.
- Clicking on "View details" under each image should redirect to the Single Cat Page. The
Single Cat Page should display the following data: image, breed name, origin,
temperament, and description. Clicking "Back" at the top of the Single Cat Page should
go back to the homepage with the current breed already selected, therefore, the
Homepage should immediately load images of cats under the previously selected breed.
- The API to use is at https://docs.thecatapi.com/. It is your responsibility to study and
figure out the correct endpoints to use. Please, handle any possible API exceptions by
notifying the user that fetching has failed. Message as an alert / banner: “Apologies but
we could not load new cats for you at this time! Miau!”
- Commit all code to a public git repository.

