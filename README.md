## Building a typescript with webpack
### we first need to create our tsconfig

```shell
tsc --init
```
This is the creation of a typescript configuration package(tsconfig.json) that helps our
typescript code to properly convert to the desired javascript version.
And also configuring which direction to read (typescript files) and output(javascript files).
```json
 {
  "compilerOptions": {
    "watch": true,
    "outDir": "study-src",
    "rootDir": "study-src/typescript",
    "module": "commonjs",
    "target": "es5",
    "moduleResolution": "node",
    "allowJs": false,
    "alwaysStrict": true,
    "noImplicitAny": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "sourceMap": true,


    "lib": [
      "DOM",
      "ES5"
    ]
  },

  "outDir": "study-src/",
  "exclude": [
    "node_modules"
  ]
}

```

We need to keep track of our packages with some dependencies.So we create package.json
to help us manage that.
```shell
npm ---init
```
We need some dependencies locally to manage our project
a these are installed in the development dependencies
### ts-loader
TypeScript loader for webpack. It teaches webpack how to compile typescript into javascript code.
### webpack

>At its core, webpack is a static module bundler for modern JavaScript applications.
When webpack processes your application, it internally builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets to serve your content from.
>

### webpack-cli
This helps us to interact with webpack via the command line
```json
  "devDependencies": {
    "ts-loader": "^9.3.1",
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0",
    "typescript": "^4.7.4"
  },

```
we can install each dependency as our development dependency with
the simple command
```shell
npm install typescript -D   #or
npm install webpack -D      # or the rest
```