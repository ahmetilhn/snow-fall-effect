# Snow Fall Effect

_It provides a realistic snowfall effect to your site to make your websites look more aesthetic during the winter months._

## Insatalation

##### HTML File

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--import inside head tag-->
    <script src="../dist/index.js" type="module"></script>
  </head>
  <body>
    <!--Call it snowfall here too.-->
    <script type="module" defer>
      import SnowFall from "../dist/index.js";
      new SnowFall();
    </script>
  </body>
</html>
```

##### Vue

```js
import SnowFall from "snow-fall"
export default {
  data() {
    return {
      msg: 'foo'
    }
  }
  mounted() {
    new SnowFall();
  }
}
```

## Configuration

##### Types

```js
{
  sizeRange: [number, number],
  color: string,
  speed: number,
}
```

```js
new SnowFall({
  sizeRange: [10, 20], // default (min 0)
  color: "#fff", // default
  speed: 10, // default (second)
});
```

_*Coded by ahmetilhan*_
