# Symfony Bootstrap 4 Form Theme

A Bootstrap 4 Form Theme for Symfony 3, 4 and 5.

For a complete lookup to all widgets and parameter take a look at <https://massimo-cassandro.github.io/symfony-bootstrap-form-theme/form-test.html>, that is the html produced by the Symfony apps, and can be viewed without installing it.

## Using the form theme

* Add the `/dist/scss/_forms.scss` file to your scss (after Bootstrap css). Change default options if necessary. In the test page, `_forms.scss` is bundled within the `/web/public/test_form/sf_test_form.scss` file.
* If you want to use the multiselect widget, add the `_forms-multiselect.js` and `_forms-multiselect.scss` files (both located in the `dist` folder) to your js and scss. In the test page, both files are bundled within the main js and scss files.
* Place the `/Resources/views/form/bs4_form_layout.html.twig` in your *view* folder (in this test app it is located in the `form` subdir)
* Modify your `/app/config/config.yml` file and add:

```yaml
# Twig Configuration
twig:
  form_themes:
    - '/path/to/bs4_form_layout.html.twig'
```


## Using the test Symfony application

You can clone the test app repository and run the form test app.
Clone the repo and run composer to install Symfony. Run npm in the public directory to install Bootstrap, if you need to test your changes.

The form test page url will be: `<your_test_domain>/test-form'.
The css and js directory is `/web/public`.

* twig: `src/AppBundle/Resources/views/test_form/test_form.html.twig`
* controller: `src/AppBundle/Controller/TestFormController.php`

The test page gives you detailed informations about all form widgets:

![](docs/readme_files/sample.png)


## Quick install using npm

If you don't need the whole test application, you can only download the files located in the `dist` folder, that contains the js and scss files and `bs4_form_layout.html.twig`.

You can also install them (with the addition of the `docs` folder) in your project using npm:

```
npm i symfony-bootstrap-form-theme
```

After the installation, you'll have to manually place the twig file in your templates folder, or, alternatively, add a new location to the twig path in your `config.yml` file:

```yaml
# Twig Configuration
twig:
    paths:
      #- ...
      - "%kernel.project_dir%/path/to/node_modules/symfony-bootstrap-form-theme"
```

Note that this option requires the node_modules folder to be distributed to your server.


## Reference

### General

* The `help` parameter allows you to add custom help text. It adds a `div.form-help-text` element to the rendered markup that contains the help string (HTML can be used). The `form-help-text` class is defined in `_forms.scss`.

```twig
{{ form_row(form.xxxx, {
  "help": "Help text"
}) }}
```

```markup
<div class="form-group">
  <!-- ... -->
  <div class="form-help-text">
    Help text
  </div>
</div>
```

* A new `params` parameter allows you to change some behaviour of the widgets. It is a json-like element whose sub-parameters changed depending on the widget used. Take a look at the [sample page](https://massimo-cassandro.github.io/symfony-bootstrap-form-theme/form-test.html) for a complete list of all
parameters.

```twig
{{ form_row(form.xxxx, {
  params: {
    bs_custom_control: true
  }
}) }}
```

* The `disabled: true` parameter adds a `disabled` class to the group container element (in addition to the `disabled` attribute of the field); this allows you to stylize the whole field group.

```twig
{{ form_row(form.xxxx, {
  disabled: true
}) }}
```

```markup
<div class="form-group disabled">
  <!-- ... -->
</div>
```


### Checkboxes

#### Single checkboxes

* The default behaviour generate the Boostrap default stacked markup wrapped into a `.form-group` container:

```markup
<div class="form-group">
  <div class="form-check">
    <input type="checkbox"
      id="custom-id"
      name="form[checkboxField2]"
      class="form-check-input"
      value="1">
    <label for="custom-id">
      Checkbox label
    </label>
  </div>
</div>
```

* You can avoid the `.form-group` container using the `params.container` parameter. Note however that any `help` parameter will be ignored, as it is related to the presence of the container:

```twig
{{ form_row(form.xxxx, {
  "params": {
    "container": false
  }
}) }}
```

* A single checkbox with label on top, can be obuained thru the `top_label` option. This option requires the `.form-group`, therefore the `params.container` is always forced to true.

```twig
{{ form_row(form.xxxx, {
  "params": {
    "top_label": true
  }
}) }}
```

* Custom checkbox control can be activated using the `params.bs_custom_control` parameter:

```twig
{{ form_row(form.xxxx, {
  "params": {
    "bs_custom_control": true
  }
}) }}
```

* Custom checkbox controls use `::before` and `::after` pseudo-elements, which makes it impossible to use the `::before` pseudo-element used for styling required fields' labels. For this reason, the required parameter, if associated with a custom-checkbox, generates a `<span class="required">` element placed after the `label` element. Therefore, in this case, the asterisk for required fields is located after the label string and not before:

```markup
<div class="custom-control custom-checkbox">
  <input type="checkbox" ... >
  <label...>...</label>
  <span class="required"></span>
