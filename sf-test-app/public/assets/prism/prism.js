//main
import 'prismjs/components/prism-core.js';
import 'prismjs/components/prism-markup.js';
import 'prismjs/components/prism-css.js';
import 'prismjs/components/prism-clike.js';
import 'prismjs/components/prism-javascript.js';

//languages
import 'prismjs/components/prism-css-extras.js';
import 'prismjs/components/prism-json.js';
// import 'prismjs/components/prism-less.js';
// import 'prismjs/components/prism-markdown.js';
import 'prismjs/components/prism-markup-templating.js'; // richiesto da php
import 'prismjs/components/prism-php.js';
// import 'prismjs/components/prism-php-extras.min.js';
// import 'prismjs/components/prism-pug.js';
// import 'prismjs/components/prism-scss.js';
// import 'prismjs/components/prism-sql.js';
// import 'prismjs/components/prism-stylus.js';
import 'prismjs/components/prism-twig.js';
// import 'prismjs/components/prism-typescript.js';
// import 'prismjs/components/prism-yaml.js';

//plugins
// import 'prismjs/plugins/command-line/prism-command-line.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js';
import 'prismjs/plugins/previewers/prism-previewers.js';
import 'prismjs/plugins/toolbar/prism-toolbar.js'; // richiesto da show-languages
import 'prismjs/plugins/show-language/prism-show-language.js';
import 'prismjs/plugins/highlight-keywords/prism-highlight-keywords.js';
// import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import 'prismjs/plugins/unescaped-markup/prism-unescaped-markup.js';


/* global Prism */
Prism.plugins.NormalizeWhitespace.setDefaults({
  'remove-trailing': false,
  'remove-indent': false,
  'left-trim': false,
  'right-trim': false,
  //'break-lines': 80,
  //'indent': 2,
  'remove-initial-line-feed': true,
  'tabs-to-spaces': 2
  //'spaces-to-tabs': 4
});

