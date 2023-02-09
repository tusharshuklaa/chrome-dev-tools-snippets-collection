// Reference: https://stackoverflow.com/a/73836850/2996624

['unload', 'beforeunload'].forEach(function (eventName) {
  window.addEventListener(eventName, function () {
    debugger;
  });
});
