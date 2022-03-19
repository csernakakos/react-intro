# React

## project1
project1 is our first React single-page application.
`npx create-react-app project1`

Our React app will be injected into `public/index.html > <div id="root"></div>`

In `src`, our own, compiled React components live. Our React code is compiled with Webpack before it reaches the browser.

`App.js` is a component. React components are functions that return a single JSX template. Component names start with a capital letter.

`index.css` is a global stylesheet for our entire websate, while `App.css` is used to style the `App` component.
`index.css` is imported into `index.js`. The stylesheet is effectively injected into the `<style>` tag in our HTML.
Look at your HTML now and note how in the `<head>` tag, first the `index.css` styles are listed, followed by the `App.css` styles. This means `App.css` styles will trump those in `index.css`.

The heart of our React app is `index.js`.

Everything inside our `public` folder is available to our code at the root level. So if you have logo.png directly inside the `public` folder, then in `App.js`, you can access that image like so:
```jsx
<img src="/logo.svg" />
```

Alternatively, we can use import statements to import images into our components.

## basics.html
basics.html is a quick tour on how to:
- Use a simple HTML page
- CDN to React, ReactDom, and Babel
- Create a basic React component
- Insert that basic component into the DOM

