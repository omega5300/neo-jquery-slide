# neo-jquery slider plugin

primer plugin hecho para la libreria neo-jquery basado en funciones para la utilización de slider cuenta con su propio CSS

## usos

para usarlos son de las mismas formas de la libreria la version browser tiene mas formas

``` html
<!-- SLIDE START -->
  <div id="slider-container" class="slider-container">
    <div class="slider" id="slider">
      <div class="slider__element slider__element--lightcoral">1</div>
      <div class="slider__element slider__element--lightgreen">
        <img
          src="https://images.pexels.com/photos/40661/tiger-snow-growling-zoo-40661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div class="slider__element slider__element--lightskyblue">3</div>
      <div class="slider__element slider__element--lightsalmon">4</div>
    </div>
  </div>
  <div class="slider-buttons">
    <button id="button-left" class="button">&lt;</button>
    <button id="button-right" class="button">&gt;</button>
  </div>
<!-- SLIDE END -->
```

### styles

#### browser
``` html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/neo-jquery-slide/style/style.css">
```

#### electron
``` html
<link rel="stylesheet" href="<path>/node_modules/neo-jquery-slide/style/style.css">
```

#### bundle
```
import 'neo-jquery-slide/style/style.css'
```

### js

*using in browser*
``` html

<script src="https://cdn.jsdelivr.net/npm/neo-jquery"></script>
<script src="https://cdn.jsdelivr.net/npm/neo-jquery-slide"></script>
```

``` js
$slider("slider")
```

*using with cjs*

``` js
const $slider = require('neo-jquery-slide');

$slider("slider")
```

*using with esm*

``` js
import $slider from 'neo-jquery-slide'

$slider("slider")
```
