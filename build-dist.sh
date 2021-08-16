#!/bin/bash

echo 'RUN rollup & sass before building\n\n'

echo 'cleaning older files...'
rm dist/*.*


# printf '\nrunning rollup & sass...'
# npx rollup --config
# sh ./sass.sh


# printf '\ncopying scss files to dist...'
# cp src/*.scss ./dist/
# cp src/*.js ./dist/


printf '\ncopying twig template to dist...'
cp symfony-test-app/templates/bs4_form_layout_WORK_COPY.html.twig dist/bs4_form_layout.html.twig
cp symfony-test-app/templates/bs5_form_layout_WORK_COPY.html.twig dist/bs5_form_layout.html.twig


printf '\nswitching symfony `.env` file...'
# the `.env.prod` file is set for production scope and it is needed for
# generating the static doc file
mv symfony-test-app/.env symfony-test-app/_env
mv symfony-test-app/.env.prod symfony-test-app/.env


printf '\nremoving symfony cache...'
# you may need to change permissions for your `var` dir
# in your local envinronment this may be done with
# sudo chmod -R 0777 symfony-test-app/var
cd symfony-test-app
php bin/console cache:clear --env prod
#php bin/console cache:clear --env dev # unnecessary
cd ..
# brute force way
rm -R symfony-test-app/var/cache/dev
rm -R symfony-test-app/var/cache/prod


printf '\ncleaning older docs files...'
rm docs/*.*
rm docs/assets/*.*

printf '\ncopying assets to docs dir...'
cp symfony-test-app/public/assets/prism/prism-min.js docs/prism/
cp symfony-test-app/public/assets/prism/prism-min.js.map docs/prism/

cp symfony-test-app/public/assets/bs4/sf-bs4-form-test-min.js docs/assets-bs4/
cp symfony-test-app/public/assets/bs4/sf-bs4-form-test-min.js.map docs/assets-bs4/
cp symfony-test-app/public/assets/bs4/sf-bs4-form-test.css docs/assets-bs4/
cp symfony-test-app/public/assets/bs4/sf-bs4-form-test.css.map docs/assets-bs4/

cp symfony-test-app/public/assets/bs5/sf-bs5-form-test-min.js docs/assets-bs5/
cp symfony-test-app/public/assets/bs5/sf-bs5-form-test-min.js.map docs/assets-bs5/
cp symfony-test-app/public/assets/bs5/sf-bs5-form-test.css docs/assets-bs5/
cp symfony-test-app/public/assets/bs5/sf-bs5-form-test.css.map docs/assets-bs5/


printf '\nrunning gulp...\n'
gulp


printf '\nrestoring dev `.env` file...'
mv symfony-test-app/.env symfony-test-app/.env.prod
mv symfony-test-app/_env symfony-test-app/.env


printf '\n\nEND'
