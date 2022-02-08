module.exports = {
  env: {
    broswer: true,
    node: true,
  },
  extends: [
    // vue
    // "plugin:vue/vue3-essential", // lv1
    "plugin:vue/vue3-strongly-recommended", // lv2
    // "plugin:vue/vue3-recommended", // lv3
    // js
    "eslint:recommended",
  ],
  perserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "never",
      },
    ],
    "vue/html-selfclosing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
  },
};
