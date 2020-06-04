/*
This file must be included in projects that implement the
`bs4_form_layout.html.twig` template, if you are using the multiselect option

https://github.com/massimo-cassandro/symfony-bootstrap-form-theme
*/

// multiselect widget
export function form_multiselect() {
  'use strict';

  const multiselects = document.querySelectorAll('.form-multiselect'),
    setMultiselectPlaceholder = multiselect_item => {
      let selected_labels = [];
      multiselect_item.querySelectorAll('[type="checkbox"]:checked, [type="radio"]:checked')
        .forEach( checked_el => {
          selected_labels.push(
            checked_el.closest ('.form-check').querySelector('label').innerText.trim()
          );
        });
      multiselect_item
        .querySelector('.form-multiselect-placeholder').innerText =
          selected_labels.length? selected_labels.join(', ') : '—';
    };

  multiselects.forEach( item => {
    item.querySelectorAll('[type="checkbox"], [type="radio"]').forEach( el => {
      el.addEventListener('click', () => {
        setMultiselectPlaceholder(item);
      }, false);
    });

    setMultiselectPlaceholder(item);
  });

}
