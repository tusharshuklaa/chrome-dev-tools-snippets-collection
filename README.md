# 1. Chrome dev-tools snippets collection

- [1. Chrome dev-tools snippets collection](#1-chrome-dev-tools-snippets-collection)
  - [1.1. Introduction](#11-introduction)
  - [1.2. What is Chrome dev-tools snippet?](#12-what-is-chrome-dev-tools-snippet)
  - [## 1.3. Snippets](#-13-snippets)
    - [1.3.1. Console Dog 🐶](#131-console-dog-)
    - [1.3.2. CSS Wizardry](#132-css-wizardry)
    - [1.3.3. Design Mode](#133-design-mode)
    - [1.3.4. Form Visualizer](#134-form-visualizer)
    - [1.3.5. Get Query Parameters](#135-get-query-parameters)
    - [1.3.6. Hash Links](#136-hash-links)
    - [1.3.7. Lint HTML](#137-lint-html)
    - [1.3.8. Page Headers](#138-page-headers)
    - [1.3.9. Toggle Password Visibility](#139-toggle-password-visibility)
    - [1.3.10. View Cookies](#1310-view-cookies)
    - [1.3.11. Wrap Element](#1311-wrap-element)
  - [1.4. Disclaimer](#14-disclaimer)
  - [1.5. References](#15-references)
## 1.1. Introduction
Hey there ___🙌🏻___
<br>
This is a collection of useful/fancy snippets for chrome dev tools. I've picked some of them randomly from the internet 👨🏻‍🎤, some are Reference some other code on internet 👨🏻‍🔬 and some are purely mine 👨🏻‍🎨

## 1.2. What is Chrome dev-tools snippet?

In case you haven't heard of chrome dev tools snippets, this is just a way to store some javascript in your browser that you can run on any page via dev tools. You can think of these as a modern alternative of [bookmarklets](https://en.wikipedia.org/wiki/Bookmarklet). Firefox DevTools has a feature similar to Snippets called [Scratchpad](https://developer.mozilla.org/en-US/docs/Tools/Scratchpad). For more information, please checkout [Chrome Developers](https://developer.chrome.com/) blog on [Javascript Snippets](https://developer.chrome.com/docs/devtools/javascript/snippets/).

## 1.3. Snippets
---
### 1.3.1. Console Dog 🐶
[This snippet](/snippets/console-dog.js) is just for fun. It adds a `console.dog` method in the `console` method that outputs the given parameter in a fancy (woof-woof) manner.
<br>
```js
  console.dog('Woof Woof');
  console.dog({
    dog: 'woof-woof',
    car: 'meoWoof'
  });
```

### 1.3.2. CSS Wizardry
[This snippet](/snippets/css-wizardry.js) can be used to expose a global variable named `cssWizardry` which has several functions in it's arsenal which can be used to tweak the visuals of the current page.
<br>
- insertCss: This method is used to insert some css on the page directly from the console. It is beneficial when we need to add multiple classes at once. For example:
```js
  const css = '\
      * { background: white ! important; color: black !important } \
      :link, :link * { color: #0000EE !important } \
      :visited, :visited * { color: #551A8B !important } \
    ';
    window.cssWizardry.insertCss(css);
```
- insertCssHighContrast: This method is same as the example mentioned in `insertCss` available as a direct method to convert the visuals of the current page to high contrast. Usage:
```js
  window.cssWizardry.insertCssHighContrast();
```
If needed, morer similar functions can be exposed via this snippet.
<br>
**Reference**: [bgrins
/
devtools-snippets / insert-css](https://github.com/bgrins/devtools-snippets/tree/master/snippets/insert-css)

### 1.3.3. Design Mode
[This snippet](/snippets/design-mode.js) toggles design mode of a web page on or off. In case you don't know what design mode is, head on to [MDN Docs for design mode](https://developer.mozilla.org/en-US/docs/Web/API/Document/designMode).
<br>
When you run the snippet on a page for the first time, it will turn on the Design Mode and will toggle it's state afterwards. This is helpful in testing a webpage without actually changing it's content or code.
<br>
**Reference**: [viclafouch/designMode.js](https://gist.github.com/viclafouch/c6445aa2f0cf23f990587ad3061fd380)

### 1.3.4. Form Visualizer
[This snippet](/snippets/form-control.js) can be used to visualize all of the values of a form in a tabular format in console. It is useful when developing/testing huge forms.
<br>
Just run the template to print form data in the console.
<br>
**Reference**: [bgrins
/
devtools-snippets / formcontrols](https://github.com/bgrins/devtools-snippets/tree/master/snippets/formcontrols)

### 1.3.5. Get Query Parameters
[This snippet](/snippets/get-query-params.js) is a very simple yet useful snippet.
<br>
When you run the snippet on a page, it will print all of the query parameters as well as hash strings in the URL in a nice & tidy table format in the console. This is helpful in viewing all of the query parameters when the URL is very long and contains non-legible texts such as authentication URLs and complex redirection URLs.
<br>
It also exposes two methods under `window` namespace i.e. `printQP` and 'printURLHash' to print query parameters and hash strings in the URL respectively. These methods also accept an optional URL string in case the desired URL is other than the current URL.
<br>
Usage:
```js
  // Will print query parameters of the current URL
  window.printQP();
  // Will print query parameters of the URL passed as an argument
  window.printQP('https://example.com/page.html?token=skdjlsjdfsdsj');
  // 'printURLHash' can be used similarly
```
<br>
**Inspired from**: [bgrins
/
devtools-snippets / querystringvalues](https://github.com/bgrins/devtools-snippets/tree/master/snippets/querystringvalues)

### 1.3.6. Hash Links
[This snippet](/snippets/hash-link.js) can be used to retrieve the hash link of a section closest to the selected element.
<br>
Usage: Just run the snippet, then click on an element, and it will give you the closest #link to that page.
<br>
**Reference**: [bgrins
/
devtools-snippets / hashlink](https://github.com/bgrins/devtools-snippets/tree/master/snippets/hashlink)

### 1.3.7. Lint HTML
[This snippet](/snippets/lint-html.js) is one of strongest items in this arsenal. It highlights all of the html elements on the page with some potential issues. Just run the snippet to see the highlighted html elements on the page.
<br>
Issues that would be highlighted are as follows:
- **illicitDiv**: A `div` which is a child of any of the elements like `b, i, q, em, abbr, cite, code, span, small, label, strong`
- **htmlLangMissing**: Missing `lang`
attribute on the page
- **webpMissing**: A picture element is missing a webp source
- **badImg**: An `img` element is missing `alt` attribute
- **unorderedHeaders**: Bad sequence of heading elements `h1, h2, h3, h4, h5, h6` on page
- **inputIdMissing**: An `input` and a `label` element are missing `id` and `for` attribute respectively
- **unsecureLink**: An `a` tag that opens in a new tab (`target='_blank'`) is missing `rel~='noopener'` or `rel~='noreferrer'`
<br><br>
**Reference**: [viclafouch](https://gist.github.com/viclafouch/157c2572d8235f4ebd1305b69b82f964)

### 1.3.8. Page Headers
[This snippet](/snippets/page-headers.js) is a pure simpleton. It prints the response headers for current URL in the console using `console.table`.
<br>
**Reference**: [bgrins
/
devtools-snippets / page-headers](https://github.com/bgrins/devtools-snippets/tree/master/snippets/showheaders)

### 1.3.9. Toggle Password Visibility
We all would have done this at some point to see the password. Either to check the auto-filled password or just to be visually sure of what password we're typing. [This snippet](/snippets/toggle-password-visibility.js) is just that! It *toggles* the visibility of all the password fields on the page.
<br>
Usage:
Just run the snippet and it will toggle the password visibility.

### 1.3.10. View Cookies
Those who have worked with a lot of cookies 🍪 know that viewing all of the cookies of a page is not very convinient process. [This snippet](/snippets/view-cookies.js) prints all of the cookies stored in `document.cookies` of the page in a nice and tidy table in browser console.
<br>
**Reference**: [bgrins
/
devtools-snippets / viewcookies](https://github.com/bgrins/devtools-snippets/tree/master/snippets/viewcookies)

### 1.3.11. Wrap Element
[This snippet](/snippets/wrap-element.js) exposes a window function `wrapElement(element, tag)`. The first parameter is either a DOM Node, or a selector string, and the second parameter is the tag name for the wrapping element.
<br>
Example:
<br>
```js
wrapElement('.foo', 'h1');
wrapElement(document.querySelector('#bar'), 'div');
```
**Reference**: [bgrins
/
devtools-snippets / viewcookies](https://github.com/bgrins/devtools-snippets/tree/master/snippets/viewcookies)

### 1.3.12. Debug Reload(s)
There are times when our app starts to unexpectedly reload continuously due to a bug. It then becomes really hard to find the root cause of this issue. [This snippet](/snippets/debug-reload.js) adds a breakpoint on *unload* and *beforeunload* events and then we can check the stacktrace to check what is causing the reload(s).
<br>
Usage:
Just run the snippet and it will add the relvant breakpoint.
<br>
**Reference**: [stackoverflow](https://stackoverflow.com/a/73836850/2996624)
## 1.4. Disclaimer

I'll keep on adding new snippets as I find/write new ones and will add references of original sources as well. Let me know in case I've missed adding any credit for any of the code I'm sharing here. Also, please feel free to open a pull request if you'd like to contribute.

## 1.5. References
- [Markdown All In One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) - VS Code plugin to do a lot of cool markdown stuff including auto generation of table of contents.
- [bgrins / devtools-snippets](https://github.com/bgrins/devtools-snippets/tree/master/snippets) - Most of the snippet ideas are from this repository.