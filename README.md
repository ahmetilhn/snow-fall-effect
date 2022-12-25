# Snow Fall Effect

_It provides a realistic snowfall effect to your site to make your websites look more aesthetic during the winter months._

_Demo:_ https://www.iksirsi.com/

## Installation

##### Vue

```js
import SnowFall from "snow-fall-effect"
export default {
  data() {
    return {
      msg: 'foo'
    }
  }
  mounted() {
    const snowFall = new SnowFall();
    snowFall.init();
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
    this.$snowFall.init();
  },
  destroyed() {
    // For performance
    this.$snowFall.stopTheSnowing()
  },
}
```

##### React

```js
import { useEffect } from "react";
import SnowFall from "snow-fall-effect";
function App() {
  useEffect(() => {
    const snowFall = new SnowFall();
    snowFall.init();
    snowFall.makeItSnow();
  }, []);
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
    config: ConfigType;
    interval: ReturnType<typeof setInterval>;
    constructor(_config: ConfigType);
    get cordinate(): {
        left: number;
        top: number;
    };
    get width(): number;
    get icon(): string;
    get globalStyle(): string;
    injectGlobalCSS: () => void;
    get styles(): {
        svg: string;
        subContainer: string;
    };
    createContainer: () => void;
    get container(): HTMLDivElement;
    remove: (id: string) => void;
    createSubContainer: () => HTMLElement;
    createSnow: () => void;
    snowingInterval: () => void;
    makeItSnow: () => void;
    init: () => void;
    clear: () => void;
    stopTheSnowing: () => void;
}
```

_*Coded by ahmetilhan*_
