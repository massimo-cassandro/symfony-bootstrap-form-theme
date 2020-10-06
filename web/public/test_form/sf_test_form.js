/*
Utilizzato per la rappresentazione nella pagina di test.
Questo file non va incluso nei progetto in cui è utilizzato il template form


utilizza:
https://github.com/beautify-web/js-beautify
https://prismjs.com/
*/

// @codekit-append '../../../dist/js/_forms-multiselect.js'

/* globals Prism, html_beautify */
(() => {
  'use strict';

  const test_elements = document.querySelectorAll('.form-test-element:not(.todo)'),
    escapeHTML=function(text) {
      var characters = {
        '&': '&amp;',
        '"': '&quot;',
        '\'': '&#039;',
        '<': '&lt;',
        '>': '&gt;'
      };

      return (text + '').replace(/[<>&"']/g, function(m){
        return characters[m];
      });
    };

  test_elements.forEach( el => {
    let result = el.querySelector('.result > div').innerHTML.trim(),
      twig_el = el.querySelector('.twig'),
      twig_args = twig_el.dataset.args.trim(),
      isWidget = Boolean(twig_el.dataset.isWidget),
      beautify_opts = {
        'indent_inner_html': true,
        'indent_size': 2,
        'indent_char': ' ',
        'wrap_line_length': 40,
        'brace_style': 'expand',
        'preserve_newlines': true,
        'max_preserve_newlines': 5,
        'indent_handlebars': false,
        'extra_liners': ['/html']
      };

    // remove multiple .form-check elements from .form-collections
    let parser = new DOMParser(),
      temp_doc = parser.parseFromString(result, 'text/html'),
      commentNode = document.createComment('Other .form-check nodes');

    temp_doc.body.querySelectorAll('.form-collection .form-check:not(:first-child)').forEach(item => {
      item.replaceWith(commentNode);
    });

    commentNode = document.createComment('Other .custom-control nodes');
    temp_doc.body.querySelectorAll('.form-collection .custom-control:not(:first-child)').forEach(item => {
      item.replaceWith(commentNode);
    });

    // remove multiple options and option groups form select
    commentNode = document.createComment('Other `optgroup` nodes');
    temp_doc.body.querySelectorAll('select optgroup:not(:first-child)').forEach(item => {
      item.replaceWith(commentNode);
    });

    commentNode = document.createComment('Other `option` nodes');
    temp_doc.body.querySelectorAll('select option:not(:first-child)').forEach(item => {
      item.replaceWith(commentNode);
    });

    result = temp_doc.body.innerHTML;

    result = result.replace(/\s{2,}/g, ' ')
      .replace(/>/g, '>\n')
      .replace(/</g, '\n<')
      .replace(/\n{2,}/g, '\n');

    el.querySelector('.markup').innerHTML = '<pre><code class="language-markup">' +
      escapeHTML(html_beautify(result, beautify_opts)) +
    //.replace(/\r\n|\n\r|\r|\n/g, '<br>\n') +
    '</code></pre>';

    if(twig_args) {
      twig_args = JSON.stringify(JSON.parse(twig_args), null, 2)
        .replace('/[]/', '{}'); // JSON.stringify trasforma {} in []
    }

    twig_el.innerHTML = '<pre><code class="language-twig">'+
      '{{ ' + (isWidget? 'form_widget' : 'form_row') +
      '(form.xxxx' + (twig_args? ', ' + escapeHTML(twig_args) : '') + ') }}' +
      '</code></pre>';
  });


  Prism.highlightAll(true);

  const toTocElements = document.querySelectorAll('h2, .form-test-element h3');

  let toc ='';

  toTocElements.forEach( (item,idx) => {
    let this_id = item.id;

    if(!this_id) {
      this_id = item.innerText.toLowerCase()
        .replace(/todo$/, '')
        .replace(/[ |\W]+/g, '_'); //`toc-${idx}`;
      item.id = this_id;
    }

    let toc_str = `<a href="#${this_id}">${item.innerHTML}</a>`;

    item.insertAdjacentHTML('beforeend',
      '<a href="#top" class="badge-link badge badge-secondary initialism">top</a>' +
      `<a href="#${this_id}" class="badge-link badge badge-primary initialism">link</a>`
    );

    if(item.tagName === 'H2') {
      if(idx > 0 ) {
        toc += '</ul></li>';
      }
      toc += '<li>' + toc_str + '<ul>';

    } else {
      toc += '<li>' + toc_str + '</li>';
    }


    if(idx === toTocElements.length -1) {
      toc += '</ul></li>';
    }
  });

  document.getElementById('toc').innerHTML = `<ul>${toc}</ul>`;

})();
