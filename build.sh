#!/bin/bash

echo 'cleaning older files...'
rm dist/*.*
rm dist/**/*.*
echo ' ok'

printf '\nrunning rollup...'
npx rollup --config
echo ' ok'

printf '\ncopying scss files to dist...'
cp src/scss/*.* ./dist/scss
echo ' ok'

printf '\ncopying twig template to dist...'
cp sf-test-app/templates/bs4_form_layout_WORK_COPY.html.twig dist/bs4_form_layout.html.twig
echo ' ok'

printf '\nswitching symfony `.env` file...'
# the `.env.prod` file is set for production scope and it is needed for
# generating the static doc file
mv sf-test-app/.env sf-test-app/_env
mv sf-test-app/.env.prod sf-test-app/.env
echo ' ok'

printf '\nremoving symfony cache...'
# you may need to change permissions for your `var` dir
# in your local envinronment this may be done with
# sudo chmod -R 0777 sf-test-app/var
cd sf-test-app
php bin/console cache:clear --env prod
#php bin/console cache:clear --env dev # unnecessary
cd ..
# brute force way
#rm -R sf-test-app/var/cache/dev
#rm -R sf-test-app/var/cache/prod
echo ' ok'

printf '\ncopying assets to docs dir...'
ASSETS_APP_DIR=sf-test-app/public/assets
ASSETS_DOCS_DIR=docs/assets/

printf '\ncleaning older docs files...'
rm docs/*.*
rm docs/assets/*.*

cp "$ASSETS_APP_DIR"/sf-bs4-form-test-min.js $ASSETS_DOCS_DIR
cp "$ASSETS_APP_DIR"/sf-bs4-form-test-min.js.map $ASSETS_DOCS_DIR
cp "$ASSETS_APP_DIR"/sf-bs4-form-test.css $ASSETS_DOCS_DIR
cp "$ASSETS_APP_DIR"/sf-bs4-form-test.css.map $ASSETS_DOCS_DIR
cp "$ASSETS_APP_DIR"/prism/prism-min.js $ASSETS_DOCS_DIR
cp "$ASSETS_APP_DIR"/prism/prism-min.js.map $ASSETS_DOCS_DIR
echo ' ok'

printf '\nrunning gulp...\n'
gulp
echo ' ok'

printf '\nrestoration of dev `.env` file...'
mv sf-test-app/.env sf-test-app/.env.prod
mv sf-test-app/_env sf-test-app/.env
echo ' ok'

printf '\n\nEND'
