# Snow Fall Effect

_It provides a realistic snowfall effect to your site to make your websites look more aesthetic during the winter months._

## Insatalation

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

##### React

```js
import { useEffect } from "react";
import SnowFall from "snow-fall-effect";
function App() {
  useEffect(() => {
    new SnowFall();
  });
  return <div className="App"></div>;
}

export default App;
```

##### HTML File

_Imports into html are not supported. :(_

## Configuration

##### Types

```js
{
  sizeRange: [number, number],
  color: string,
  speed: number,
  density: number;
}
```

```js
new SnowFall({
  sizeRange: [10, 20], // default (min 0)
  color: "#fff", // default
  speed: 10, // default (second)
  density: 0.5; // default (recomended)
});
```

_*Coded by ahmetilhan*_
