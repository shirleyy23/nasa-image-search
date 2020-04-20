# NASA API Image Search

## About

A React-based NASA image search app that utilizes the [NASA Image and Video Library](https://api.nasa.gov/) and [Astronomy Picture of the Day APIs](https://api.nasa.gov/). The app is built with React features including hooks, Context API, and portals.

Styling of the app is done with [styled components](https://github.com/styled-components/styled-components).

The app is supported in IE11 through [React's IE polyfill](https://github.com/facebook/create-react-app/tree/master/packages/react-app-polyfill) and the [object-fit polyfill](https://github.com/constancecchen/object-fit-polyfill).

DEMO: [https://nasa-api-image-search.netlify.app](https://nasa-api-image-search.netlify.app)

### Installing

Clone the repo

```sh
git clone https://github.com/shirleyy23/nasa-image-search.git
cd nasa-image-search
npm install
```

## Usage

```sh
npm start
```

Enter a search in the search bar, and existing images corresponding to the search will appear.

To view the image in more detail, such as the image description and photographer, hover over the image and click "View Photo".

## Build

```sh
npm run build
```

## Built with

- [Create React App](https://github.com/facebook/create-react-app)

## License

This project is licensed under the MIT License.
