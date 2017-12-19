# dui
dui is a light weight dynamic front-end user interface framework developed in javascript and css.

# Grid Usage
Grid is created on percentage based. In the following example DUI automatically computes three columns with width 50%, 25%, 25% respectively. Define your own grid just by changing values after "ds-col-".
```HTML
<div class="ds-row">
  <div class="ds-col-50">  </div>
  <div class="ds-col-25">  </div>
  <div class="ds-col-25">  </div>
</div>
```
# Grid Responsive-ness
Responsive-ness can be achieved by adding "xl", "l", "m", "s" elements to the class. "m" means in tab view or less the colun becomes 100%.
"s" means column becomes 100% in mobile format. You can mix elements.
```HTML
<div class="ds-row">
  <div class="ds-col-m-50"></div>
  <div class="myclass ds-col-m-25 ds-bg-yellow"></div>
  <div class="ds-col-m-25 ds-bg-black"></div>
</div>

<div class="ds-row">
  <div class="ds-col-s-33.333"></div>
  <div class="myclass ds-col-s-33.333 ds-bg-yellow"></div>
  <div class="ds-col-s-33.333 ds-bg-black"></div>
</div>
```
# The ds-grid directive
By using ds-grid-<optional responsive element>-<width>, you can decide the column width with respective to responsive element.
In following example, " ds-grid-s-100 ds-grid-m-50 ds-grid-33.33" column will be one third in large format, 50% in tab format and 100% in short format.
```HTML
<div class="ds-row">
  <div class=" ds-grid-s-100 ds-grid-m-50 ds-grid-33.33"></div>
  <div class=" ds-grid-s-100 ds-grid-m-50 ds-grid-33.33  ds-bg-yellow">  </div>
  <div class="ds-col-m-33.333 ds-bg-black"> </div>
</div>
```
# Grid with Same height
By adding "ds-same-height" class all columns will remain same height. By adding "m" and "s" elements you can decide at what view they can go 100% width.

```HTML
<div class="ds-row ds-same-height">
  <div class="ds-col-50">
    <h1>Layout examples</h1>
    Different layout specimens to help you get started.<br />
    This overview gives you a hint of what you can do with DUI. Also the different layouts can help you as a blueprint when starting out with your own website creation
  </div>
  <div class="myclass ds-col-25">
    <h1>Layout examples</h1>
    Different layout specimens to help you get started.<br />
    Different layout specimens to help you get started.<br />
  </div>
  <div class="ds-col-25 hello">
    This overview gives you a hint of what you can do with DUI.
  </div>
</div>

<div class="ds-row ds-same-height-m">
  <div class="ds-col-40">
    <h1>Layout examples</h1>
    Different layout specimens to help you get started.<br />
    Different layout specimens to help you get started.<br />
  </div>
  <div class=" ds-col-25 ds-bg-yellow">
    <h1>Layout examples</h1>
    Different layout specimens to help you get started.<br />
    Different layout specimens to help you get started.<br />
    Different layout specimens to help you get started.<br />
  </div>
  <div class="ds-col-35 ds-bg-black ds-float-right">
    <h1>Layout examples</h1>
    Different layout specimens to help you get started.<br />
    Different layout specimens to help you get started.<br />
  </div>
</div>
```
