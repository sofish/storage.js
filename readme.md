### Cross-Browser & Cross-Page Text Storage \[localStorage\]

------------------------------------------------
### \# files:

```bash
.
├── index.html					demo page
├── jquery-storage.js				jQuery plugin
├── readme.md					
└── storage.html					iframe source with textStorage.js
```

### \# useage: 

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

### \# cross domain:

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

### \# license:

use the MIT License, you can use, modify and even more actions as you like without permition. 


Copyright (C) 2012 Sofish Lin http://sofish.de

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
