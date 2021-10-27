// querystringvalues.js
// https://github.com/bgrins/devtools-snippets
// Print out key/value pairs from querystring.

(function() {

  const url = location;
  const querystring = location.search.slice(1);
  const prettify = qs => decodeURIComponent(qs.split("=")[1]).replace(/ /g,' ').replace(/\+/g, ' ');
  const tab = querystring.split("&").map(qs => ({ "Key": qs.split("=")[0], "Value": qs.split("=")[1], "Pretty Value": prettify(qs) }));
  const groupName = "Query Parameters";

  console.group(groupName);
  console.log(`URL ${url}\nQS: ${querystring}`);
  console.table(tab);
  console.groupEnd(groupName);

})();
