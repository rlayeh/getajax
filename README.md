# Smallest possible lib for ajax call

A simple and easy way to fetch data from your server.

It is NOT supporting CORS.

It is NOT adding advanced error handling.

It is just supporting simplest possible GET call to the server.
If you are building small website and used library size matters - then getajax is created for you!

Minified file size ~157 bytes!

## Installation

Using npm

`npm install --save getajax`

## Usage

ES6:

`import getajax from "getajax";`

CommonJS

`require("getajax")`

## Using function in your code

To fetch something from the server simply execute:

`getajax(path, successCallback, exceptionCallback)`

Example:

```
getajax("myfile.json", result => {
  console.log(result);
},
xhr => {
  throw xhr;
})
```
