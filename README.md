# Snow Fall Effect

_It provides a realistic snowfall effect to your site to make your websites look more aesthetic during the winter months._

_Demo:_ https://www.iksirsi.com/

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

##### Nuxt

_snow-fall.plugin.js_

```js
import SnowFall from "snow-fall-effect";

export default ({ app }, inject) => {
  inject(
    "snowFall",
    (() => {
      const snowFall = new SnowFall({
        color: "#82deed",
        density: 1,
        sizeRange: [5, 25],
      });
      snowFall.init();
      return snowFall;
    })()
  );
};
```

_nuxt.config.js_

```js
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/snow-fall.plugin.js', mode: 'client' }],
```

_layout.vue_

```js
export default {
  name: "layout.vue",
  data() {
    return {
    }
  }
  mounted() {
    this.$snowFall.makeItRain()
  },
  destroyed() {
    // For performance
    this.$snowFall.stopTheRain()
  },
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

##### Declare

```js
SnowFall {
    config: config; // not recomended for use
    interval: ReturnType<typeof setInterval>; // not recomended for use
    constructor(_config: config); // not recomended for use
    get cordinate(): {
        left: number;
        top: number;
    }; // not recomended for use
    get width(): number; // not recomended for use
    get icon(): string; // not recomended for use
    get commonCSS(): string; // not recomended for use
    injectCommonCSS: () => void; // not recomended for use
    get styles(): {
        svg: string;
        subContainer: string;
    }; // not recomended for use
    createContainer: () => void; // not recomended for use
    get container(): HTMLDivElement; // not recomended for use
    remove: (id: string) => void; // not recomended for use
    createSubContainer: () => HTMLElement; // not recomended for use
    createSnow: () => void; // not recomended for use
    rainInterval: () => void; // not recomended for use
    makeItRain: () => void; // you can use
    init: () => void; // you can use
    clear: () => void; // you can use
    stopTheRain: () => void; // you can use
}
```

_*Coded by ahmetilhan*_
