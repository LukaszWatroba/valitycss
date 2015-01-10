# ValityCss
Minimalist, responsive and extensible framework build based on OOCSS and BEM principles.


## Demos
  - [GitHub](http://lukaszwatroba.github.io/valitycss)
  - [CodePen](http://codepen.io/LukaszWatroba/pen/raLZZb)


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
- _base.scss
- _helpers.scss
- _normalize.scss
- _settings.scss



## Components:
#### Arrange:
```html
<div class="Arrange [Arrange--middle|Arrange--bottom|Arrange--equal] [Arrange--withGutter]">
  <div class="Arrange-item Arrange-item--fit">[content]</div>
  <div class="Arrange-item Arrange-item--fill">[content]</div>
  <div class="Arrange-item Arrange-item--fit">[content]</div>
</div>
```
_arrange.scss


#### ButtonGroup:
```html
<div class="ButtonGroup [ButtonGroup--hz|ButtonGroup--borderCollapse]">
  <div class="ButtonGroup-item">[content]</div>
  <div class="ButtonGroup-item">[content]</div>
  <div class="ButtonGroup-item">[content]</div>
</div>
```
_button-group.scss


#### Button:
```html
<a class="Button [Button--modifier]" role="button" href="[url]">[label]</a>
<button class="Button [Button--modifier]" type="button">[label]</button>
<input class="Button [Button--modifier]" type="button" value="[label]">
```
_button.scss


#### FlexEmbed:
```html
<div class="FlexEmbed [FlexEmbed--modifier]">
  <iframe class="FlexEmbed-item" src="[src]"></iframe>
</div>
 
<div class="FlexEmbed [FlexEmbed--modifier]">
  [iframe|object|embed]
</div>
```
_flex-embed.scss


#### Form:
```html
<form class="Form [Form--modifier]">
  <div class="Form-item [Form-item--modifier]">
    [content]
  </div>

  <div class="Form-item [Form-item--modifier]">
    [content]
  </div>
</form>
```
_button.scss


#### Grid:
```html
<div class="Grid [Grid--modifier]">
  <div class="Grid-cell">[content]</div>
  <div class="Grid-cell">[content]</div>
</div>
```
```html
<div class="Grid [Grid--alignCenter|Grid--alignRight]">
  <div class="Grid-cell u-size2of8">[content]</div>
  <div class="Grid-cell u-size2of8">[content]</div>
  <div class="Grid-cell u-size2of8">[content]</div>
</div>
```
_grid.scss


#### InputGroup:
```html
<div class="InputGroup [InputGroup--modifier]">
  <div class="InputGroup-item [InputGroup-item--modifier]">
    [input|button]
  </div>
  <div class="InputGroup-item [InputGroup-item--modifier]">
    [input|button]
  </div>
</div>
```
_input-group.scss


#### Input:
```html
<input type="[type]" class="Input [Input--modifier]" />
```
_input.scss


#### Radio:
```html
<div class="Radio [Radio--modifier]">
  <input type="radio" id="[id]" value="[value]" />
  <label for="[id]">[label]</label>
</div>
```
_multiple.scss


#### Checkbox:
```html
<div class="Checkbox [Checkbox--modifier]">
  <input type="checkbox" id="[id]" value="[value]" />
  <label for="[id]">[label]</label>
</div>
```
_multiple.scss


#### Navigation:
```html
<ol class="Navigation [Navigation--modifier]">
  <li class="Navigation-item">
    [content]
  </li>
</ol>
```
_navigation.scss


#### Select:
```html
<div class="Select [Select--modifier]">
  <select>
    <option value="[option]">[text]</option>
    <option value="[option]">[text]</option>
    <option value="[option]">[text]</option>
  </select>
</div>
```
_select.scss


#### Spinner:
```html
<span class="Spinner [Spinner--modifier]"></span>
```
_spinner.scss


#### Table:
```html
<table class="Table [Table--condensed|Table--bordered]">
  <caption>[content]</caption>
   
  <thead>
    <tr>
      <th>[content]</th>
      <th>[content]</th>
    </tr>
  </thead>
   
  <tbody>
    <tr>
      <td></td>
      <td></td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td colspan="2">[content]</td>
    </tr>
  </tfoot>  
</table>
```
_table.scss



## Utils
- _align.scss
- _display.scss
- _layout.scss
- _link.scss
- _offset.scss
- _responsive.scss
- _size.scss
- _space.scss
- _states.scss
- _text.scss
- _typography.scss
