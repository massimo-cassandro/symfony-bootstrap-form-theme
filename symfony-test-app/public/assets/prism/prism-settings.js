/* global Prism */
export default function () {
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
}
