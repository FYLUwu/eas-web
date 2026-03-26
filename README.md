# eas-web

a browser-based etch-a-sketch thing. hover over the grid to paint cells with random colors, click the button to start fresh with a new grid size.

![grid demo](https://i.imgur.com/placeholder.png)

## how it works

loads a 32x32 grid by default. each cell reacts to hover with a randomized color. hit "Create new" to pick a different size — anything up to 100x100.

no frameworks, no build step, just three files.

## run it

open `index.html` in a browser. that's it.

or if you want a local server:

```
npx serve .
```

## background

built as part of [The Odin Project](https://www.theodinproject.com/) foundations curriculum.
