# vue-multi-page-demo
Vue multi page demo with vue-cli@3.0

## presets

```json
    "config-vue": {
      "useConfigFiles": true,
      "plugins": {
        "@vue/cli-plugin-babel": {},
        "@vue/cli-plugin-eslint": {
          "config": "standard",
          "lintOn": [
            "save"
          ]
        },
        "@vue/cli-plugin-unit-jest": {}
      },
      "router": true,
      "vuex": true,
      "cssPreprocessor": "sass"
    }
```