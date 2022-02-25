# neo-jquery slider plugin

primer plugin hecho para la libreria neo-jquery basado en funciones para la utilización de slider cuenta con su propio CSS

## usos

para usarlos son de las mismas formas de la libreria la version browser tiene mas formas

### browser

*metodo normal*

``` html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/neo-jquery-slide/style.css">

<script src="https://cdn.jsdelivr.net/npm/neo-jquery"></script>
<script src="https://cdn.jsdelivr.net/npm/neo-jquery-slide"></script>
```

``` js
$slider(".mySlides").showSlider(1);
```

*using with cjs*

``` js
const $slider = require('neo-jquery-slide');

$slider(".mySlides").showSlider(1);
```

*using with esm*

``` js
import $slider from 'neo-jquery-slide'

$slider(".mySlides").showSlider(1);
```