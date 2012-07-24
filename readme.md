## Cross Browser Text Storage \[localStorage\]

------------------------------------------------
### Useage: 

it works cross-page and cross-browser(include IE6+).

__Note__ that it is a fallback for native `localStorage`. if your app only works on IE8+ and other morden browsers, you'll never need this. 
meanwhile, if a single page app that need to work with `lt IE8`, you can use [textStorage.js](https://gist.github.com/1221115)

```js
$('SOME SELECTOR').storage

// get a item from the local storage
.get(key)

// set a value to a item
.set(key, value)

// remove a item from the local storage
.remove(key)

// clear all stored items
.clear()
```

a sample:

```js
$('body').storage.set('keyName', 'the value of the key');
$('body').storage.get('keyName')
// > 'the value of the key'
```