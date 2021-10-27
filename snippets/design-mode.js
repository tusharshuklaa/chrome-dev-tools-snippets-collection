// design-mode.js
// https://github.com/tusharshuklaa/chrome-dev-tools-snippets-collection
// Toggle design mode in browser on and off

// Keeping a global flag to maintain design mode toggle state
window.__designModeOn__ = !!window.__designModeOn__;

(function() {
  function designModeOn() {
    // Toggling designMode flag
    window.__designModeOn__ = !window.__designModeOn__;
    const method = window.__designModeOn__ ? 'addEventListener' : 'removeEventListener';
    const pd = event => event.preventDefault();
    const sp = event => event.stopPropagation();
    // Enable/Disable anchor links
    window[method]('click', pd, false);
    // Enable/Disable click eventlisteners
    window[method]("click", sp, true)
    // Enable design mode
    document.designMode = window.__designModeOn__ ? "on" : "off";
    console.info('Design Mode On', window.__designModeOn__);
  }

  designModeOn();
})();
