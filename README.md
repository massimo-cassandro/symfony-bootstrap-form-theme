# Symfony Bootstrap 4 Form Theme

A Bootstrap 4 Form Theme for Symfony 3.x (works with 4.x version too).

## Summary

### General

* A new `help` parameter allows you to add custom help text. It adds a `div.form-help-text` element to the rendered markup that contains the help string (HTML can be used). The `form-help-text` class is defined in `_forms.scss`.

```twig
{{ form_row(form.xxxx, {
  "help": "Help text",
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

* A new `params` parameter allows you to change some behaviour of thwe widgets. It is a json-like element whose sub-parameters changed depending on the widget used

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

* Custom checkbox control can be activated using the `params.bs_custom_control` parameter:

```twig
{{ form_row(form.xxxx, {
  "params": {
    "bs_custom_control": true
  }
}) }}
```

* Custom checkbox controls use `::before` and `::after` pseudo-elements, which makes it impossible to use the `:: before` pseudo-element used in other cases. For this reason, the required parameter, if associated with a custom-checkbox, generates a `<span class ="required">` element placed after the `label` element. Therefore, in this case, the required asterisk is located after the label string and not before:

```markup
<div class="custom-control custom-checkbox">
  <input type="checkbox" ... >
  <label...>...</label>
  <span class="required"></span>
</div>
```
* Actually, custom checkbox is incompatible with the `params.container` option, therefore it will be ignored even if it setted to true. For the same reason, the `help` parameter will not take effect with custom checkbox, as it is related to the `.form-group` container.

### Select elements

* Select elements have `custom-select` (<https://getbootstrap.com/docs/4.3/components/forms/#select-menu>) by default, this behaviour can be changed using the `params` element of `form_row`



## Use of the form theme

* Add the `/Resources/public/test_form/_forms.scss` file to your css (after Bootstrap css). Change default options if necessary
* Place the `/Resources/views/form/bs4_form_layout.html.twig` in your *view* folder (in this test app it is located in the `form` subdir)
* Modify your `/app/config/config.yml` file and add

```yaml
# Twig Configuration
twig:
  form_themes:
    - '/form/bs4_form_layout.html.twig'
```


## Use of the test Symfony application

You can clone the test app repository and run the form test app.
Clone the repo and run composer to install Symfony. Run npm in the public directory to install Bootstrap, if you need to test your changes.

The form test page url will be: `<your_test_domain>/test-form'.
The css and js directory is `/web/assets`.

* twig: `src/AppBundle/Resources/views/test_form/test_form.html.twig`
* controller: `src/AppBundle/Controller/TestFormController.php`

The test page gives you detailed informations about all form widgets:

![](docs/readme_files/sample.png)



## Reference:
* https://symfony.com/doc/3.4/form/form_themes.html
* https://symfony.com/doc/3.4/forms.html
* https://symfony.com/doc/current/reference/forms/types.html
* https://symfony.com/doc/3.4/form/rendering.html
* https://symfony.com/doc/3.4/reference/forms/twig_reference.html
* https://symfony.com/doc/3.4/form/bootstrap4.html
* https://getbootstrap.com/docs/4.3/components/forms/
* https://getbootstrap.com/docs/4.3/components/input-group/
* https://getbootstrap.com/docs/4.3/components/buttons/




