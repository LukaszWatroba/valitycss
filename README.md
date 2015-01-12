# ValityCss
Sass-based, minimalist and scalable framework.

[Demo](http://lukaszwatroba.github.io/valitycss)


## Installation
  - Use [bower](http://bower.io/) `bower install valitycss`, or download files [from the github repo](./dist)
  - Reference `vality.min.css` in your index.html file


## Sass
If you are using SASS, just import vality into sass file.

```scss
@import "vality";
```

You can override vality variables by simply redefining the variable before the `@import` directive, e.g.:

```scss
$font-family-sans: Helvetica, sans-serif;
$brand-primary: #5c31d9;
$link-color: #009cd6;

@import "vality";
```

The full list of vality variables can be found [here](https://github.com/LukaszWatroba/valitycss/blob/master/src/core/_settings.scss).


## Core
- [_base.scss](./src/core/_base.scss)
- [_helpers.scss](./src/core/_helpers.scss)
- [_normalize.scss](./src/core/_normalize.scss)
- [_settings.scss](./src/core/_settings.scss)


## Components:
- [_button.scss](./src/components/_button.scss)
- [_button-group.scss](./src/components/_button-group.scss)
- [_form.scss](./src/components/_form.scss)
- [_input.scss](./src/components/_input.scss)
- [_input-group.scss](./src/components/_input-group.scss)
- [_chackbox.scss](./src/components/_chackbox.scss)
- [_radio.scss](./src/components/_radio.scss)
- [_select.scss](./src/components/_select.scss)
- [_grid.scss](./src/components/_grid.scss)
- [_table.scss](./src/components/_table.scss)
- [_navigation.scss](./src/components/_navigation.scss)
- [_arrange.scss](./src/components/_arrange.scss)
- [_flex-embed.scss](./src/components/_flex-embed.scss)
- [_spinner.scss](./src/components/_spinner.scss)


## Utils
- [_align.scss](./src/utils/_align.scss)
- [_display.scss](./src/utils/_display.scss)
- [_layout.scss](./src/utils/_layout.scss)
- [_link.scss](./src/utils/_link.scss)
- [_offset.scss](./src/utils/_offset.scss)
- [_responsive.scss](./src/utils/_responsive.scss)
- [_size.scss](./src/utils/_size.scss)
- [_space.scss](./src/utils/_space.scss)
- [_states.scss](./src/utils/_states.scss)
- [_text.scss](./src/utils/_text.scss)
- [_typography.scss](./src/utils/_typography.scss)
