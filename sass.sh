# test files
TEST_DIR=./symfony-test-app/public/assets
node_modules/.bin/sass \
"$TEST_DIR"/bs4/sf-bs4-form-test.scss:"$TEST_DIR"/bs4/sf-bs4-form-test.css \
"$TEST_DIR"/bs5/sf-bs5-form-test.scss:"$TEST_DIR"/bs5/sf-bs5-form-test.css  \
--load-path=node_modules/ \
--load-path=src/ \
--load-path=./symfony-test-app/public/assets/prism \
--source-map --style=compressed --watch
