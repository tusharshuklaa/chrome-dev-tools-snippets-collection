// https://gist.github.com/viclafouch/157c2572d8235f4ebd1305b69b82f964

(function() {
  function insertCss(code) {
    const style = document.createElement('style');

    if (style.styleSheet) {  // IE
      style.styleSheet.cssText = code;
    } else { // Other browsers
      style.innerHTML = code;
    }

    document.getElementsByTagName("head")[0].appendChild(style);
  }

  const cssRules = {
    illicitDiv: ':is(b, i, q, em, abbr, cite, code, span, small, label, strong) > div { outline: 2px dashed red; }',
    htmlLangMissing: `html:not([lang]):before {
      display: block;
      content: "You didn't declare lang attribute";
      color: red;
    }`,
    webpMissing: `picture > source:first-child:not([type="image/webp"])::before {
      content: "Missing a webp source";
      padding: 1em;
      display: block;
      outline: 2px solid aqua;
    }`,
    badImg: `img:not([alt]) {
      outline: 2px dashed red;
    }`,
    unorderedHeaders: `:is(h2, h3, h4, h5, h6) ~ h1,
    :is(h3, h4, h5, h6) ~ h2,
    :is(h4, h5, h6) ~ h3,
    :is(h5, h6) ~ h4,
    h6 ~ h5 {
      outline: 2px dashed red;
    }`,
    inputIdMissing: `input:not([id]),
    label:not([for]) {
      outline: 2px dashed red;
    }`,
    unsecureLink: `a[target='_blank']:not([rel~='noopener']):not([rel~='noreferrer']) {
      outline: 2px dashed red;
    }`,
  };

  var css = `\
    ${Object.values(cssRules).join('\\')}
  `;
  insertCss(css);
})();
