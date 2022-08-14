/*
This file must be included in projects that implement the
`bs*_form_layout.html.twig` template, if you are using the multiselect option

https://github.com/massimo-cassandro/symfony-bootstrap-form-theme


ES6:
-------------------------
import formMultiselect from '@massimo-cassandro/symfony-bootstrap-form-theme/dist/js/form-multiselect.esm';

formMultiselect();

NB: this version dropped the dependance from bootstrap 5 Dropdown JS Element

*/

// multiselect widget
// import { createPopper } from '@popperjs/core/dist/esm/popper-lite';
// import flip from '@popperjs/core/dist/esm/modifiers/flip';
// import preventOverflow from '@popperjs/core/dist/esm/modifiers/preventOverflow';

export default function(container=document) {

  const multiselects = container.querySelectorAll('.form-multiselect'),
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

    const btn = item.querySelector('.btn'),
      drpdown = item.querySelector('.dropdown-menu');

    btn.addEventListener('click', () => {
      drpdown.classList.toggle('show');
      let menu_on = drpdown.classList.contains('show');
      btn.classList.toggle('show', menu_on);
      btn.setAttribute('aria-expanded', menu_on);
    }, false);


    // createPopper(btn, drpdown, {
    //   // placement: 'bottom',
    //   modifiers: [flip, preventOverflow]
    // });

    setMultiselectPlaceholder(item);
  });

}
