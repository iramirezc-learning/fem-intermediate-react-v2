# Notes about Server Side Render for React

**Warning: Expected server HTML....**

When running the app with the script `npm run dev`, now it is throwing a warning error in the console that it was not before.

```js
Warning: Expected server HTML to contain a matching <div> in <div>.
    at div
    at App
```

**Warning: DevTools failed to load SourceMap:**

When running the app with the script `npm run start` it shows a warning about SourceMap, should I need to disable this in the Babel config?

```js
DevTools failed to load SourceMap: Could not parse content for http://localhost:3000/dist/dist/style.ee05eea2.css.map: Unexpected token < in JSON at position 0
```
