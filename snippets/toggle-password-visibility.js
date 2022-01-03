(function() {
  const togglePasswordVisibility = () => {
    const __identifier = '__js_snippet__tpv__';
    const pwdEls = document.querySelectorAll('input[type=password]');

    if (pwdEls && pwdEls.length) {
      pwdEls.forEach(el => {
        el.classList.add(__identifier);
        el.type = 'text';
      });
    } else {
      // either passwords do not exist OR their type has already been changed
      const _pwdEls = document.getElementsByClassName(__identifier);

      if (_pwdEls && _pwdEls.length) {
        Array.from(_pwdEls).forEach(el => {
          el.classList.remove(__identifier);
          el.type = 'password';
        });
      } else {
        console.log('No password inputs found!!');
      }
    }
  };

  togglePasswordVisibility();
})();
