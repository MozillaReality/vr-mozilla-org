# Old Fashioned
A Next.js starter with scss, autoprefixer, SSR, and static generator

## Installation

Requires [Node](https://nodejs.org/en/)
```
$ npm install
```

## Develop
After running, you can access at localhost:3000
```
$ npm run dev
```

## Build
```
$ npm run build
```

## Deploy to Github Pages (see issues!)
```
$ npm run deploy
```

## Other
if you are publishing to a static site, set your production URL in variables.js


## Issues
A current limitation of next.js static site exporting is that it needs to be in the root directory. This can present an issue when hosting on Github pages without a custom domain. Setting variables.js is a partial workaround, but it will still throw a console error. It also has no effect on assets linked to from CSS. You can use CSS-in-JS to get around this if needed. If you are using a custom domain or hosting at the root, then you won't have any issues.
