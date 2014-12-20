ValityCss
=========

Minimalist, responsive and extensible framework build based on OOCSS and BEM principles.

[Demos](http://lukaszwatroba.github.io/valitycss)


## Core
- _base.scss
- _helpers.scss
- _normalize.scss
- _settings.scss



## Components:

#### Arrange:
```html
<div class="Arrange [Arrange--middle|Arrange--bottom|Arrange--equal] [Arrange--withGutter]">
  <div class="Arrange-item Arrange-item--fit">
    [content]
  </div>
  <div class="Arrange-item Arrange-item--fill">
    [content]
  </div>
  <div class="Arrange-item Arrange-item--fit">
    [content]
  </div>
</div>
```
_arrange.scss


#### ButtonGroup:
```html
<div class="ButtonGroup [ButtonGroup--hz|ButtonGroup--borderCollapse]">
  <div class="ButtonGroup-item">
    [content]
  </div>
  <div class="ButtonGroup-item">
    [content]
  </div>
  <div class="ButtonGroup-item">
    [content]
  </div>
</div>
```
_button-group.scss


#### Button:
```html
<a class="Button [Button--modifier]" role="button" href="[url]">Button text</a>
<button class="Button [Button--modifier]" type="submit">Button text</button>
<input class="Button [Button--modifier]" type="submit" value="Button text">
```
_button.scss


#### FlexEmbed:
```html
<div class="FlexEmbed [FlexEmbed--modifier]">
  <iframe class="FlexEmbed-item" src="…"></iframe>
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
  <div class="Grid-cell">…</div>
  <div class="Grid-cell">…</div>
</div>
```
```html
<div class="Grid [Grid--alignCenter|Grid--alignRight]">
  <div class="Grid-cell u-size2of8"></div>
  <div class="Grid-cell u-size2of8"></div>
  <div class="Grid-cell u-size2of8"></div>
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
<input type="text" name="email" class="Input [Input--modifier]" />
```
_input.scss


#### Radio:
```html
<div class="Radio [Radio--modifier]">
  <input type="radio" id="…" value="…" />
  <label for="…">Radio label</label>
</div>
```
_multiple.scss


#### Checkbox:
```html
<div class="Checkbox [Checkbox--modifier]">
  <input type="checkbox" id="…" value="…" />
  <label for="…">Checkbox label</label>
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
  <select name="options">
    <optgroup label="Option Group 1">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </optgroup>
    <optgroup label="Option Group 2">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </optgroup>
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
  <caption>Table Example</caption>
   
  <thead>
    <tr>
      <th>Table Header 1</th><th>Table Header 2</th><th>Table Header 3</th>
    </tr>
  </thead>
   
  <tbody>
    <tr>
      <td>Division 1</td><td>Division 2</td><td>Division 3</td>
    </tr>
    <tr>
      <td>Division 1</td><td>Division 2</td><td>Division 3</td>
    </tr>
    <tr>
      <td>Division 1</td><td>Division 2</td><td>Division 3</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td colspan="3">Table Foot</td>
    </tr>
  </tfoot>  
</table>
```
_table.scss



## Utils
- _align.scss
- _animations.scss
- _display.scss
- _layout.scss
- _offset.scss
- _responsive.scss
- _size.scss
- _space.scss
- _states.scss
- _text.scss
- _typography.scss
