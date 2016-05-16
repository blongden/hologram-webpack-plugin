# hologram-webpack-plugin

Very simple webpack plugin to init and run [node-hologram](https://github.com/BrianDGLS/node-hologram) on the 'done' step.

To use, install from npm and add the plugin to webpack config, passing any hologram options as required.

```
npm i hologram-webpack-plugin
```

```
var HologramPlugin = require('hologram-webpack-plugin');

module.exports = {
    plugins: [
        new HologramPlugin({
            root: __dirname,
            title: "My Style Guide"
        });
    ]
};
```
