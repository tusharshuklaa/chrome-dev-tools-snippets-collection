// get-query-params.js
// https://github.com/tusharshuklaa/chrome-dev-tools-snippets-collection
// Print out key/value pairs from querystring and hash string form URL.

(function() {

  const _getUrl = url => {
    return new URL(`${(url || location)}`);
  };

  const _printTable = config => {
    const prettify = qs => decodeURIComponent(qs.split("=")[1]).replace(/ /g,' ').replace(/\+/g, ' ');
    const tab = config.items.map(qs => (
      { "Key": qs.split("=")[0], "Value": qs.split("=")[1], "Pretty Value": prettify(qs) }
    ));

    console.group(config.groupName);
    console.log(`URL ${config.url}\n${config.type}: ${config.typeString}`);
    console.table(tab);
    console.groupEnd(config.groupName);
  };

  window.printQP = url => {
    const _url = _getUrl(url);
    const querystring = _url.search.slice(1);

    _printTable({
      groupName: 'Query Parameters',
      type: 'QS',
      items: querystring.split("&"),
      typeString: querystring,
      url: _url,
    });
  };

  window.printURLHash = url => {
    const _url = _getUrl(url);
    const hash = _url.hash.slice(1);

    _printTable({
      groupName: 'URL Hashes',
      type: 'Hash',
      items: hash.split("&"),
      typeString: hash,
      url: _url,
    });
  }

  window.printQp();
  window.printURLHash();

})();
