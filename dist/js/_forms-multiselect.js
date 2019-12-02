/*
This file must be included in projects that implement the
`bs4_form_layout.html.twig` template

https://github.com/massimo-cassandro/symfony-bootstrap-form-theme
*/

(() => {
  'use strict';

  // multiselect
  const multiselects = document.querySelectorAll('.form-multiselect');

  multiselects.forEach(item => {
    let placeholder = item.querySelector('.form-multiselect-placeholder');
    item.querySelectorAll('[type="checkbox"], [type="radio"]').forEach(el => {
      el.addEventListener('click', () => {
        let selected_labels = [];
        //let this_label = el.querySelector('label').innerText().trim();
        item.querySelectorAll('[type="checkbox"][checked], [type="radio"][checked]')

      }, false);
    });
  });

})();
