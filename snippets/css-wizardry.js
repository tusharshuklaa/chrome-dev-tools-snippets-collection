// css-wizardry.js
// https://github.com/bgrins/devtools-snippets
// Exposes multiple functions for doing fancy CSS stuff from browser console

(function() {
  const insertCss = code => {
    const style = document.createElement('style');

    // Ommitted IE use-case on purpose
    style.innerHTML = code;
    document.getElementsByTagName("head")[0].appendChild( style );
  };

  const insertCssHighContrast = () => {
    // Notice the trailing backslashes, used to define multiline strings.
    const css = '\
      * { background: white ! important; color: black !important } \
      :link, :link * { color: #0000EE !important } \
      :visited, :visited * { color: #551A8B !important } \
    ';
    insertCss(css);
  };

  window.cssWizardry = {
    insertCss,
    insertCssHighContrast,
  };

  const groupName = 'CSS Wizardry';
  console.group(groupName);
  console.log('You can now access all of the functions available in window.cssWizardry', window.cssWizardry);
  console.groupEnd(groupName);
})();