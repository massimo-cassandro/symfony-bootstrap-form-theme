/*
  https://stylelint.io/user-guide/configure
  https://github.com/kristerkari/stylelint-scss
  https://github.com/chaucerbao/stylelint-config-concentric-order
  https://github.com/twbs/stylelint-config-twbs-bootstrap
*/

module.exports = {
  extends: [
    // 'stylelint-config-standard',
    // 'stylelint-config-rational-order'
    //'stylelint-config-concentric-order'
    "stylelint-config-twbs-bootstrap/scss"
  ],

  "ignoreFiles": ["**/*.css", "**/node_modules/**/*.*", "**/vendor/**/*.*"],

  rules: {
    'selector-list-comma-newline-after': 'always-multi-line',
    'number-leading-zero': null,
    'string-quotes': 'single',
    'no-missing-end-of-source-newline': null,
    'value-list-comma-newline-after': 'always-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    // 'declaration-block-semicolon-newline-before': 'always-multi-line',
    'max-nesting-depth': [
      3,
      {
        ignore: ['pseudo-classes']
      }
    ],
    'scss/at-import-no-partial-leading-underscore': null,
    'function-parentheses-space-inside': 'never-single-line',
    'selector-no-qualifying-type': [
      false,
      {
        ignore: ["attribute", "class", "id"]
      }
    ]
    /* ,
    "plugin/rational-order": [
      true,
      {
        "border-in-box-model": false,
        "empty-line-between-groups": true
      }
    ] */
  }
};
