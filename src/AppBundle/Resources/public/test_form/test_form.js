//* eslint no-console: 0, no-unused-vars: 0, no-empty:  0 */
/* globals Prism */


(function() {
  "use strict";

  $('.form_element').each( function() {
    var _this = $(this);

    $('.php_code', _this).html(
      '<pre><code class="language-php">' +
        "$form = $this->createFormBuilder()\n"+
        _this.data('php').trim() +
      '</code></pre>'
    );

    $('.twig_code', _this).html(
      '<pre><code class="language-twig">' +
       '{{ form_row(form.' + _this.data('form_obj_name') + ', ' +
          JSON.stringify(_this.data('twig'), null, 2).replace('/\[\]/', '{}') + // JSON.stringify trasforma {} in []
        ') }}' +
      '</code></pre>'
    );

    $('.html_code', _this).html(
      '<pre><code class="language-markup">' +
        JSutils.escapeHTML($('.result', _this).html().trim().replace(/><(?!\/)/g, '>\n  <').replace(/></g, '>\n<')) +
      '</code></pre>'
    );

  });


  Prism.highlightAll(true);


  $('#toc').html('<ul></ul>');
  var toc_wrapper = $('#toc ul');
  //var toc = [];
  $('.to-toc').each( function(idx) {
    var _this = $(this),
      this_id = 'toc' + idx;

    _this.attr('id', this_id);
    //toc.push([_this.text(), this_id]);
    toc_wrapper.append(
      '<li><a href="#' + this_id + '">' + _this.text() + '</a></li>'
    );

  });



})();
