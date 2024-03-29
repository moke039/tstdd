module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: "false",
        useBuiltIns: "usage",
        targets: "> 0.25%, not dead",
      },
    ],
    "@babel/preset-typescript",
  ],
  env: {
    test: {
      presets: [
        ["@babel/preset-env", { targets: { node: "current" } }],
        "@babel/preset-typescript",
      ],
    },
  },
};