</div>
```
* Actually, custom checkbox is incompatible with the `params.container` and `params.top_label` options, therefore they will be ignored even if they are setted to true. For the same reason, the `help` parameter will not take effect with custom checkbox, as it is related to the `.form-group` container.

#### Multiple checkboxes

Multiple checkboxes are element rendered by the `ChoyceType` type (https://symfony.com/doc/current/reference/forms/types/choice.html) with 'expanded' => true, 'multiple' => true options.

The **multiple columns** option requires a scss file included in my [m-utilities](https://github.com/massimo-cassandro/m-utilities) package.

After downloaded the package, you need to add the respoinsive columns file to your scss:

```scss
@import 'path/to/node_modules/m-utilities/sass_utilities/bs4_responsive_columns';
```

See the [`_forms.scss`](/symfony-bootstrap-form-theme/blob/master/web/public/forms/_forms.scss) file and [test result page](https://massimo-cassandro.github.io/symfony-bootstrap-form-theme/form-test.html#multiple_cboxes_multi_columns) for info and examples.

Take a look to the [test result page](https://massimo-cassandro.github.io/symfony-bootstrap-form-theme/form-test.html#multiple_checkboxes) for detailed info.

### Radios

Radio buttons options are the same of checkboxes.

### Multiselect
Multiple checkboxes and radio button can be displydes as a dropdown using the `multiselect` option.

This option is inspired by the <a href="http://davidstutz.de/bootstrap-multiselect/">Bootstrap Multiselect plugin</a>, and offers a way to arrange in a more compact way multiple elements.

For usability reasons, it should not be used with a large number of items.

To activate this option set `params.multiselect` to `true` for default settings, or set placeholder and specific classes for menu and buttons as described in [Bootstrap docs](https://getbootstrap.com/docs/4.4/components/dropdowns/):

```twig
{{ form_row(form.xxxx, {
  "params": {
    "multiselect": true
  }
}) }}

{{ form_row(form.xxxx, {
  "params": {
    "multiselect": {
        placeholder: 'Select an option'
        button_class: '...',
        menu_class: '...'
    }
  }
}) }}
```
This option needs some [Bootstrap JS components](https://getbootstrap.com/docs/4.4/components/dropdowns/#overview), [Popper.JS](https://popper.js.org/) and [jQuery](https://jquery.com/).

In addition, the `_forms.js` script is needed.

### Select elements

* Select elements have `custom-select` class (<https://getbootstrap.com/docs/4.4/components/forms/#select-menu>) by default, this behaviour can be changed using the `params` element of `form_row`

### Input groups

This option allows to add text, buttons, or button groups on either side of textual inputs, selects, or file inputs.

Add a `before` and/or an `after` parameter to the `params` option to generate an input group.

Look at the [test page](https://massimo-cassandro.github.io/symfony-bootstrap-form-theme/form-test.html#input_groups) for detailed info and examples

```twig
{{ form_row(form.xxxx, {
  "params": {
    "before": [
      {
        "type": "text",
        "content": "$"
      }
    ],
    "after": [
      {
        "type": "text",
        "content": ".00"
      }
    ]
  }
}) }}
```

## TODO
* switch to Symfony 4 or 5
* readonly checkboxes
* check bootstrap validation markup
* errors
* custom validity
* Grouped stacked checkboxes
* progress?
* buttons?
* date interval?
* css for sizing classes
* range: current value label, step labels
* Option to have help text printed at bottom of radio buttons or multiple checkboxes
* Option for adding custom classes to fieldset or div containers


## Reference
* <https://symfony.com/doc/current/form/form_customization.html>
* <https://symfony.com/doc/3.4/form/form_themes.html>
* <https://symfony.com/doc/3.4/forms.html>
* <https://symfony.com/doc/current/reference/forms/types.html>
* <https://symfony.com/doc/3.4/form/rendering.html>
* <https://symfony.com/doc/3.4/reference/forms/twig_reference.html>
* <https://symfony.com/doc/3.4/form/bootstrap4.html>
* <https://getbootstrap.com/docs/4.4/components/forms/>
* <https://getbootstrap.com/docs/4.4/components/input-group/>
* <https://getbootstrap.com/docs/4.4/components/buttons/>
