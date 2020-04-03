# DisplayFlex
> Flexible based customizable grid.


## Install:

### npm
``npm i displayflex``

### cdn
```
<link/>
```
## config
```
    $config: (
    "dev": false,
    "rem": 16px,
    "columns": 12,
    "breakpoints": (
        "xs": 0,
        "sm": 769px,
        "md": 1024px,
        "lg": 1216px,
        "xl": 1408px
    ),
    "container-gap": 5px 15px 30px,
    "col-gap": 5px 10px 40px
    );
```

## methods
### row
>  create squares just indicating width

```
.myNameClass {
  @include row(100px 1fr 100px);
}
```
### media query
> from is a mixin that "from" this measure
```
  @include from(md) {
      font-size: 12px;
  }
```
> until es un mixin que "hasta" esta medida
```
  @include until(md) {
      font-size: 12px;
  }
```
> fit is a mixin where you create a div that grows in proportion
```
@ include fit(200px 300px)
```
> convert px units to rem
rem(30px)