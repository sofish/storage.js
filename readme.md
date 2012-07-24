### Cross Browser Text Storage \[localStorage\]

------------------------------------------------
### \# Useage: 

it works cross-page and cross-browser(include IE6+).

__Note__ that it is a fallback for native `localStorage`. if your app only works on IE8+ and other morden browsers, you'll never need this. 
meanwhile, if a single page app that need to work with `lt IE8`, you can use [textStorage.js](https://gist.github.com/1221115)

otherwise, you can use it like this:

```js
// the storage object have 4 method
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
$('body').storage.get('keyName'); // 'the value of the key'
```

### \# set a right path to the iframe

```js
// you can find the line at storage.js
// make sure the path of 'storage.php' is set correctly
iframe.attr('src', './storage.php');
```

### \# Cross Domain:

if your app need to works with pages that have different sub-domain. you need to add one more line on both `jquery-storage.js` and `storage.html`:

```js
document.domain = 'YOUR DOMAIN HOST';
```
for example, if you have `a.example.com` and `b.example.com` to host the files, you need to do like this:

```js
//storage.js
document.domain = 'example.com';
// the other code
// ...
```
```html
<!-- storage.html -->
<script type="text/javascript">
document.domain = 'example.com';
...
<script>
```

Note that the fallback will not work with cross host. such as working with `example.com/storage.js` and `github.com/storage.html`. but you're very welcome to commit a cross host solution.
